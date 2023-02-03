import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import {
  Conversation,
  selectConversation,
} from "../../redux/slices/conversationSlice";

export const ConversationList = ({}) => {
  const conversations = useSelector(
    (state: RootState) => state.conversations.conversationState.conversations
  );
  const dispatch = useDispatch();
  const handleSelectConversation = (id: string, e?: React.KeyboardEvent) => {
    if (e && e?.key !== "Enter") {
      return;
    } else dispatch(selectConversation(id));
  };

  return (
    <ul
      aria-label="A list of conversations"
      className="p-20  border-4 border-slate-500 w-1/4 bg-cyan-100 shadow-xl shadow-cyan-100/50"
    >
      {conversations.map((conversation: Conversation, i) => (
        <li
          tabIndex={20 + i}
          className="py-10 cursor-pointer"
          onClick={() => handleSelectConversation(conversation.id)}
          onKeyDown={(e) => handleSelectConversation(conversation.id, e)}
          key={conversation.id}
        >
          <h2 className="text-2xl text-center hover:font-bold">
            {conversation.name}
          </h2>
        </li>
      ))}
    </ul>
  );
};
