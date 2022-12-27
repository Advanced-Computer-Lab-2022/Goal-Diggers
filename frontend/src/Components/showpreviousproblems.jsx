import React, { useState, useEffect } from 'react';
import courseService from '../courseContainer';
import ReactLoading from 'react-loading';

const Showpreviousproblems = ({ title, courseID, all }) => {
    const [ready, setReady] = useState(false);
    const [problems, setproblems] = useState([]);
    useEffect(() => {
        const getProblems = async (courseID) => {
            const res = await courseService.getproblems(courseID);
            setproblems(res);
            console.log(res);
            setReady(true);
        }
        getProblems(courseID);
    }, [])

    return (
        <React.Fragment>
            {ready ?
                <div className="row">
                    <div className="col-sm-10">
                        <h2>Problems of {title} Course : </h2>
                        <hr />
                        {problems.length === 0 ?
                            <div className='row'>
                                <div className="col-sm-3">
                                </div>
                                <div className="col-sm-4 px-4">
                                    <img src="../empty-box.png" alt="" className='mt-5' width={'300px'} />
                                </div>
                            </div>
                            : (
                                <React.Fragment>
                                    {problems.map((problem, index) => {
                                        return <React.Fragment>
                                            {all ?
                                                <React.Fragment>
                                                    <span className='my-3'>Question{index + 1} : {problem.question}?   &nbsp;&nbsp;  Type : {problem.type}. &nbsp;    Status : {problem.status}.</span> <br />
                                                    {
                                                        problem.answered ?
                                                            <div>
                                                                <span className='mb-3' style={{ fontWeight: 'bolder', color: 'lightgreen' }}>- {problem.answer} .</span>  <hr />
                                                            </div>
                                                            : (
                                                                <div>
                                                                    <span className='mb-3' style={{ fontWeight: 'bolder', color: 'red' }}>- Question Not Answered Yet .</span>  <hr />
                                                                </div>
                                                            )
                                                    }
                                                </React.Fragment>
                                                : ( 
                                                    !problem.answered &&
                                                    <React.Fragment>
                                                        <span className='my-3'>Question{index + 1} : {problem.question}?     Type {problem.type}.</span> <br />
                                                        <div>
                                                            <span className='mb-3' style={{ fontWeight: 'bolder', color: 'red' }}>- Question Not Answered Yet .</span>  <hr />
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            }

                                        </React.Fragment>
                                    })}
                                </React.Fragment>
                            )
                        }
                    </div>
                </div>
                : (
                    <div style={{  display: 'flex',justifyContent: 'center',alignItems: 'center', height : '500px'}}>
                        <ReactLoading type={"bars"} color={'#a00407'} height={'5%'} width={'5%'} />
                    </div>
                )}
        </React.Fragment>
    );
}

export default Showpreviousproblems;