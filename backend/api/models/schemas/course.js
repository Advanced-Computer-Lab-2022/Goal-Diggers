const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title : String,
    url : String,
    order : Number,
}, {timestamps : true});

const sectionSchema = new Schema({
    totalHours : Number,
    title : String,
    summary : String,
    quizsId : [Object],
    videos : [{videoSchema}],
}, {timestamps : true});


const courseSchema = new Schema({
        image : String,
        createdById : Object,
        createdByName : String,
        courseId : Object,
        totalHours : Number,
        price : Number,
        rate : Number,
        discount : Object,
        subtitle : Object,
        subject : String,
        summary : String, 
        title : String,
        overviewVideo : [{videoSchema}],
        examsId : [Object],
        sections : [{sectionSchema}]
}, {timestamps : true});


module.exports = courseSchema;