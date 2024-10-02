import express from 'express'
import { addchat, addImgBookmark, addNewChats, addPlanBookmark, deleteChat, deletedayPlan, getAllChats, getBookmarkedImg, getBookmarkedPlan, getChats, updateProfile } from '../controllers/chatData.controler.js';
import multer from 'multer';
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from "url";
import fs from 'fs'


    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const folder = path.join(__dirname , "images")
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder);
    }
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, folder)
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname)
        }
        
    });
    
    const upload = multer({ storage: storage });
    



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
route.post('/updateProfile',upload.single('file'),updateProfile)

export default route;