import User from "../models/user.model.js"
import { handelError } from "../utils/error.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const controleSignin = async (req,res,next)=>{
    const {email,password} = req.body;
    const userData = await User.findOne({email})
    if(!userData)
        return next(handelError(404,"User Not found"))
    const validatePassword = await bcryptjs.compareSync(password,userData.password)
    if(!validatePassword)
        return next(handelError(401,"Password is wrong"))

    const token = jwt.sign({id:userData._id},process.env.JWT_SECRATE)
    const {password:pass,...rest} = userData._doc;
    res.cookie('Access_token',token,{httpOnly: true}).status(200).json(rest)
}


export const controleSignup = async (req,res,next)=>{
    try {
        const {username,email,password} = req.body;
        const hashpassword = await bcryptjs.hashSync(password)
        const user = new User({username,email,password:hashpassword})
        await user.save()
        res.status(201).json("user add sucessfull")
        
    } catch (error) {
        next(error)
    }
}