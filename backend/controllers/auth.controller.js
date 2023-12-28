import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const signup=async(req,res,next)=>{
    const {username,email,password}=req.body
    const hashedPass=bcryptjs.hashSync(password,10)
    const user=new User({username,email,password:hashedPass})
    try {
        await user.save()
        res.status(201).json('User created Successfully!')
    } catch (error) {
       next(error)
    }
}

export const signin=async(req,res,next)=>{
    const {email,password}=req.body;
    try {
        const validUser=await User.findOne({email})
        if(!validUser) return next(errorHandler(404,"User not found!"))
        const validPassword=bcryptjs.compareSync(password,validUser.password)
    if(!validPassword) return next(errorHandler(401,'Wrong Credentials!'))
    const token=jwt.sign({id:validUser._id},process.env.JWT_Key)
    const {password:pass,...rest}=validUser._doc;
    res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)
    } catch (error) {
        next(error)
    }
}