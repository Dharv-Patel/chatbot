import UserData from "../models/chat.model.js";
import { handelError } from "../utils/error.js";

export const addNewChats = async (req, res, next) => {
  try {
    const { userId, chats } = req.body;
    const userHasChat = await UserData.findOne({ userId }).select("chats");
    if (!userHasChat) {
      const data = new UserData({ userId, chats });
      const finalData = await data.save();
      res.status(201).json(finalData);
    } else {
      const chatSaved = await UserData.findOneAndUpdate(
        { userId }, // Query to find the user
        { $push: { chats } }, // $push appends to the chats array
        { new: true, runValidators: true } // Options: return updated doc and run schema validation
      );
      res.status(201).json(chatSaved);
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
export const getAllChats = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const chatSaved = await UserData.findOne(
      { userId: userId }, // Query to find the user by userId
      { "chats._id": 1, "chats.title": 1, "chats.date": 1 } // Projection: include _id, title, and date
    );
    res.status(201).json(chatSaved);
  } catch (error) {
    next(error);
  }
};
export const getChats = async (req, res, next) => {
  try {
    const { userId, chatId } = req.body;
    const chatSaved = await UserData.findOne(
      { userId, "chats._id": chatId }, // Find user by userId and chat by chatId
      { "chats.$": 1, _id: 0 } // Projection: get only the matching chat
    );
    res.status(201).json(chatSaved);
  } catch (error) {
    next(error);
  }
};
export const addImgBookmark = async (req, res, next) => {
  try {
    const { userId, imgUrl } = req.body;
    const chatSaved = await UserData.findOneAndUpdate(
      { userId }, // Query to find the user by userId
      { $push: { "bookmarks.photo": imgUrl } }, // $push to append the new image to bookmarks.images
      { new: true, runValidators: true } // Options: return updated document and run schema validation
    );
    res.status(201).json(chatSaved);
  } catch (error) {
    next(error);
  }
};
export const addPlanBookmark = async (req, res, next) => {
  try {
    const { userId, Plan } = req.body;
    const chatSaved = await UserData.findOneAndUpdate(
      { userId }, // Query to find the user by userId
      { $push: { "bookmarks.dayPlan": Plan } }, // $push to append the new image to bookmarks.images
      { new: true, runValidators: true } // Options: return updated document and run schema validation
    );
    res.status(201).json(chatSaved);
  } catch (error) {
    next(error);
  }
};
export const getBookmarkedImg = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const chatSaved = await UserData.findOne(
      { userId: userId }, // Query to find the user by userId
      { "bookmarks.photo": 1, _id: 0 } // Projection: include bookmarks.images, exclude _id
    );

    res.status(201).json(chatSaved);
  } catch (error) {
    next(error);
  }
};
export const getBookmarkedPlan = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const chatSaved = await UserData.findOne(
      { userId: userId }, // Query to find the user by userId
      { "bookmarks.dayPlan": 1, _id: 0 } // Projection: include bookmarks.images, exclude _id
    );

    res.status(201).json(chatSaved);
  } catch (error) {
    next(error);
  }
};
