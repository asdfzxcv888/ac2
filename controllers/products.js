import products from "../schemas/products.js";

const createproduct=async(req,res)=>{
    console.log('got create');
    try {
        
        
        const prod=await products.create({...req.body})
    res.json({prod})
        
    } catch (error) {
        console.log(error);
        
    }
    
}


const editproduct=async(req,res)=>{
    const prod=await products.findOneAndUpdate({_id:req.body._id},{...req.body},  { new: true }  )
  
    res.json({prod})
}


const deleteproduct=async(req,res)=>{
    const prod=await products.findByIdAndDelete({_id:req.body._id})
    res.json({prod})
}

const purchaseproduct=async(req,res)=>{
    const prod=await products.findOne({_id:req.body._id})
    prod.Instock-=1
    res.json({prod,msg:'purchased'})
}
const getallproducts=async(req,res)=>{
    console.log('got get req');
   const prod=await products.find()
    res.json({prod})
}

export{createproduct,editproduct,deleteproduct,purchaseproduct,getallproducts}