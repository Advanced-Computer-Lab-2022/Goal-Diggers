const { User, Role, Exam, Course, Instructor, RegisterCourse, CourseRequest, Wallet, Problem} = require('../models/db');
const bcrypt = require("bcrypt");
const _ = require('lodash');
const {ObjectId} = require('mongodb');
const pdf = require('html-pdf');
const {pdfTemplate, certificateTemplate} = require('./generatePDF');
const jwt =require("jsonwebtoken");
require('dotenv').config();
const stripe = require("stripe")(
  "sk_test_51MEsfyD8LuqksnQUfvq6KNmUnIpERtruMHXIKHHnc7EOy51ZdpuYFZ4VlfaIbztSjh7kRZM3OSR0gVIifQjmmhZ1008I0rGA9q"
);

// const transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: process.env.username, // generated ethereal user
//       pass: process.env.password, // generated ethereal password
//     },
//   });

//POST 
// url : api/payment/create" Create client secret  
module.exports.createPayment =  async (req, res) => {
  const total = req.body.price;
  console.log("Payment Request recieved for this ruppess", total);
  const payment = await stripe.paymentIntents.create({
    amount: total * 100 ,
    currency: "usd",
  });
  res.status(200).json({
    clientSecret: payment.client_secret,
  });
};

//POST 
// url : api/buy-course/ user buy the course need to student id
module.exports.buyCourse =  async (req, res) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    let course = req.body.course;
    const price = req.body.price;
    course.price = price;
    course.registers ++;
    Course.updateOne({_id : course._id}, course).then();
    course.attemptedQuizs = [];
    course.completedQuizs = 0;
    course.completedVideos = [];
    course.notes = [];
    course.courseID = course._id;
    course.studentID = verified.user;
    course = _.omit(course, '_id');
    RegisterCourse.create(course).then(
      result => {
        Wallet.findOne({instructorID : ObjectId(course.createdById)}).then(
          wallet =>{
            if(wallet) {
              wallet.total += course.price*0.7;
              let exist = false;
              wallet.details.forEach((month, index) => {
                  if(new Date(month.month).getMonth() === new Date().getMonth() && new Date(month.month).getFullYear() === new Date().getFullYear()) {
                    wallet.details[index].total += course.price*0.7;
                    exist = true;
                  }
              });
              if(!exist)
                  wallet.details.push({month: `${new Date().getMonth() + 1}-1-${new Date().getFullYear()}`, total : course.price*0.7});
              Wallet.updateOne({_id : wallet._id}, wallet).then();
            }
            else {
              let wallet = {instructorID : ObjectId(course.createdById), total : course.price*0.7, details : [{month: `${new Date().getMonth() + 1}-1-${new Date().getFullYear()}`, total : course.price*0.7}]};
              Wallet.create(wallet).then()
            }
          }
        )
        return res.status(200).json({});
      }
    )    
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
};

//GET
// url : /api/get-quiz/12 -> to get quiz
module.exports.getQuiz = async (req,res)=>{
    const quizID = ObjectId(req.params.id);    
    Exam.findById(quizID).then(
        quiz => {
                  res.status(200).json({quiz})
        }
    );
}

//GET
// url : /api/wallet -> to get wallet // need updates
module.exports.getWallet = async (req,res)=>{
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);   
    Wallet.findOne({instructorID : ObjectId(verified.user)}).then(
        wallet => {
          return res.status(200).json({wallet});
        }
      )
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
}

//POST
//url : /api/uploadvideos/12 -> to upload the course subtitles
module.exports.uploadVideos = async (req, res) => {
    const courseID = ObjectId(req.params.id);
    const subtitles = req.body; 
    Course.findById(courseID).then(
        course => {
            course.subtitles = subtitles;
            Course.findByIdAndUpdate(courseID, course).then(
                result => {res.status(200).json({})}
            )
        }
    );
};

//POST
//url : /api/uploadpreviewvideo/12 
module.exports.uploadPreviewVideo = async (req, res) => {
    const courseID = req.params.id;
    const video = req.body; 
    Course.findById(courseID).then(
        course => {
            course.overviewVideo = video;
            Course.findByIdAndUpdate(courseID, course).then(
                result => {res.status(200).json({})}
            )
        }
    );
};


