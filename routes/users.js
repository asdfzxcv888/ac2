import { Router } from "express";
import {createuser,edituser,deleteuser, getuser, changepassword, verifyotp} from '../controllers/users.js'

const router=Router()



router.post('/1',createuser)
router.post('/2',edituser)
router.post('/3',deleteuser)
router.post('/4',getuser)
router.post('/5',changepassword)
router.post('/6',verifyotp)
export default router