import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { data } from "../../api/data";

export type Message = {
  id: string;
  text: string;
  last_updated: string;
};

export type Conversation = {
  id: string;
  name: string;
  last_updated: string;
  messages: Message[];
};

export interface ConversationState {
  conversations: Conversation[];
}

const initialState: ConversationState = {
  conversations: data,
};

export const conversationSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<string>) => {
      console.log("action", action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addMessage } = conversationSlice.actions;

export default conversationSlice.reducer;
