import express from 'express'
import { addchat, addImgBookmark, addNewChats, addPlanBookmark, deleteChat, deletedayPlan, getAllChats, getBookmarkedImg, getBookmarkedPlan, getChats } from '../controllers/chatData.controler.js';

const route = express.Router()

route.post('/addnewchats',addNewChats)
route.post('/addchats',addchat)
route.post('/allchats',getAllChats)
route.post('/onechats',getChats)
route.post('/addimgbookmark',addImgBookmark)
route.post('/addplanbookmark',addPlanBookmark)
route.post('/getbookmarkedImgs',getBookmarkedImg)
route.post('/getbookmarkedPlan',getBookmarkedPlan)
route.post('/deleteChat',deleteChat)
route.post('/deletePlan',deletedayPlan)

export default route;