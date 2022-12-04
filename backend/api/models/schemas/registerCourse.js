const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    discription : String,
    url : String,
    title : String,
}, {timestamps : true});

// const sectionSchema = new Schema({
//     totalHours : Number,
//     title : String,
//     summary : String,
//     quizsId : [Object],
//     videos : [{videoSchema}],
// }, {timestamps : true});

const subtitleSchema = new Schema({
    totalHours : Number,
    title : String,
    summary : String,
    videos : [{videoSchema}],
}, {timestamps : true});


const registerCourseSchema = new Schema({
        image : String,
        createdByID : Object,
        createdByName : String,
        courseID : Object,
        studentID : Object,
        completedVideos : [Object],
        attemptedQuizs : [Object],
        completedQuizs : Number,
        totalItems : Number,
        // courseId : Object,
        totalHours : Number,
        price : Number,
        rate : Number,
        numberofrates : Number,
        reviews : [String],
        discount : Object,
        // subtitle : Object,
        rateInstructor : Boolean,
        rateCourse : Boolean,
        subject : String,
        summary : String, 
        title : String,
        overviewVideo : videoSchema,
        examsId : [Object],
        subtitles : [Object]
}, {timestamps : true});


module.exports = registerCourseSchema;