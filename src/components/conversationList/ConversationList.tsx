import React from "react";
import { Conversation } from "../../redux/slices/conversationSlice";

type Props = {
  setSelectedConversation: (id: string) => void;
  conversations: Conversation[];
};

export const ConversationList = ({
  setSelectedConversation,
  conversations,
}: Props) => {
  const handleSelectConversation = (id: string, e?: React.KeyboardEvent) => {
    if (e && e?.key !== "Enter") {
      return;
    } else setSelectedConversation(id);
  };

  return (
    <ul
      aria-label="A list of conversations"
      className="p-20  border-4 border-slate-500 w-1/4 bg-fuchsia-100 "
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
