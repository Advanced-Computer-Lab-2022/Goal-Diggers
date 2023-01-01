import React, { useState, useEffect } from 'react';
import Filters from './common/filters';
import courseService from '../courseContainer.js'
import CourseCard from './courseCard';
import axios from 'axios';

const CourseContainer = ({type, keyword, currency}) => {
    const [coursesOriginal, setCoursesOriginal] = useState([]);
    const [coursesDisplayed, setCoursesDisplayed] = useState([]);
    const [price, setPrice] = useState(Infinity);
    const [subject, setSubject] = useState("");
    const [rate, setRate] = useState(null);
    const [search, setSearch] = useState("");
    const [ready, setReady] = useState(false);
    const config = {headers : {"apikey" : "mg9jAAsEOiyrDEq4mw4wBarbgswdtryW"}};
    const [priceRate, serPriceRate] = useState(1);

    const handleCurrency = async (currency) => {
        let result = 1;
        if (currency) {
            const ConversionAPI = `https://api.apilayer.com/exchangerates_data/convert?to=${currency}&from=USD&amount=1`;
            const {data} = await axios.get(ConversionAPI, config);
            result = data.info.rate;
        }
        return result;
    }

    useEffect(() =>{ 
        setReady(false);
        const getCourses = async (type, keyword) => {
            if(type === 'search') {
                const res = await courseService.getSearchCourses(keyword);
                setCoursesDisplayed(res);
                setCoursesOriginal(res);
                serPriceRate(await handleCurrency(currency));
                setReady(true);
            }
            else if(type === 'instructor'){
                const res = await courseService.getInstructorCourses();
                setCoursesDisplayed(res);
                setCoursesOriginal(res);
                serPriceRate(await handleCurrency(currency));
                setReady(true);
            }
            else {
                const res = await courseService.getAllCourses();
                setCoursesDisplayed(res);
                setCoursesOriginal(res);
                serPriceRate(await handleCurrency(currency));
                setReady(true);
            }
        };
        getCourses(type, keyword);
    },[currency]);
 
    const handleChange = (filter, value) =>{
        console.log(value + filter);
        if(filter === "subject") {
            if( rate)
            setCoursesDisplayed(
                coursesOriginal.filter(course => {
                    return course.subject.includes(value) && Math.round((course.price * priceRate) * 100) / 100 <= price && Math.round(course.rate) === rate;
                })
            )
            else 
                setCoursesDisplayed(
                    coursesOriginal.filter(course => {
                        return course.subject.includes(value) && Math.round((course.price * priceRate) * 100) / 100 <= price;
                    })
            )
            setSubject(value);
        }
        else if(filter === "price") {
            if(!value)
                value = Infinity;
            if(rate)
            setCoursesDisplayed(
                coursesOriginal.filter(course => {
                    return course.subject.includes(subject) && Math.round((course.price * priceRate) * 100) / 100 <= value && Math.round(course.rate) === rate;
                })
            )
            else 
                setCoursesDisplayed(
                    coursesOriginal.filter(course => {
                        return course.subject.includes(subject) && Math.round((course.price * priceRate) * 100) / 100 <= value;
                    })
            )
            setPrice(value);
        }
        else {
            if(value) {
                setCoursesDisplayed(
                    coursesOriginal.filter(course => {
                        return course.subject.includes(subject) && Math.round((course.price * priceRate) * 100) / 100 <= price && Math.round(course.rate) === value;
                    })
                )
            }
            else {
                setCoursesDisplayed(
                    coursesOriginal.filter(course => {
                        return course.subject.includes(subject) && Math.round((course.price * priceRate) * 100) / 100 <= price;
                    })
                )
            }
            
            setRate(value);
        }
    };

    const handleSearch = () =>{
        console.log(search);
        setCoursesDisplayed(
            coursesOriginal.filter(
                (course) => {
                    return course.title.includes(search) || course.createdByName.includes(search);
                }
            )
        )
    }

    return ( 
        <React.Fragment>
        <Filters handleChange={handleChange} type={type}/>
        {type === 'search' && <h3 className='p-2 mb-3'>Search results for {keyword} </h3>}
        {type === 'instructor' && 
            <div className='p-3 px-5 mb-3 bg-light text-center'>
                <div className="d-flex" role="search">
                    <input onChange={(e)=>setSearch(e.target.value)} style={{borderRadius : '25px'}} className="form-control me-2" type="search" placeholder="Search in my courses" aria-label="Search" />
                    <button onClick={handleSearch} className="btn btn-outline-dark" style={{borderRadius : '25px'}}><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
        </div>}
        {ready ? 
            (
                coursesDisplayed.length ? 
                <div className="row p-3 justify-content-center"> 
                {coursesDisplayed.map((course) => <CourseCard currency={currency} priceRate={priceRate} key={course._id} course={course} />)}
                </div>
                : (  
                <div className='text-center m-5'>
                    <img width={'250px'} src='./no-results.png'/>
                    <div className="justify-content-center">
                        <div className='text-danger mt-3' style={{fontSize:'20px', fontWeight:'bold'}} role={'alert'}>There is no Course matches</div>
                    </div>
                </div>)
            )
            :
            (
                <div className="container">
                    <div className="row">
                        <div id="loader">
                            <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="loading"></div>
                        </div>
                    </div>
                </div>
            )
        }
        </React.Fragment>
     );
}
 
export default CourseContainer;