
import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../globalcontext/useGlobalContext';
import axios from 'axios';
import {useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: #ff9900;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


 

const Login = () => {
  const navigate=useNavigate()
  const [reg,setreg]=useState(false)
  

  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [username,setusername]=useState('')


  const{togglealert,setalertmsg,setuser,setcolo}=useGlobalContext()
  const [forgotpwd,setforgotpwd]=useState(false)
  const[otp,setotp]=useState(false)
  const[otpval,setotpval]=useState('')

  
  const login=async({email,password})=>{
    console.log(email);
    const resp=await axios.post('/api/users/4',{email,password})
    const data=await resp.data
   
    if(data.msg){
      setcolo(false)
      setalertmsg(data.msg)
      
      togglealert()
    }
    if(data.newuser){
      setalertmsg('Login Successful redirecting....')
      setcolo(true)

      togglealert()
      setuser({...data.newuser})
      const userJSON = JSON.stringify(data.newuser);
      console.log(userJSON);

        // Save JSON string to local storage
        localStorage.setItem('user', userJSON);
      setTimeout(()=>navigate('/products'),1000)
    }

  }
  const register=async({username,email,password})=>{
    console.log(email);
    const resp=await axios.post('/api/users/1',{username,email,password})
    const data=await resp.data
    if(data.msg){
      setalertmsg(data.msg)
      togglealert()
      
    }
    if(data.newuser){
      setalertmsg('Register Successful redirecting....')
      setcolo(true)

      togglealert()
      setuser({...data.newuser})
      setTimeout(()=>navigate('/products'),1000)
    }

  }

  const getotp=async()=>{
    if(email===''){
      setalertmsg('your mail id is required to send the otp')
      togglealert()
      return

    }
    setalertmsg('please wait ....')
      togglealert()
    const resp=await axios.post('/api/users/5',{email})
    
    
    const data= resp.data
    if(data.msg){
      console.log(data);
      setalertmsg(data.msg)
      togglealert()
      
      
    }
    
    console.log('working2');
    
    setotp(!otp)
    
  }

  const verifyotp=async()=>{
    const resp=await axios.post('/api/users/6',{email,otp:otpval,password})
    
    
    const data= resp.data
    if(data){
      console.log(data);
      if(data.success){
      setalertmsg(data.success)
      togglealert()
      navigate('/Login')
    }
      if(data.msg){
        setalertmsg(data.msg)
        togglealert()

      }
      
    }

   

  }











if(forgotpwd){
  if(!otp){
     return(
      
      <Container>
        <LoginForm>
          <h2>pls enter ur mail</h2>
          <Input type="email" placeholder="Email"  onChange={(e)=>setemail(e.target.value)}/>
          
          <Button type='button' onClick={(e)=>{
            e.preventDefault()
            getotp()
            
          }}>Get password</Button>
          <Button type='button' onClick={(e)=>{
            e.preventDefault()
            setforgotpwd(false)
          }}>Back to login</Button>
        </LoginForm>
      </Container>);}


else{
  return(
      
    <Container>
      <LoginForm>
        <h2>pls enter ur otp</h2>
        <Input type="email" placeholder="Email"  onChange={(e)=>setemail(e.target.value)}/>
          
        <Input type="password" placeholder="enter new password" defaultValue='' onChange={(e)=>setpassword(e.target.value)} />
        <Input type="text" placeholder="enter the otp" defaultValue={otpval}   onChange={(e)=>setotpval(e.target.value)}/>

      

        
        <Button type='button' onClick={(e)=>{
          e.preventDefault()
          verifyotp()
          
        }}>verify otp and change password</Button>
        <Button type='button' onClick={(e)=>{
          e.preventDefault()
          setforgotpwd(false)
          setotp(false)
        }}>Back to login</Button>
      </LoginForm>
    </Container>);



}






      }
      
      
  



if(!reg){
  return (
      
    <Container>
      <LoginForm>
        <h2>Login to Amazon</h2>
        <Input type="email" placeholder="Email"  onChange={(e)=>setemail(e.target.value)}/>
        <Input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
        <Button onClick={(e)=>{
          e.preventDefault()
          login({email,password})
        }}>Login</Button>
        <button type='button' onClick={(e)=>{
          e.preventDefault()
          setreg(true)}}  style={{marginBottom:'1rem'}}>Register</button>
          <button onClick={()=>setforgotpwd(true)}>forgot password</button>
      </LoginForm>
    </Container>
  );
}
else{

  return (
      
    <Container>
      <LoginForm>
        <h2>Register to Amazon</h2>
        <Input type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)} />
        <Input type="text" placeholder="username" onChange={(e)=>setusername(e.target.value)}/>
        <Input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
        <Button  onClick={(e)=>{
          e.preventDefault()
          register({username,email,password})
        }
          }>Register</Button>
        <button type='button' onClick={(e)=>{
          e.preventDefault()
          setreg(false)}}>Login</button>
           
      </LoginForm>
    </Container>
  );
  
     
}

 
}

export default Login