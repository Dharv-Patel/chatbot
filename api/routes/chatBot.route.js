import express from "express"
import { chatReaponce, dayPlanReaponce, photosSearch, youtubeSearch } from "../controllers/chatBoat.controler.js"

const route = express.Router()

route.post('/chatResult',chatReaponce)
route.post('/dayPlanResult',dayPlanReaponce)
route.post('/youtubeResult',youtubeSearch)
route.post('/photosResult',photosSearch)

export default route;