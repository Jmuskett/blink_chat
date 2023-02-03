import { useState } from "react";
import { useSelector } from "react-redux";
import { ConversationList } from "./components/conversationList/ConversationList";
import { MessageList } from "./components/MessageList/MessageList";
import { Direction, sortByDate } from "./helpers/sortByDate";
import { RootState } from "./redux";
import { Conversation, Message } from "./redux/slices/conversationSlice";

function App() {
  const [selectedConversation, setSelectedConversation] = useState<string>();

  const conversations = useSelector(
    (state: RootState) => state.conversations.conversations
  );

  const sortedConversations = sortByDate(conversations, Direction.DESCENDING);

  const messageList = sortedConversations.filter(
    (conversation: Conversation) => conversation.id === selectedConversation
  )[0].messages;

  return (
    <div>
      <ConversationList
        setSelectedConversation={setSelectedConversation}
        conversations={sortedConversations}
      />
      {messageList && <MessageList messages={messageList} />}
    </div>
  );
}

export default App;
