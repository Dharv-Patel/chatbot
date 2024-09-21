import express from 'express'
import { addchat, addNewChats } from '../controllers/chatData.controler.js';

const route = express.Router()

route.post('/addnewchats',addNewChats)
route.post('/addchats',addchat)

export default route;