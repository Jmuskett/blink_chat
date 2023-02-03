import { formatDate } from "../../helpers/formatDate";
import { Direction, sortByDate } from "../../helpers/sortByDate";
import { Conversation, Message } from "../../redux/slices/conversationSlice";

type Props = {
  messages: Message[];
};
// nb some funky type casting here because of the way the sort
// function works, with more time would have this working correctly
export const MessageList = ({ messages }: Props) => {
  return (
    <ul
      aria-label="a list of messages "
      className="p-20  border-4 border-slate-500 w-3/4 bg-fuchsia-100"
    >
      {sortByDate(
        messages as unknown as Conversation[],
        Direction.ASCENDING
      ).map((message: any, i) => {
        return (
          <li tabIndex={30 + i} className="py-10">
            <p className="font-bold pb-5">{formatDate(message.last_updated)}</p>
            <p>"{message.text}"</p>
          </li>
        );
      })}
    </ul>
  );
};
