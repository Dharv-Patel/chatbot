import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
        default: null
    },
    mobileNumber: {
        type: String,
        required: false,
        default: null
    },
    profilePicture: {
        type: String,
        required: false,
        default: null
    },
})

const User = mongoose.model('User',userSchema)
export default User;