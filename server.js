import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import {productrouter,userrouter} from './routes/index.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express();

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