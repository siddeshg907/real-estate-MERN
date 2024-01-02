import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { deleteUser, getUser, getUserListings, updateUser } from "../controllers/user.controller.js";

const router=express.Router()

router.get("/test",(req,res)=>{
    res.json({
        msg:'Hello World'
    })
})

router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser)
router.get('/listings/:id',verifyToken,getUserListings)
router.get('/:id',verifyToken,getUser)

export default router