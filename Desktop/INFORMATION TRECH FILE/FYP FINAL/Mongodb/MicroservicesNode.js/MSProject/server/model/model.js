const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    type:{
        type:String,
        required: true,
    },
    name:{
        type:String,
        required: true,
        unique:true
    },
    address:{
        type:String,
        required: true,
        unique:true
    },
    address2:{
        type:String,
        required: true,
        unique:true
    },
    city:{
        type:String,
        required: true,
        unique:true
    },
    state:{
        type:String,
        required: true,
        unique:true
    },
    zip:{
        type:String,
        required: true,
        unique:true
    },
    location:{
        type:String,
        required: true,
        unique:true
    },
    hours:{
        type:String,
        required: true,
        unique:true
    },
    services:{
        type:String,
        required: true,
        unique:true
    }
      
})

const storedb = mongoose.model('storedbs', schema);

module.exports = storedb;