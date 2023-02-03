import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { Conversation } from "../../redux/slices/conversationSlice";
import { mockConversations } from "../../redux/__test__/mockConversations";
import { ConversationList } from "./ConversationList";

describe("ConversationList", () => {
  it("should render a list of the conversations from global state", () => {
    render(
      <Provider store={store}>
        <ConversationList
          setSelectedConversation={jest.fn()}
          conversations={mockConversations}
        />
      </Provider>
    );
    const conversations = store.getState().conversations.conversations;

    conversations.forEach((conversation: Conversation) =>
      expect(screen.getByText(conversation.name)).toBeInTheDocument()
    );
  });
});
