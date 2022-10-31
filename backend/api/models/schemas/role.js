const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
        password : {type : String,  required : true ,minlength:8, maxlength:1024 },
        role : String,
        username : {type : String,  required : true ,minlength:2, maxlength:255, unique : true,dropDups: true,},
},{timestamps : true});

module.exports = roleSchema;