import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import {productrouter,userrouter} from './routes/index.js'
import dotenv from 'dotenv'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
dotenv.config()


const port=process.env.ort||6000
const app =express()
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(express.json())

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB



// Routes
app.use('/api/products', productrouter);
app.use('/api/users', userrouter);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async() =>{ 
    try {
        await mongoose.connect(process.env.url)
        console.log(`Server started on port ${PORT}`)
    } catch (error) {
        
    }
});