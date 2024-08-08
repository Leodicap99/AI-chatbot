import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conversations: [],
  currentChat: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.currentChat.push(action.payload);
    },
    saveChat: (state) => {
      state.conversations.push({
        messages: state.currentChat,
        feedback: null,
      });
      state.currentChat = [];
    },
    addFeedback: (state, action) => {
      const { feedback } = action.payload;
      let index = state.conversations.length-1;
      state.conversations[index].feedback = feedback;
    },
    loadChat: (state, action) => {
      state.currentChat = state.conversations[action.payload].messages;
    },
    editThumbsUp: (state, action) => {
      const chatIndex = action.payload;
      state.currentChat[chatIndex].thumbsUp = "primary";
      state.currentChat[chatIndex].thumbsDown = "";
    },
    editThumbsDown: (state, action) => {
      const chatIndex = action.payload;
      state.currentChat[chatIndex].thumbsUp = "";
      state.currentChat[chatIndex].thumbsDown = "primary";
    },
  },
});
export const {
  addMessage,
  saveChat,
  addFeedback,
  loadChat,
  editThumbsUp,
  editThumbsDown,
} = chatSlice.actions;
export default chatSlice.reducer;
