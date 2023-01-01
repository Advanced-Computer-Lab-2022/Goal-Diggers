import React from 'react';
import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



const Sections = ({section,count}) => {
    const [flag, setflag] = useState(false);
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-2 pt-4">

                    <p className="  fs-4 text-center " style={{ top: '35%', padding: '5px' }}>Section : {count}</p>
                </div>
                <div className="col-sm-6 p-5 mr-5">
                    <p className=" fs-6 "> title : {section.title}</p>
                    <p className=" fs-6 ">totalHours : {section.totalHours}</p>
                    <p className="  fs-6 ">Summary : {section.summary}</p>
                        <div id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button onClick={() => { setflag(!flag) }}
                                aria-controls="example-collapse-text"
                                aria-expanded={flag} className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" >
                                Show hours
                            </button>
                        </h5>
                    </div>

                    <Collapse in={flag}>
                        <div id="example-collapse-text">
                            {section.videos.map(video => 
                                {return <p>title : {video.title}</p>})}
                        </div>
                    </Collapse>
                </div>

            </div>
                </div>
                {/* <p>
                    <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Show more
                    </a>
                </p> */}
            </div>








{/* 

            <div id="accordion">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h5 className="mb-0">
                            <button onClick={() => { setflag(!flag) }}
                                aria-controls="example-collapse-text"
                                aria-expanded={flag} className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" >
                                Section #1
                            </button>
                        </h5>
                    </div>

                    <Collapse in={flag}>
                <div id="example-collapse-text">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </div>
            </Collapse>
                </div>

            </div> */}


        </React.Fragment >
    );
}

export default Sections;