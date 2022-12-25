const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
        password : {type : String,  required : true ,minlength:8, maxlength:1024 },
        email :  {type : String, minlength:5, maxlength:1024 },
        minibiography :  {type : String, minlength:5, maxlength:1024 },
        username : {type : String,  required : true ,minlength:2, maxlength:255, unique : true,dropDups: true,},
        rate : Number,
        ratedetails : [Number],
        numberofrates : Number,
        reviews : [Object],
        accepted : Boolean,
},{timestamps : true});

module.exports = instructorSchema;