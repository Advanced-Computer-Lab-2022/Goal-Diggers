const mongoose = require('mongoose');

const userSchema = require('./schemas/user');
const roleSchema = require('./schemas/role');
const examSchema = require('./schemas/exam');

const User = mongoose.model('user', userSchema);
const Role = mongoose.model('role', roleSchema);
const Exam = mongoose.model('exam', examSchema);

module.exports.User = User;
module.exports.Role = Role;
module.exports.Exam = Exam;