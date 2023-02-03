import configureStore from "redux-mock-store";
import { RootState } from "../store";
import { mockConversations } from "./mockConversations";

const mockReduxStore = configureStore();

export const mockInitialState = mockReduxStore({
  conversations: {
    conversationState: {
      conversations: mockConversations,
      selectedConversation: "",
    },
  },
});

export const mockStore = mockReduxStore({
  conversations: {
    conversationState: {
      conversations: mockConversations,
      selectedConversation: "",
      messageList: [
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
      ],
    },
  },
});