//POST 
// url : api/add-course/ 
module.exports.addCourse = async (req, res) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    const course = req.body.course;
    course.rate = 0;
    course.ratedetails = [0,0,0,0,0,0];
    course.reviews = [];
    course.numberofrates = 0;
    course.registers = 0;
    course.viewers = 0;
    course.createdById = ObjectId(verified.user);
    course.createdByName = verified.username;
    course.overviewvideo = {title : "Welcome video", url : course.overviewVideo, discription : course.summary};
    Course.create(course).then(
      result => {return res.status(200).json({result});}
    )
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
}

//POST
//url : /api/rate-course/12 -> rate to course
module.exports.addCourseRate = async (req, res) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    const courseID = ObjectId(req.params.id);
    const courseRate = Number(req.body.rate);
    const courseReview = req.body.review;
    Course.findById(courseID).then(
        course => {
            course.rate += courseRate;
            course.numberofrates ++;
            course.ratedetails[courseRate] ++;
            // later we add user details for the review
            course.reviews.push({text : courseReview, rate : courseRate, username : verified.username});
            Course.findByIdAndUpdate(courseID,course).then(
                result => {res.status(200).json({})}
            );
        }
    );
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
};

//POST
//url : /api/rate-instructor/12 -> rate to instructor
module.exports.addInstructorRate = async (req, res) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    const instructorID = ObjectId(req.params.id);
    const instructorRate = Number(req.body.rate);
    const instructorReview = req.body.review;
    Instructor.findById(instructorID).then(
        instructor => {
            instructor.rate += instructorRate;
            instructor.numberofrates ++;
            instructor.ratedetails[instructorRate] ++;
            instructor.reviews.push({text : instructorReview, rate : instructorRate, username : verified.username});
            Instructor.findByIdAndUpdate(instructorID,instructor).then(
                result => {res.status(200).json({});}
            );
        }
    );
    
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
};

//POST
//url : /api/add-discount/12 -> instructor add discount
module.exports.addInstructorDiscount = async (req, res) => {
    const courseID = req.params.id;
    const discount = req.body.body;
    Course.findByIdAndUpdate(courseID, {discount : discount}).then(
        course => {
            res.status(200).json({});
        }
    );
};

