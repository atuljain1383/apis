const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({    
    CustomerId:String,
    ProductId:String,
    DateTime:Date,
    Quantity:Number,
    IsActive:Boolean,
    CreateDate:Date
})

const Order = mongoose.model("Order", OrderSchema); 
module.exports = Order;