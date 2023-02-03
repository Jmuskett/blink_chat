import { formatDate } from "../../helpers/formatDate";
import { Direction, sortByDate } from "../../helpers/sortByDate";
import { Conversation, Message } from "../../redux/slices/conversationSlice";

type Props = {
  messages: Message[];
};

export const MessageList = ({ messages }: Props) => {
  return (
    <div>
      {sortByDate(
        messages as unknown as Conversation[],
        Direction.ASCENDING
      ).map((message: any) => {
        return (
          <>
            <p>{formatDate(message.last_updated)}</p>
            <p>{message.text}</p>{" "}
          </>
        );
      })}
    </div>
  );
};
