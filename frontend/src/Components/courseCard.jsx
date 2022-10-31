import React from "react";
import {Rating} from '@mui/material';
import { Link } from "react-router-dom";

const CourseCard = ({course, priceRate, currency}) => {
    return ( 
            <div className="card text-center bg-light m-3 p-2" style={{width: '16rem'}}>
                <img src={course.image} className="card-img-top" alt="course image" />
                <div className="card-body">
                    <h6 className="text-center">{course.title}</h6>
                    <p>Total hours : {course.totalHours}</p>
                    <Rating name="read-only" value={course.rate} precision={0.1} readOnly />
                    {/* To be conditionally rendered */} 
                    {course.price == 0 && <p className="text-success"> Free </p> }
                    {course.price > 0 && <p>Price : {Math.round((course.price * priceRate) * 100) / 100} {currency ? currency : "USD" }</p> }
                    <Link href={`course/${course._id}`} style={{borderRadius : '25px'}} className="btn btn-primary">view <i class="fa fa-eye" aria-hidden="true"></i></Link>
                </div>
            </div>
    );
}
 
export default CourseCard;