import { Router } from "express";
import { createproduct,editproduct,deleteproduct,purchaseproduct,getallproducts } from "../controllers/products.js";


const router=Router()



router.post('/1',createproduct)
router.post('/2',editproduct)
router.post('/3',deleteproduct)
router.post('/4',purchaseproduct)
router.get('/5',getallproducts)



export default router
