import { ConversationList } from "./components/conversationList";
import { MessageList } from "./components/MessageList";

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