//GET
//url : /api/reviews-ratings/-> instructor get reviews and ratings
module.exports.getReviewsAndRatings = async (req, res) => {
  try {
    const token=req.cookies.token;
    console.log(token);
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    const id = ObjectId(verified.user);
    Instructor.findById(id).then(
        instructor => {
            console.log(instructor);
            res.status(200).json({reviews : instructor.reviews, rate : instructor.rate, numberofrates : instructor.numberofrates, ratedetails : instructor.ratedetails});
        }
    )
    
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
};

//POST
//url : /api/add-quiz/12 -> add quiz to course
module.exports.addQuiz = async (req, res) => {
    const quiz = req.body.quiz;
    Exam.create(quiz).then(
        result => {return res.status(200).json(result._id)}
    );
};

//GET
//url : /api//verify/12 -> to verify the sent link
module.exports.Linkverify = async (req, res) => {
    try {
      let token = req.params.id;    
      jwt.verify(token, process.env.secretKey, (error, dataLoaded) => {
        if (error) {
          res.status(404).json({});
        } else {
          User.findById(dataLoaded._id).then((user) => {
            if (user) {
              res.status(200).json({});
            } else {
              res.status(404).json({});
            }
          });
        }
      });
    } catch (error) {
      res.status(404).json({});
    }
  };
  
//POST
//url : /api/forgot-password -> verify user email and send reset password link
module.exports.forgotPassword = async (req, res) => {
    let username = req.body.username;
    User.findOne({ username: username }).then(async (user) => {
      if (user) {
        jwt.sign({ _id: user._id }, process.env.secretKey, async (error, token) => {
          if (error) {
            res.status(404).json({});
          } else {
            const url = `http://localhost:3001/reset-password/${token}`;
            await transporter.sendMail(
              {
                from: "examtaking.ms@gmail.com",
                to: user.email,
                subject: "Reset my Password",
                html: `Please click this Link to reset your password <a href="${url}">${url}</a>`,
              },
              (error, info) => {
                if (error) {
                  return res.status(500).json({ error });
                } else {
                  return res.status(200).json({});
                }
              }
            );
          }
        });
      } else {
        res.status(404).json({ error: "email not found" });
      }
    });
  };

// POST
// url : /api/register -> to register user 
module.exports.registerUser = async (req, res) => {
  if(await Role.findOne({ username: req.body.username })) {
      console.log("Sdsdsd");
      return res.status(200).json({ error: "username already exist" });
  }
  if(await Instructor.findOne({ username: req.body.username })) {
      console.log("Sdsdsddsadsadasdsada");
      return res.status(200).json({ error: "username already exist" });
  }
  await User.findOne({ username: req.body.username }).then(async (result) => {
    if (result) {
      console.log("Asda");
      return res.status(200).json({ error: "username already exist" });
    } else {
      try {
        let hashedpassword = await bcrypt.hash(req.body.password, 10);
        let newUser = _.pick(req.body, ["email", "firstname", "lastname","username", "gender"]);
        newUser.password = hashedpassword;
        let user = new User(newUser);
        await user.save(async (error, registeredUser) => {
          if (error) {
            console.log(error);
            res.status(500).json({error});
          } else {
            console.log(registeredUser);
          }
        });
        const token=jwt.sign({user:newUser._id, username : newUser.username},process.env.JWT_SECRET);
        console.log(token);
        res.cookie("token",token,{
          httpOnly:true,
      }).send();
      
      } catch {
        res.status(500).send();
      }
    }
  });
};

//GET
//url : /api/confirmation/123 -> to confirm user email
module.exports.confirmUser = async (req, res) => {
    try {
      let token = req.params.id;
      jwt.verify(token, process.env.secretKey, async (error, dataLoaded) => {
        User.findById(dataLoaded._id)
          .then((result) => {
            if (result || !result.confirmed) {
              result.confirmed = true;
              User.findOneAndUpdate({ _id: dataLoaded._id }, result, {
                new: true,
              }).then((userCon) => {
                res.status(200).json({});
              });
            } else {
              res.status(404).json({});
            }
          })
          .catch((error) => res.status(404).json({}));
      });
    } catch (error) {
      res.status(404).json({});
    }
  };
  

//POST
// URL : /api/login -> to log user in
module.exports.loginUser = async (req, res) => {
  console.log(req.body);
  let user = _.pick(req.body,['username', 'password']);
  try {
    if(await User.findOne({ username: user.username })){
      User.findOne({ username: user.username })
      .then(async (result) => {
        console.log(result);
          if (await bcrypt.compare(user.password, result.password)) {
            const token=jwt.sign({user:result._id, username : result.username },process.env.JWT_SECRET);
            res.cookie("token",token,{
                httpOnly:true,
            }).send();
                    return;
            } else {
              console.log("fdsfsdfsd");
              res.status(201);
              res.json({ error: "incorrect password" });
              return;
        }
      })
      .catch((error) => {
        res.status(500).json({error});
      });
    }else if(await Instructor.findOne({ username: user.username })){
      Instructor.findOne({ username: user.username })
      .then(async (result) => {
          if (await bcrypt.compare(user.password, result.password)) {
            const token=jwt.sign({user:result._id, username : result.username},process.env.JWT_SECRET);
            res.cookie("token",token,{
                httpOnly:true,
            }).send();
            return;
          } else {
            res.status(201);
            res.json({ error: "incorrect password" });
            return;
          }
      })
      .catch((error) => {
        res.status(500).json({error});
      });

    }else if(Role.findOne({ username: user.username })){
      Role.findOne({ username: user.username })
      .then(async (result) => {
          if (await bcrypt.compare(user.password, result.password)) {
            const token=jwt.sign({user:result._id, username : result.username },process.env.JWT_SECRET);
            res.cookie("token",token,{
                httpOnly:true,
            }).send();
            return;
          } else {
            res.status(201);
            res.json({ error: "incorrect password" });
            return;
          }
      })
      .catch((error) => {
        res.status(500).json({error});
      });
    } else {
      res.status(201);
      res.json({ error: "incorrect username" });
      return;
    }

  } catch (error) {
    res.status(500).json({error});
  }
};

//logout
module.exports.Logout=async(req,res)=>{
  res.cookie("token","",{
    httpOnly:true,
    expires:new Date(0)
}).send();
}

//check loggedin
module.exports.LoggedIn=async(req,res)=>{
  try {
    //we need to parse cookies into javascrip objects
    //using the cookie-parser
    //this is an express middleware that reads any incoming cookies and parse it into req.cookies object
    const token=req.cookies.token;
    let user = {};
    console.log(token);
    if(!token){
        return res.json(false);
    }
    //verifiy the tooken to check if it has our secret and not a random tooken
    //if not verified it will go to the catch and
    //if verified it will decode it and put the tooken value an an object
    //it have the user id
    const verified= jwt.verify(token,process.env.JWT_SECRET);
    if(await User.findById(ObjectId(verified.user))){
      await User.findById(ObjectId(verified.user)).then(
        value => {
          user = value;
          type="student";
        }
      )
    }else if(await Role.findById(verified.user)){
      await Role.findById(verified.user).then(
            value => {
                user = value;
                type = value.role;
            }
      )
    }else if(await Instructor.findById(verified.user)){
      await Instructor.findById(verified.user).then(
        value => {
          user = value;
          type="instructor";
        }
      )
    }
   res.send({id:verified.user,verified:true,type:type, firstname : user.firstname, lastname : user.lastname,
     wallet : user.wallet, email : user.email, gender : user.gender, 
     username : user.username, minibiography : user.minibiography, accepted : user.accepted});
    
} catch (error) {
    console.log(error.message); 
    res.json(false);
}
}

// Post 
//url : /api/accept-terms
module.exports.AcceptTerms = async(req, res) =>{
  try {
    const token=req.cookies.token;
    let user = {};
    console.log(token);
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    Instructor.findByIdAndUpdate(verified.user, {accepted : true}).then(
        result => {return res.status(200).json({});}
    )
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
} 

// POST
//url : /api/change-password -> to change user password
module.exports.ChangePassword =async (req, res) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    let password = req.body.newpassword;
    let password_old = req.body.oldpassword;
    if(await User.findById(ObjectId(verified.user))) {
      await User.findById(ObjectId(verified.user)).then(
        async user => {
          console.log(verified.user);
          if (await bcrypt.compare(password_old, user.password)) {
            let passwordn = await bcrypt.hash(password, 10);
            User.findOneAndUpdate({ _id: ObjectId(verified.user) }, {password : passwordn}).then();
            res.status(200).json({});
          } else {
            res.status(200).json({ error: "incorrect password" });
          }
        }
      )
    } else if(await Instructor.findById(ObjectId(verified.user))) {
      await Instructor.findById(ObjectId(verified.user)).then(
        async user => {
          console.log(user);
          if (await bcrypt.compare(password_old, user.password)) {
            let passwordn = await bcrypt.hash(password, 10);
            Instructor.findOneAndUpdate({ _id: ObjectId(verified.user) }, {password : passwordn}).then();
            res.status(200).json({});
          } else {
            res.status(200).json({ error: "incorrect password" });
          }
        }
      )
    } else if(await Role.findById(ObjectId(verified.user))) {
      await Role.findById(ObjectId(verified.user)).then(
        async user => {
          console.log(verified.user);
          if (await bcrypt.compare(password_old, user.password)) {
            let passwordn = await bcrypt.hash(password, 10);
            Role.findOneAndUpdate({ _id: ObjectId(verified.user) }, {password : passwordn}).then();
            res.status(200).json({});
          } else {
            res.status(200).json({ error: "incorrect password" });
          }
        }
      )
    }
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
};
  
/// need edits
module.exports.changeEmailorBiography = async(req,res)=>{
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    const id = ObjectId(verified.user);
    const data = req.body;
    Instructor.findById(id).then(
      instructor => {
        if(data.email)
          instructor.email=data.email;
        if(data.minibiography)
          instructor.minibiography=data.minibiography;
        Instructor.findByIdAndUpdate(id, instructor).then(
          result => {return res.status(200).json({});}
        )
      }
    )
    
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
}

//POST /api/add-user
module.exports.addUser = async (req, res) => {
    const new_user = _.pick(req.body, ['username', 'password', 'role']);
    // let exist = false;
    if(await User.findOne({username : new_user.username}))
      return res.status(200).json({error : "Username Already exist"});
    if(await Role.findOne({username : new_user.username}))
      return res.status(200).json({error : "Username Already exist"});
    if(await Instructor.findOne({username : new_user.username}))
      return res.status(200).json({error : "Username Already exist"});
      if(new_user.role != 'instructor'){
        await Role.findOne({username : new_user.username}).then(
            async user => { 
                    new_user.password = await bcrypt.hash(new_user.password, 10);
                    await Role.create(new_user).then(
                        user =>  {return res.status(200).json({user});}
                    )
            }
        )
    }
    else {
        await Instructor.findOne({username : new_user.username}).then(
            async user => {
                    new_user.ratedetails = [0,0,0,0,0,0];
                    new_user.numberofrates = 0;
                    new_user.rate = 0;
                    new_user.password = await bcrypt.hash(new_user.password, 10);
                    await Instructor.create(new_user).then(
                        user =>  {return res.status(200).json({user});}
                    )
                
            }
        )
    }
}


// GET url : /api/all-courses
module.exports.getAllCourses = async (req, res) => {
    await Course.find({}).then(
        courses => {
            return res.status(200).json({courses});
        }
    )
}

// GET url : /api/instructor-courses //need edits
module.exports.getInstructorCourses = async (req, res) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);
    console.log(verified.user);
    await Course.find({createdById : verified.user}).then(
      courses => {return res.status(200).json({courses});}
    )    
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
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

