import express from 'express'
import { controleSignin, controleSignup } from '../controllers/auth.controler.js';

const route = express.Router()

route.post('/signin',controleSignin)
route.post('/signup',controleSignup)

export default route;