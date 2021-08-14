const User = require("../models/User.Model");
const mongoose = require("mongoose");
const amqp = require('amqplib/callback_api');
var channel = '';
var connection = '';


const getUsers = async(req, res)=> {
    try{             
        const users = await User.find();        
        res.send(users);
    }
    catch(e){
        console.log(e);
        res.send(e)
    }
}

const getUser = async(req, res)=> {
    try{
        
        console.log(req.params.id);
        const user = await User.find({_id : req.params.id}); 
        console.log(user.UserName);       
        res.send(user);

    }
    catch(e){
        console.log(e);
        return e;
    }
 }

 const saveUser = async(req, res)=> {
    try{
        const user = new User(req.body);
        const ret = await user.save();       
        res.send(ret)
    }
    catch(e){
        console.log(e);
        return e;
    }
 }

 const updateUser = async(req, res)=> {
    try{
        
        const user = new User(req.body);
        const currentUser = await User.find({_id : user.id});
        
        currentUser.FirstName = user.FirstName;
        currentUser.LastName = user.LastName;         
        const ret = await currentUser.save();       
        res.send(ret)
    }
    catch(e){
        console.log(e);
        return e;
    }
 }

 module.exports = {
    getUsers,
    getUser,
    saveUser,
    updateUser
};