import React, { useState } from 'react';
import {Rating} from "@mui/material";

const Filters = ({handleChange}) => {
    const [value, setValue] = useState(0);
    return ( 
        <React.Fragment>
            <div style={{color : 'black'}} className='bg-light p-3 my-2'>
                <form action="/special-course" method='GET'>
                    <div className="row">
                        <div className="col-sm-2 pt-2">
                            <h6>Filter By : </h6>
                        </div>
                        <div className="col-sm-3 px-3 ">
                            <div className="input-group">
                                <span className="input-group-text">Subject</span>
                                <input onChange={(e)=>handleChange("subject", e.target.value)} type="search" name='subject' aria-label="Subject" className="form-control" />
                            </div>
                        </div>
                        <div className='col-sm-2 px-3 ml-5 '>
                            <div className="row pt-1 text-center">
                                <div className='mr-2 col-sm-3'><span className='badge bg-warning'>Rating :</span></div>
                                <div className="col-sm-8">
                                    <Rating name="rating" value={value} onChange={(event, newValue) => {handleChange("rate",newValue)
                                        setValue(newValue)}} />
                                </div>
                            </div>
                        </div>

                        {/* Conditionally rendered */}
                        <div className="col-sm-2  px-3 text-center">
                            <div className="input-group col-sm-5">
                                <span className="input-group-text ml-5 ">Highest price</span>
                                <input onChange={(e)=>handleChange("price", e.target.value)} type="number" name='price' min={0} aria-label="price" className="form-control"  />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
     );
}
 
export default Filters;
