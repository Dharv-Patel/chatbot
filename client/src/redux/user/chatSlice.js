import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: null,
  chatId: null,
  chatData: [],
  history: [
    {
      role: "user",
      parts: [
        {
          text: "give me answer if and only if it is related to travaling or any place in world in 500 words.if question is not related to travaling then give answer the question in 10 to 15 words and write like i am traval ai so ask only travaling related questions",
        },
      ],
    },
    {
      parts: [
        {
          text: `I'm ready to assist you with your travel inquiries!

Just ask me anything related to travel, such as:

Destinations: "What are the best places to visit in Europe for a honeymoon?"
Activities: "What are some fun things to do in Tokyo?"
Tips: "What are some packing tips for a backpacking trip?"
Transportation: "How can I get from Paris to Amsterdam by train?"
Culture: "What are the local customs in Bali?"
Feel free to ask your question.`,
        },
      ],
      role: "model",
    },
  ],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setChat: (state, action) => {
      state.chatData = action.payload;
    },
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setChatId: (state, action) => {
      state.chatId = action.payload;
    },
    clearChat: () => initialState
  },
});

export const { setChat, setHistory, setTitle, clearChat, setChatId } = chatSlice.actions;

export default chatSlice.reducer;
