const mongoose = require('mongoose')

const productsc = new mongoose.Schema({
    name:String,
    price:String,
    user_ID:String,
    company:String
});

module.exports=mongoose.model("products", productsc)