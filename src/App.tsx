import { ConversationList } from "./components/conversationList/ConversationList";
import { MessageList } from "./components/MessageList/MessageList";

function App() {
  return (
    <>
      <div className="flex w-100 p-20  ">
        <ConversationList />
        <MessageList />
      </div>
    </>
  );
}

export default App;
