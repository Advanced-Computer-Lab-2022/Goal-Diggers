import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js";
import styled from "styled-components";
import courseService from '../courseContainer';
import {Rating} from "@mui/material";
import ReactLoading from 'react-loading';
const stripePromise = loadStripe('pk_test_51MEsfyD8LuqksnQUO6qc7l2lB5YoBz9uvf6SFWpOOiRseylY3iSMb1wluYxopjRnMOnBotK5jXsNlLgC1aK9qdBl00QSBEA4r9');

const PayCourse = () => (
  <Elements stripe={stripePromise}>
    <Child  />
  </Elements>
);


const Child = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [course, setCourse] = useState({});
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { id } = useParams();
    const [ ready, setReady] = useState(false);
    const [ loading, setLoading] = useState(false);
    const [ err, setError] = useState("");

    useEffect(() => {
        const fetchClientSecret = async () => {
        let res = await courseService.getCourse(id);
        if(res.discount && new Date(res.discount.date) >= Date.now()) {
            res.price -= res.price * res.discount.promotion;
        }
        setCourse(res);
        const secret = await courseService.getClientSecret(res.price);
        console.log("clientSecret is >>>>", secret);
        setClientSecret(secret);
        setReady(true);
        };
        fetchClientSecret();
    }, []);

    const confirmPayment = async (e) => {
        e.preventDefault();
        setLoading(true);
        await stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
            },
          }).then((res)=>{
            if(res.error)
                setError(res.error.message);
            else {
                // save payment
                //navigate(`/take-course/${id}`);
            }
            setLoading(false);
            }
          ).catch(error => setError(error));
    }
    return ( 
        <React.Fragment>
            {ready && 
                <React.Fragment>
                    <h2 className='text-center mt-2' style={{fontFamily:'cursive'}}>Register in {course.title} course</h2>
                    <div className="row mt-4">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <div className="card bg-light mt-2" style={{borderRadius : '25px'}}>
                                <div className="row">
                                <div className="col-sm-4">
                                    <img src={`.${course.image}`} alt="" width={'200px'}/>
                                </div>
                                <div className="col-sm-8 pt-5">
                                    <span>Title : {course.title}</span> <br />
                                    <span>Subject : {course.subject}</span> <br />
                                    <span>Price : {course.price} USD</span> <br />
                                    <Rating name="rating" value={course.rate} readOnly/>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <div className="card bg-light mt-2 text-center " style={{borderRadius : '25px'}}>
                                {err && <div className="alert alert-danger">{err}</div>} 
                               <h3><i className="fa fa-credit-card" aria-hidden="true"></i> Enter your card details : </h3>
                               <PaymentContainer>

                                <div className='mt-4'>

                                {/* Card Element */}

                                <CardElement onChange={()=>{setError("")}}/>
                                </div>
                                </PaymentContainer>
                                {loading && <div className="row">
                                    <div className="col-sm-5"></div>
                                    <div className="col-sm-6">
                                    <ReactLoading type={"bars"} color={'lightgreen'} width={'50px'}/>
                                    </div>
                                </div>}
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-6">
                                        <button style={{borderRadius : '25px'}} className='btn btn-primary mt-3' onClick={(e)=>confirmPayment(e)}>Pay <i className="fa fa-money" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            }
            {!ready && 
                <div  className="container text-center" style={{marginBottom: '300px'}}>
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
                </div>
            }
        </React.Fragment>
     );
}
 
const PaymentContainer = styled.div`
  margin-top: 15px;
  div {
    margin-top: 15px;
    margin-left: 15px;
    p {
      font-size: 14px;
    }
  }
`;
export default PayCourse;