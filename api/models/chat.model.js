import mongoose from "mongoose";

const chatSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    chats: [
        
        {
            title: {
                type: String,
                required: true,
            },
            date: {
                type: String
            },
            chatData: [],
            history: []
        }
    ],
    bookmarks: {
        photo: [],
        chat: [],
        dayPlan: [],
    }
})

const UserData = mongoose.model('UserData',chatSchema)
export default UserData;