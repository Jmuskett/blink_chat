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
    if (e?.key && e?.key !== "Enter") {
      return;
    }
    setSelectedConversation(id);
  };

  return (
    <div>
      {conversations.map((conversation: Conversation) => (
        <h2
          onClick={() => handleSelectConversation(conversation.id)}
          onKeyDown={() => handleSelectConversation(conversation.id)}
          key={conversation.id}
        >
          {conversation.name}
        </h2>
      ))}
    </div>
  );
};
