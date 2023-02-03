import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux";
import { Message } from "../../redux/slices/conversationSlice";
import { MessageList } from "./MessageList";

describe("ConversationList", () => {
  it("should render a list of messages for a specific conversation", () => {
    const mockMessages = [
      {
        id: "5f58bcd7352396fffbae8b6e",
        text: "Lorem labore ea et",
        last_updated: "2020-02-16T04:35:16",
      },
      {
        id: "5f58bcd7d95151eaa14ab8aa",
        text: "ex excepteur deserunt laboris",
        last_updated: "2020-08-18T11:16:45",
      },
      {
        id: "5f58bcd7f7745918c2252086",
        text: "dolore sunt reprehenderit cupidatat",
        last_updated: "2020-03-23T10:06:33",
      },
    ];

    render(
      <Provider store={store}>
        <MessageList messages={mockMessages} />
      </Provider>
    );

    mockMessages.forEach((message: Message) =>
      expect(screen.getByText(`"${message.text}"`)).toBeInTheDocument()
    );
  });
});
