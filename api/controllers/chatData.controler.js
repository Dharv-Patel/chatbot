import UserData from "../models/chat.model.js";
import { handelError } from "../utils/error.js";

export const addNewChats = async (req, res, next) => {
  try {
    const { userId, chats } = req.body;
    const userHasChat = await UserData.findOne({ userId }).select("chats");
    if (!userHasChat) {
      const data = new UserData({ userId, chats });
      await data.save();
      res.status(201).json("chat hasbeen created");
    } else {
      const chatSaved = await UserData.findOneAndUpdate(
        { userId }, // Query to find the user
        { $push: { chats } }, // $push appends to the chats array
        { new: true, runValidators: true } // Options: return updated doc and run schema validation
      );
      res.status(201).json("chat hasbeen saved");
    }
  } catch (error) {
    next(error);
  }
};
export const addchat = async (req, res, next) => {
  try {
    const { userId, chatId, newchat, newhistory } = req.body;
    const chatSaved = await UserData.findOneAndUpdate(
      { userId, "chats._id": chatId }, // Query to find the user and the specific chat by title
      {
        $push: {
          "chats.$.chatData": { $each: newchat },
          "chats.$.history": { $each: newhistory },
        },
      }, // $push to append to the chatData array within the matching chat
      { new: true } // Options: return updated doc and run schema validation
    );
    res.status(201).json(chatSaved);
  } catch (error) {
    next(error);
  }
};
