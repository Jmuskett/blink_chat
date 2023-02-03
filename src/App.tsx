import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ConversationList } from "./components/conversationList/ConversationList";
import { MessageList } from "./components/MessageList/MessageList";
import { Direction, sortByDate } from "./helpers/sortByDate";
import { RootState } from "./redux";
import { addMessage, Conversation } from "./redux/slices/conversationSlice";

function App() {
  const [selectedConversation, setSelectedConversation] = useState<string>();

  const conversations = useSelector(
    (state: RootState) => state.conversations.conversations
  );

  const sortedConversations = sortByDate(conversations, Direction.DESCENDING);

  const messageList = sortedConversations.filter(
    (conversation: Conversation) => conversation.id === selectedConversation
  )[0]?.messages;

  return (
    <>
      <section>
        <div className="flex h-100">
          <ConversationList
            setSelectedConversation={setSelectedConversation}
            conversations={sortedConversations}
          />
          {messageList && selectedConversation && (
            <MessageList messages={messageList} />
          )}
        </div>
      </section>
    </>
  );
}

export default App;
