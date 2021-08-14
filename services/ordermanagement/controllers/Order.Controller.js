const Order = require("../models/Order.Model");
const mongoose = require("mongoose");
const publish = require("../pubsub/publisher");
const amqp = require('amqplib/callback_api');
var channel;
var connection;


const getAll = async(req, res)=> {
    try{       
        
        const orders = await Order.find();       
        res.send(orders)
    }
    catch(e){
        console.log(e);
        res.send(e);
    }
}

const getOrder = async(req, res)=> {
    try{
        
        console.log(req.params.id);
        const order = await Order.find({_id : req.params.id});
        res.send(order)

    }
    catch(e){
        console.log(e);
        return e;
    }
 }

 const CreateOrder = async(req, res)=> {
    try{
        
        const order = new Order(req.body);
        const ret = await order.save();       
        res.send(ret)
    }
    catch(e){
        console.log(e);
        return e;
    }
 }

 const updateOrder = async(req, res)=> {
    try{
        
        const order = new Order(req.body);
        const currentOrder = await Order.find({_id : req.params.id});        
        
        currentOrder.Quantity = order.Quantity;
        currentOrder.IsActive = order.IsActive;         
        const ret = await currentOrder.save();       
        res.send(ret)
    }
    catch(e){
        console.log(e);
        return e;
    }
 }

 module.exports = {
    getAll,
    getOrder,
    CreateOrder,
    updateOrder
};