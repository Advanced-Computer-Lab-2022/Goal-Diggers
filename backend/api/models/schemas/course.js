const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
        image : String,
        createdBy : Object,
        courseId : Object,
        totalHours : Number,
        price : Number,
        rate : Number,
        discount : Object,
        subtitle : Object,
        summary : String, 
        title : String,
        overviewVideo : [{videoSchema}],
        examsId : [Object],
        sections : [{sectionSchema}]
}, {timestamps : true});

const sectionSchema = new Schema({
        totalHours : Number,
        overviewVideo : [{videoSchema}],
        title : String,
        summary : String,
        quizsId : [Object],
        videos : [{videoSchema}],
}, {timestamps : true});

const videoSchema = new Schema({
        title : String,
        url : String,
        order : Number,
}, {timestamps : true});

module.exports = courseSchema;