import { AddMessageForm } from "./components/addMessageForm/AddMessageForm";
import { ConversationList } from "./components/conversationList/ConversationList";
import { MessageList } from "./components/MessageList/MessageList";

function App() {
  return (
    <>
      <section>
        <div className="flex h-100">
          <ConversationList />

          <MessageList />
        </div>
      </section>
      <div>
        <AddMessageForm />
      </div>
    </>
  );
}

export default App;