// GET url : api/course/:id need some edits
module.exports.getCourse = async (req,res) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);   
    const id = req.params.id;
    await Course.findById(id).then(
        async course => {
            if(course){
                course.views++;
                course.save();
                if(await RegisterCourse.findOne({courseID : id, studentID : verified.user})){
                    await RegisterCourse.findOne({courseID : id, studentID : verified.user}).then(
                      co =>{
                        if(co.pending){
                          return res.status(200).json({course, pending : true});
                        }
                        else {
                          return res.status(200).json({course, register : true});
                        }
                      }
                    )
                }
                else  {
                  await CourseRequest.findOne({courseID : id, studentID : verified.user, status : 'pending'}).then(
                    request => {
                      if(request)
                        return res.status(200).json({course, requested : true});
                      else
                        return res.status(200).json({course, register : false});
                    }
                  )
                }
                  
            } else {

              return res.status(404).json({error : "Course Not Found"});
            }
        }
    )
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
}

//POST url : api/save-progress/ save course progress
module.exports.saveProgress = async (req, res) =>{
  const course = req.body.course;
  RegisterCourse.findByIdAndUpdate(course._id, course).then(
    result  => {
                return res.status(200).json({result})}
  );
}

module.exports.saveQuiz = async (req, res) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);  
    const grade = Number(req.body.grade);
    const courseID = req.params.courseID;
    const quizID = req.params.id;
    RegisterCourse.findOne({courseID :courseID, studentID: verified.user}).then(
      course => {
        let exist = false;
        console.log(course);
        for (let index = 0; index < course.attemptedQuizs.length; index++) {
            if((course.attemptedQuizs[index].id) === quizID){
              exist = true;
              if(course.attemptedQuizs[index].grade < grade) {
                  if(grade >= 60 && course.attemptedQuizs[index].grade < 60){
                    course.completedQuizs ++;
                  }
                  course.attemptedQuizs[index].grade = grade;
              }
            }
        }
        if(!exist){
          course.attemptedQuizs.push({id:quizID, grade : grade});
        }
        let id = course._id
        RegisterCourse.updateOne({_id : id}, course, {new : true}).then(
          result => { return res.status(200).json({});}
        )
      }
    )
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
};

