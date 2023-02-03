/* eslint-disable jest/no-conditional-expect */
import { Conversation, Message } from "../redux/slices/conversationSlice";
import {
  mockConversations,
  mockMessages,
} from "../redux/__test__/mockConversations";
import { Direction, sortByDate } from "./sortByDate";

describe("sortByDate", () => {
  it("should return a list of conversations, from newest to oldest", () => {
    const result = sortByDate(mockConversations, Direction.DESCENDING);

    result.forEach((conversation: Conversation, i) => {
      if (i !== result.length - 1) {
        expect(
          new Date(result[i].last_updated) >
            new Date(result[i + 1].last_updated)
        ).toBe(true);
      } else {
        expect(
          new Date(result[i].last_updated) <
            new Date(result[i - 1].last_updated)
        ).toBe(true);
      }
    });
  });
  it("should return a list of messages, from oldest to newest", () => {
    const result = sortByDate(mockMessages, Direction.ASCENDING);

    result.forEach((message: Message, i) => {
      if (i !== result.length - 1) {
        expect(
          new Date(result[i].last_updated) <
            new Date(result[i + 1].last_updated)
        ).toBe(true);
      } else {
        expect(
          new Date(result[i].last_updated) >
            new Date(result[i - 1].last_updated)
        ).toBe(true);
      }
    });
  });
});
