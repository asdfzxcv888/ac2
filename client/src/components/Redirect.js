import React, { useEffect } from 'react'
import { useGlobalContext } from '../globalcontext/useGlobalContext'
import {useNavigate} from 'react-router-dom'
import Login from './Login'


const Redirect = () => {
    const{user,togglealert,setalertmsg}=useGlobalContext()

    console.log('Redirect');
    const navigate=useNavigate()
    useEffect(()=>{
        togglealert()
        setalertmsg('You are not authorized to access this page. Please log in.')
       setTimeout(()=> {navigate('/Login')},2000)
    },[])
   
  return (
    <div>hello</div>
  )
}

export default Redirect