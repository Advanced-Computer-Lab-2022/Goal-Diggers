import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
//this will return an object that has all the features of the context
const AuthContext=createContext();
function AuthContextProvider(props) {
    const[loggedIn,setLoggedIn]=useState(undefined);
    async function getLoggedIn(){
       const loggedInRes=await axios.get("http://localhost:5000/auth/loggedIn");
       setLoggedIn(loggedInRes.data);
    }
    //we want to run this function whenever this component is render
    //to do this we use useEffect
    useEffect(()=>{
    
      getLoggedIn();
    },[]);
  return (
    //AuthContext has attribute provider which we can add all the component we wnat to be provided with
    // a value in this can it's the loggedIn
    //we also add getlogged because if in our login component if we clicked login we also want to run get logged in again
    <AuthContext.Provider value={{loggedIn,getLoggedIn}}>
    {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext;
export {AuthContextProvider};