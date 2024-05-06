// Account.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../globalcontext/useGlobalContext';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ff9900; /* Amazon orange color */
`;

const Content = styled.div`
  width: 70%;
  text-align: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const AccountInfo = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.2rem;
  display: inline-block;
  width: 30%;
  text-align: right;
  margin-right: 10px;
`;

const Input = styled.input`
  width: calc(70% - 40px); /* Adjust for input padding and border */
  padding: 8px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: inline-block;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: #ff9900;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e68300;
  }
`;

const Account = () => {
  const {user,setuser}=useGlobalContext()
  const edituser=async(id,username,email)=>{
    console.log(id,username,email);
    const resp=await axios.post('/api/users/2',{id,username,email})
    const data=await resp.data
    console.log(data);

    if(data.newuser){
      setuser({...data.newuser})
    }
  }

  const [username,setusername]=useState(user.username)
  const [email,setemail]=useState(user.email)

  return (
    <Container>
      <Content>
        <Title>My Account</Title>
        <AccountInfo>
          <Label>Name:</Label>
          <Input type="text" defaultValue={user.username} onChange={(e)=>setusername(e.target.value)}/>
          <Label>Email:</Label>
          <Input type="text" defaultValue={user.email} onChange={(e)=>setusername(e.target.value)}/>
          {/* <Label>Address:</Label>
          <Input type="text" value={account.address} />
          <Label>Phone:</Label>
          <Input type="text" value={account.phone} /> */}
        </AccountInfo>
        <Button type='button' onClick={()=>edituser(user._id,username,email)}>Edit Details</Button>
        <Button>Delete Account</Button>
      </Content>
    </Container>
  );
};

export default Account;
