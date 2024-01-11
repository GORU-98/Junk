import React, { useState} from 'react';
import Msg from "./Msg";
import {useNavigate} from "react-router-dom";

const SignIn = () => {

const [val,setVal] = useState({
  name:"",
  email:"",
  password:"",
  cpassword:"",
});
const [bg,setBg]=useState();//for alert
const navigate=useNavigate();

const handleSign=async()=>{
  const User= await fetch("http://localhost:5000/signin",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"

    },
    body:JSON.stringify({...val})
  })
  const response=await User.json();
  // console.log(response.authtoken)
  if(!response.authtoken){
    setBg("Sign In Failed!");
    setTimeout(() => {
      setBg("")
    }, 3000);
  }
  localStorage.setItem("token",response.authtoken);
  setVal({
    name:"",
  email:"",
  password:"",
  cpassword:"",
  })
  if(response.status===200){
    navigate("/",{state:{msg:response.msg}});
    // setBg(response.msg);
    // console.log(response.msg);
  }

}

    

    const handleChange=(e)=>{
      e.preventDefault();
     setVal( {...val,[e.target.name]:e.target.value});
    }

  return (
    <>
    <div className="signinpage">
        <div className="signform">
          <h2>Sign In</h2>
            <input type="text" name="name" id="name" value={val.name}  onChange={handleChange} required placeholder='Name'/>
            <input type="email" name="email" id="email"  value={val.email} onChange={handleChange}  required placeholder='Email'/>
            <input type="password" name="password" id="password" value={val.password} onChange={handleChange}  required placeholder='Password'/>
            <input type="password" name="cpassword" id="cpassword"  value={val.cpassword}  onChange={handleChange} required placeholder='Confirm Password'/>
            <button onClick={handleSign} disabled={val.name.length<3 ||val.email.length<4 || val.password.length<2 ||val.cpassword.length<2}>Sign In</button>

            <span>If already account exists, Sign Up here</span>
            <a href='/signup' >Sign Up</a>


        </div>
    </div>
    
    <Msg msg={bg}/>

    </>
  )
}

export default SignIn
