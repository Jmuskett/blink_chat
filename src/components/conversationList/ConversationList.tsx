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
        <p>{conversation.name}</p>
      ))}
    </div>
  );
};
