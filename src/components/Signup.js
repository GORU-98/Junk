import React ,{useState}from 'react'
import {useNavigate} from "react-router-dom";
import Msg from "./Msg";

const Signup = () => {
    const [val,setVal] = useState({
      
        email:"",
        password:""
        
      });
      const [bg,setBg]=useState();//for alert
      const navigate=useNavigate();


      const handleSignup=async()=>{
        const User= await fetch("http://localhost:5000/signup",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
      
          },
          body:JSON.stringify({...val})
        })
        const response=await User.json();
        console.log(response);
        if(!response.authtoken){
            setBg("Sign In Failed!");
            setTimeout(() => {
              setBg("")
            }, 3000);
          }
          localStorage.setItem("token",response.authtoken);
          setVal({
          email:"",
          password:"",
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
    <div className="signuppage" >
        <div className="signform">
          <h2>Sign Up </h2>
          
            <input type="email" name="email" id="email"  value={val.email} onChange={handleChange}  required placeholder='Email'/>
            <input type="password" name="password" id="password" value={val.password} onChange={handleChange}  required placeholder='Password'/>
            <button onClick={handleSignup} disabled={val.email.length<4 || val.password.length<2}>Sign Up</button>

            <span>If  account does not exists, Sign In here</span>
            <a href='/signin' >Sign In</a>
        </div>
    </div>
    <Msg msg={bg}/>
    </>
  )
}

export default Signup
