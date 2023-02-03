import { compareAsc, compareDesc } from "date-fns";
import { Conversation, Message } from "../redux/slices/conversationSlice";

export enum Direction {
  DESCENDING = "DESCENDING",
  ASCENDING = "ASCENDING",
}

export const sortByDate = (
  data: Conversation[] | Message[],
  direction: Direction
) => {
  const copyOfDataToAvoidMutation = data;

  direction === Direction.DESCENDING
    ? copyOfDataToAvoidMutation.sort((a, b) =>
        compareDesc(new Date(a.last_updated), new Date(b.last_updated))
      )
    : copyOfDataToAvoidMutation.sort((a, b) =>
        compareAsc(new Date(a.last_updated), new Date(b.last_updated))
      );
  return copyOfDataToAvoidMutation;
};
