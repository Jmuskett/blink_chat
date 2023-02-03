import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { Conversation } from "../../redux/slices/conversationSlice";

export const ConversationList = () => {
  const conversations = useSelector(
    (state: RootState) => state.conversations.conversations
  );

  return (
    <div>
      {conversations.map((conversation: Conversation) => (
        <h2>{conversation.name}</h2>
      ))}
    </div>
  );
};
