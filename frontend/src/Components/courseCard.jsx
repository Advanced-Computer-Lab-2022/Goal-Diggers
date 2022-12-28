import React, { useContext } from "react";
import {Rating} from '@mui/material';
import { Link } from "react-router-dom";
import AuthContext, { AuthContextProvider } from"../context/AuthContext";

const CourseCard = ({course, priceRate, currency}) => {
    const {loggedIn,id,type}=useContext(AuthContext);
    console.log(type); 
    return ( 
            <div className="card text-center bg-light m-3 p-2" style={{width: '16rem'}}>
                <img src={course.image} className="card-img-top" alt="course image" />
                <div className="card-body">
                    <h6 className="text-center">{course.title}</h6>
                    <p>Total hours : {course.totalHours}</p>
                    <Rating name="read-only"   value={course.rate} precision={0.1} readOnly /> <br />
                    {/* To be conditionally rendered */} 
                    {type != "corporatetrainees " &&
                    <>
                    {course.price == 0 && <p className="text-success"> Free </p> }
                    {course.price > 0 && <p>Price : {Math.round((course.price * priceRate) * 100) / 100} {currency ? currency : "USD" }</p> }
                    </>
                    }
                    <a href={`course/${course._id}`} style={{borderRadius : '25px', width : '150px'}} className="viewbuttoon">view <i class="fa fa-eye" aria-hidden="true"></i></a>
                </div>
            </div>
    );
}
 
export default CourseCard;