//GET url : api/get-registercourses/12 get specific course // need auth
module.exports.getRegisterCourse = async (req, res) =>{
   try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified=jwt.verify(token,process.env.JWT_SECRET);   
    const courseID = req.params.id;
    console.log(ObjectId(verified.user));
    console.log(ObjectId(courseID));
    RegisterCourse.findOne({courseID : courseID, studentID : verified.user}).then(
      course => {
        console.log(course);
        if(course){
          res.status(200).json({course});
        }
        else {
          res.status(404).json({error : "YOU DID NOT REGISTER IN THIS COURSE"});
        }
      }
    )
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
}

//GET
// url : api/courses-problems-pending/ admin get problems
module.exports.getCoursesProblemsPending = async (req, res) =>{
    Problem.find({status : "pending"}).then (
      problems =>{
        return res.status(200).json({problems});
      }
    )
} 

//GET
// url : api/courses-problems-resolved/ admin get problems
module.exports.getCoursesProblemsResolved = async (req, res) =>{
    Problem.find({status : "resolved"}).then (
      problems =>{
        return res.status(200).json({problems});
      }
    )
} 

//GET
// url : api/courses-problems-unseen/ admin get Problems
module.exports.getCoursesProblemsUnseen = async (req, res) =>{
    Problem.find({status : "unseen"}).then (
      problems =>{
        return res.status(200).json({problems});
      }
    )
}
//POST
// url : api/mark-pending/ admin mark problem as pending
module.exports.MarkAsPending = async (req, res) =>{
  const request_id = ObjectId(req.params.id);
  Problem.updateOne({_id:request_id}, {status : 'pending'}, {new : true}).then(
      request => {
          return res.status(200).json({});
    });
} 
//POST
// url : api/mark-resolved/ admin mark problem as resolved
module.exports.MarkAsResolved = async (req, res) =>{
  const request_id = ObjectId(req.params.id);
  Problem.updateOne({_id : request_id}, {status : 'resolved', answered : true}, {new : true}).then(
      request => {
          return res.status(200).json({});
    });
} 

