const { User, Role, Exam, Course, Note } = require('../models/db');
const bcrypt = require("bcrypt");
const _ = require('lodash')

//POST /api/add-user
module.exports.addUser = async (req, res) => {
    const new_user = _.pick(req.body, ['username', 'password', 'role']);
    await Role.findOne({username : new_user.username}).then(
        async user => {
            if(user)
                return res.status(400).json({error : "Username Already exist"});
            else {
                new_user.password = await bcrypt.hash(new_user.password, 10);
                await Role.create(new_user).then(
                    user =>  {return res.status(200).json({user});}
                )
            }
        }
    )
}


// GET url : /api/all-courses
module.exports.getAllCourses = async (req, res) => {
    await Course.find({}).then(
        courses => {
            console.log(courses);
            return res.status(200).json({courses});
        }
    )
}

// GET url : /api/instructor-courses
module.exports.getInstructorCourses = async (req, res) => {
    await Course.find({}).then(
        courses => {return res.status(200).json({courses});}
    )
}

// GET url : /api//search/:keyword
module.exports.getSearchCourses = async (req, res) => {
    const keyword = req.params.keyword;
    await Course.find({$or : [{createdByName : { $regex: '.*' + keyword + '.*' }},
        {subject : { $regex: '.*' + keyword + '.*' }},{title : { $regex: '.*' + keyword + '.*' }}]}).then(
            courses => { 
                return res.status(200).json({courses});
            }
    );
}

// GET url : api/course/:id
module.exports.getCourse = async (req,res) => {
    const id = req.params.id;
    await Course.findById(id).then(
        course => {
            if(course)
                return res.status(200).json({course});
            return res.status(404).json({error : "Course Not Found"});
        }
    )
}