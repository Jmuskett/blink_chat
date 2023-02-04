import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import { data } from "../../api/data";
import { Direction, sortByDate } from "../../helpers/";

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
  conversationState: {
    conversations: Conversation[];
    selectedConversation: string;
    messageList?: Message[] | [];
  };
}

const initialState: ConversationState = {
  conversationState: {
    conversations: sortByDate(data, Direction.DESCENDING),
    selectedConversation: "",
    messageList: [],
  },
};

export const conversationSlice = createSlice({
  name: "conversations",
  initialState,
  reducers: {
    selectConversation: (state, action: PayloadAction<string>) => {
      state.conversationState.selectedConversation = action.payload;
      state.conversationState.messageList =
        state.conversationState.conversations.filter(
          (conversation: Conversation) => conversation.id === action.payload
        )[0]?.messages;
    },
    addMessage: (state, action: PayloadAction<string>) => {
      if (!state.conversationState.messageList) {
        return;
      } else
        state.conversationState.messageList = [
          ...state.conversationState.messageList,
          {
            id: uuidv4(),
            text: action.payload,
            last_updated: new Date(Date.now()).toUTCString(),
          },
        ];
    },
  },
});

export const { addMessage, selectConversation } = conversationSlice.actions;

export default conversationSlice.reducer;
