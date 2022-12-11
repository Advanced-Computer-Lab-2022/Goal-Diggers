import React from 'react';

const ViewNotes = ({title,notes}) => {
    return ( 
        <React.Fragment>
        <div className="row">
            <div className="col-sm-10">
            <h2>Notes of {title} Course : {notes.length >= 0 && <button className='btn btn-dark' style={{borderRadius : '25px'}}><i className="fa fa-download" aria-hidden="true"></i></button>}</h2>
            <hr />
            {notes.length === 0 ?
                <div className='row'>
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-4 px-4">
                        <img src="../empty-box.png" alt="" className='mt-5' width={'300px'}/>
                    </div>
                </div>
            :(
                <React.Fragment>
                    {notes.map((note,index)=>{
                    return <React.Fragment>
                        <span className='my-3'>{index + 1} - On Video : {note.title}.</span> <br />
                        <span className='mb-3'style={{fontWeight:'bolder', color :'red'}}>- {note.note}</span>  <hr />
                    </React.Fragment>
                    })}
                </React.Fragment>
            )
            }
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default ViewNotes;