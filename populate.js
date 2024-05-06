import mongoose from "mongoose";
import express from 'express'
import products from "./schemas/products.js";

const connect=async()=>{

    try {
        await mongoose.connect('mongodb+srv://newuser:newuser@ttt.2frh5xa.mongodb.net/ac2?retryWrites=true&w=majority&appName=ttt')
        console.log('connected');
    } catch (error) {
        
    }
}
connect()
let i

const populate=async()=>{
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        data.map(async(item)=>await products.create(item))

        console.log('all done');
    } catch (error) {
        
    }
}


populate()