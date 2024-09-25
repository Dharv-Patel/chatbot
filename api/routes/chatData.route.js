import express from 'express'
import { addchat, addImgBookmark, addNewChats, getAllChats, getChats } from '../controllers/chatData.controler.js';

const route = express.Router()

route.post('/addnewchats',addNewChats)
route.post('/addchats',addchat)
route.post('/allchats',getAllChats)
route.post('/onechats',getChats)
route.post('/addimgbookmark',addImgBookmark)

export default route;