//GET
// url : api/courses-requests-pending/ admin get corporate trainees requests
module.exports.getCoursesRequestsPending = async (req, res) =>{
    CourseRequest.find({status : "pending"}).then (
      requests =>{
        return res.status(200).json({requests});
      }
    )
} 

//GET
// url : api/courses-requests-approved/ admin get corporate trainees requests
module.exports.getCoursesRequestsApproved = async (req, res) =>{
    CourseRequest.find({status : "approved"}).then (
      requests =>{
        return res.status(200).json({requests});
      }
    )
} 

//GET
// url : api/courses-requests-rejected/ admin get corporate trainees requests
module.exports.getCoursesRequestsRejected = async (req, res) =>{
    CourseRequest.find({status : "rejected"}).then (
      requests =>{
        return res.status(200).json({requests});
      }
    )
} 

//POST
// url : api/admin-add-promotion/ admin add promotions
module.exports.AdminAddPromotions = async (req, res) =>{
    const courses = req.body.courses;
    const promotion = req.body.promotion;
    await Course.updateMany({_id : {$in : courses}}, {discount : promotion}).then(
      coursesRes =>{
        return res.status(200).json({});
      }
    )
} 

//POST
// url : api/admin-grant-access/ admin grant access to corporate trainee
module.exports.AdminGrantAccess = async (req, res) =>{
    const request_id = ObjectId(req.body.id);
    CourseRequest.findByIdAndUpdate(request_id, {status : 'approved'}, {new : true}).then(
        request => {
          let course_id = ObjectId(request.courseID);
          let student_id = request.studentID;
          Course.findOne({_id : course_id}).then(
            course =>{
              let RegCourse = _.omit(course,'_id');
              course.registers++;
              course.save();
              RegCourse.completedVideos = [];
              RegCourse.attemptedQuizs = [];
              RegCourse.completedQuizs = 0;
              RegCourse.studentID = student_id;
              RegCourse.courseID = request.courseID;
              console.log(course.overviewvideo);
              console.log(course.overviewVideo);
              console.log(RegCourse.overviewvideo);
              RegisterCourse.create(RegCourse).then(
                result=>{
                  console.log(result.overviewvideo);
                  return res.status(200).json({});
                }
              )
          })
      });
} 
//-------------------------------------------------------------------------------------//
// getproblem
module.exports.getproblem = async (req,res)=>{
  const id = ObjectId(req.params.id); 
  console.log(id); 
  console.log("odasd"); 
  Problem.find({courseID : id}).then(
      problems => {
          console.log(problems);
                return res.status(200).json({problems});
      }
  );
}

// add problem
module.exports.addproblem = async (req,res)=>{
  const problem = req.body.problem;
  problem.courseID = ObjectId(problem.courseID);
  problem.status = "unseen";
  Problem.create(problem).then(
      problem => {
                return res.status(200).json({});
      }
  );
}


//Post
//url : /api/refundcourse  
module.exports.refundcourse = async (req, res) => {
  const courseID = ObjectId(req.params.id);
  console.log("course");
  RegisterCourse.findByIdAndUpdate(courseID, { pending : true}).then(
      course => {
          console.log(course);
           return res.status(200).json({});
      }
  );
};


//-------------------------------------------------------------------------------------//
//POST
// url : api/admin-revoke-access/ admin revoke access to corporate trainee
module.exports.AdminRevokeAccess = async (req, res) =>{
    const request_id = ObjectId(req.body.id);
    CourseRequest.findByIdAndUpdate(request_id, {status : 'rejected'}, {new : true}).then(
        request => {
          return res.status(200).json({});
      });
} 

