

import nodemailer from 'nodemailer'

import user from "../schemas/user.js";
import dotenv from 'dotenv'

dotenv.config()
let randomNumber
const createuser=async(req,res)=>{
    console.log('got create');
    try {
        const{username,email,password}=req.body
        if(!username ||!email ||!password){
            let msg = (!username ? 'username ' : '') +
            (!email ? 'email ' : '') +
            (!password ? 'password ' : '') +
            'cannot be empty.';
            res.json({msg})
        
        }

        const check=await user.findOne({email:req.body.email})
        if(check){
            res.json({msg:'user already exists with this mail id'})
        }
        const newuser=await user.create({...req.body})
    res.json({newuser})
        
    } catch (error) {
        console.log(error);
        
    }
    

    
}



const getuser=async(req,res)=>{
        console.log(req.body);
try {
    const{username,email,password}=req.body
        if(!email ||!password){
            let msg = 
            (!email ? 'email ' : '') +
            (!password ? 'password ' : '') +
            'cannot be empty.';
            res.json({msg})
        
        }
    const newuser= await user.findOne({email:req.body.email})
    if(!newuser){res.json({msg:'no such user with this mail'})}
    if(req.body.password===newuser.password){
    res.json({newuser})}

    res.json({msg:'incorrect password'})
    
} catch (error) {
    
}}

const edituser=async(req,res)=>{
    let newuser = await user.findByIdAndUpdate(req.body.id, req.body, { new: true });

if (newuser) {
  // Remove the 'id' field from the request body
  delete newuser.id;
  // Send the updated product as the response
  res.json({ newuser });
}
else{
    res.json({msg:'no such user'})
}
}


const deleteuser=async(req,res)=>{
    const prod=await user.findByIdAndDelete({_id:req.body._id})
    res.json({prod})

}


const changepassword=async(req,res)=>{
    
    let mailTransporter =
    nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: process.env.mail,
                pass: process.env.pwd
            }
        }
    );
 
     randomNumber = Math.floor(1000 + Math.random() * 9000);
let mailDetails = {
    from: 'gowthammende7777@gmail.com',
    to: req.body.email,
    subject: 'Test mail',
    text: `password reset otp ${randomNumber}`
};
 
mailTransporter
    .sendMail(mailDetails,
        function (err, data) {
            if (err) {
                res.json({msg:'something went wrong'})
            } else {
                console.log(data);
                res.json({msg:'Email sent successfully'})
            }
        });
    

}

const verifyotp=async(req,res)=>{
    const otp=req.body.otp
    const email=req.body.email
    if (otp === randomNumber.toString()) { // Convert randomNumber to a string for comparison
        // OTP is correct, perform the next steps (e.g., allow password change)
        // You can redirect the user to a password change form or perform any other action
        const newuser=await user.findOneAndUpdate({email},{password:req.body.password})
        res.status(200).json({ success: 'OTP is correct' });
    } 
    else{
        res.json({msg:'password has not been updated'})
    }


}

export{createuser,edituser,deleteuser,getuser,changepassword,verifyotp}