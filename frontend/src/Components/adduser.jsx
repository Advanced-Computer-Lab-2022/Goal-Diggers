import React from 'react'


const AddUser = (props) => {
    return (
              <div className='justify-content-center'>
                <form className='col-sm-6'>
                <div>
                    <label htmlFor='username'>Userame</label>
                    <input type="text" id='username' className='form-control my-1'/>
                </div> 
                <div>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type="password" className='form-control my-1'/>
                </div>
                <div>
                    <label>Role</label>
                    <select className='form-control my-1'>
                        <option selected value="administrator">Select Role</option>
                        <option value="administrator">Administrator</option>
                        <option value="instructor">Instructor</option>
                        <option value="corporatetrainees ">corporate trainee</option>
                    </select>
                </div>
                <button className='btn btn-primary mt-1'>Submit</button>
              </form>
              </div>
    )
}

export default AddUser