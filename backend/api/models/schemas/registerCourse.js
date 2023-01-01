const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    discription : String,
    url : String,
    title : String,
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
        totalHours : Number,
        price : Number,
        rate : Number,
        numberofrates : Number,
        reviews : [String],
        discount : Object,
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