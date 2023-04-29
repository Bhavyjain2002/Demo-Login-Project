const mongoose = require('mongoose')

const firstsc = new mongoose.Schema({
    name:String,
    email:String,
    pass:String
});

module.exports=mongoose.model("newusers", firstsc)