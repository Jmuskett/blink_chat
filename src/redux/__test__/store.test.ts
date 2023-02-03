import { store } from "../store";
import { mockConversations } from "./mockConversations";

const mockStore = {
  conversations: {
    conversations: mockConversations,
  },
};

describe("store", () => {
  it("should return an object with the expected initialState", () => {
    expect(store.getState()).toEqual(mockStore);
  });
});