//GET 
// url : api/inprogress-courses/ student get in progress courses // need auth
module.exports.getInProgressCourses = async(req,res) =>{
  try {
    const token=req.cookies.token;
    console.log(token);
    if(!token){
        return res.json(false);
    }
    const verified= jwt.verify(token,process.env.JWT_SECRET);
    RegisterCourse.find({studentID : verified.user, pending : false}).then(
        courses =>{
          let result = courses.filter(course=>{return course.totalItems > (course.completedQuizs + course.completedVideos.length)});
          res.status(200).json({courses : result})
        }
    ) 
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
} 

//GET 
// url : api/completed-courses/ student get completed courses // need auth
module.exports.getCompletedCourses = async(req,res) =>{
  try {
    const token=req.cookies.token;
    console.log(token);
    if(!token){
        return res.json(false);
    }
    const verified= jwt.verify(token,process.env.JWT_SECRET);
    RegisterCourse.find({studentID : verified.user}).then(
        courses =>{
          let result = courses.filter(course=>{
            return course.totalItems === (course.completedQuizs + course.completedVideos.length);
          });
          res.status(200).json({courses : result})
        }
    )
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
}

// used to create Certificate pdf
module.exports.createCertificate = (req,res) =>{
     pdf.create(certificateTemplate(req.body.title,req.body.username ,req.body.instructor), {}).toFile(`${__dirname}/PDFs/certificate.pdf`, (err) => {
       if(err) {
           res.send(Promise.reject());
       }
       res.send(Promise.resolve());
     });
};

// used to download the Certificate pdf
module.exports.fetchCertificate = (req,res) =>{
  res.sendFile(`${__dirname}/PDFs/certificate.pdf`);
};


// used to create notes pdf
module.exports.createPDF = (req,res) =>{
  pdf.create(pdfTemplate(req.body.title, req.body.notes), {}).toFile(`${__dirname}/PDFs/result.pdf`, (err) => {
    if(err) {
        res.send(Promise.reject());
    }
    res.send(Promise.resolve());
});
};

// used to download the notes pdf
module.exports.fetchPDF = (req,res) =>{
  res.sendFile(`${__dirname}/PDFs/result.pdf`);
};

// POST 
// url api/request/ corporate trainee request an course
module.exports.RequestCourse = async (req,res) => {
  try {
    const token=req.cookies.token;
    if(!token){
        return res.json(false);
    }
    const verified= jwt.verify(token,process.env.JWT_SECRET);
    const request = req.body.course;
    console.log(req.body);
    request.studentID = verified.user;
    request.studentName = verified.username;
    request.status = "pending";
    let couresReq = new CourseRequest(request);
    couresReq.save();
    return res.status(200).json({});
  } catch (error) {
      console.log(error.message); 
      res.json(false);
  }
};

module.exports.AdminRefundCourse = async(req,res) => {
    let course = req.body.course;
    await User.findByIdAndUpdate(ObjectId(course.studentID)).then(
        user => {
          user.wallet += Number(course.price);
          user.save();
        }
    );
    await Wallet.findOneAndUpdate({instructorID : ObjectId(course.createdById)}).then(
        wallet => {
          console.log(wallet.instructorID);
          console.log(course.createdById);
          wallet.total -= course.price*0.7;
          let exist = false;
          wallet.details.forEach((month, index) => {
          if(new Date(month.month).getMonth() === new Date().getMonth() && new Date(month.month).getFullYear() === new Date().getFullYear()) {
            console.log(wallet.details[index].total);
            wallet.details[index].total -= course.price*0.7;
            exist = true;
            console.log(wallet.details[index].total);
            }
          });
          if(!exist)
            wallet.details.push({month: `${new Date().getMonth() + 1}-1-${new Date().getFullYear()}`, total : -course.price*0.7});
          console.log(wallet.details[0].total);
          Wallet.updateOne({_id : wallet._id}, wallet).then();
        }
    )
    await RegisterCourse.findByIdAndDelete(course._id).then(
      result => {return res.status(200).json({});}
    )
};

module.exports.getRefundRequests = async(req,res) => {
    console.log("sads");
    RegisterCourse.find({pending : true}).then(
      courses => {
        return res.status(200).json({courses});
      }
    )
};
