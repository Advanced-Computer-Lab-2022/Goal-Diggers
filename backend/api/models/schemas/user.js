const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inProgressCoureseSchema = new Schema({
        inProgressCourese : Object,
        watchedVideos : [Object],
},{timestamps : true});

const userSchema = new Schema({
        email : {type : String, unique : true,dropDups: true,minlength:5, maxlength:255, required : true },
        password : {type : String,  required : true ,minlength:8, maxlength:1024 },
        confirmed : Boolean,
        completedCourese : [Object],
        inProgressCourese : [{inProgressCoureseSchema}],
        username : {type : String,  required : true ,minlength:2, maxlength:255, unique : true,dropDups: true,},
        firstname : {type : String,  required : true ,minlength:2, maxlength:255},
        lastname : {type : String,  required : true ,minlength:2, maxlength:255},
        gender : {type : String,  required : true ,enum : ['Male', 'Female']},
},{timestamps : true});




module.exports = userSchema;