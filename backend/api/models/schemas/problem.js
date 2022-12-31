const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const problemSchema = new Schema({
        answer : String,
        writer : Object,
        followups : [Object],
        status : String,
        type : String,
        question : String,
        courseID : Object,
        answerd : Boolean,
},{timestamps : true});

module.exports = problemSchema;