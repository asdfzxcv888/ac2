// models/Product.js
import mongoose from "mongoose";
import { type } from "os";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },
  image:{
    type:String,
    required:true
  },
  id:{
    type:Number,
    required:true
  }
//   imageUrl: {
//     type: String,
//     required: true
//   },
  // Add more fields as needed
});

export default mongoose.model('Product', ProductSchema);
