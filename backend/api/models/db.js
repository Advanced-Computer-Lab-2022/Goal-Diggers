const mongoose = require('mongoose');

const userSchema = require('./schemas/user');
const roleSchema = require('./schemas/role');
const examSchema = require('./schemas/exam');
const courseSchema = require('./schemas/course');
const notechema = require('./schemas/note');

const User = mongoose.model('user', userSchema);
const Role = mongoose.model('role', roleSchema);
const Exam = mongoose.model('exam', examSchema);
const Course = mongoose.model('course', courseSchema);
const Note = mongoose.model('note', notechema);

module.exports.User = User;
module.exports.Role = Role;
module.exports.Exam = Exam;
module.exports.Course = Course;
module.exports.Note = Note;