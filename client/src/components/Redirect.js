import React, { useEffect } from 'react'
import { useGlobalContext } from '../globalcontext/useGlobalContext'
import {useNavigate} from 'react-router-dom'
import Login from './Login'
import { LoadingContainer, LoadingIndicator } from './Loading'


const Redirect = () => {
    const{user,togglealert,setalertmsg}=useGlobalContext()

    console.log('Redirect');
    const navigate=useNavigate()
    useEffect(()=>{
        togglealert()
        setalertmsg('You are not authorized to access this page. Please log in.')
       setTimeout(()=> {navigate('/Login')},2000)
    },[])
   
  return (<>
  <div style={{display:'flex',justifyContent:'center',height:'50vh'}}>

<LoadingContainer><LoadingIndicator/></LoadingContainer>


</div>
<h1 style={{marginLeft:'35%'}}>please wait while we redirect...</h1>
</>
    
  )
}

export default Redirect