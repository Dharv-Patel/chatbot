import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatData: [],
    history: [
        {
          role: "user",
          parts: [
            {
              text: "give me answer if and only if it is related to travaling or any place in world in 500 words.if question is not related to travaling then show answer like only travaling related question allowed",
            },
          ],
        },
        {
          parts: [
            {
              text: `Understood. I'll provide travel-related responses, If the question is not travel-related, I'll simply respond with \"Travel-related questions only.\"Please feel free to ask your question.`,
            },
          ],
          role: "model",
        },
      ],
    
}

const chatSlice = createSlice({
    name:'chat',
    initialState,
    reducers:{
        setChat: (state, action) => {
            state.chatData = action.payload
        },
        setHistory: (state, action) => {
            state.history = action.payload
        },
    }
})

export const {setChat, setHistory} = chatSlice.actions;

export default chatSlice.reducer;