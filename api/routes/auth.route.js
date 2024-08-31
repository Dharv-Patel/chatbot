import express from 'express'
import { controleSignin, controleSignup } from '../controllers/auth.controler.js';

const route = express.Router()

route.get('/signin',controleSignin)
route.post('/signup',controleSignup)

export default route;