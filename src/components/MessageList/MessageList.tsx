import { useSelector } from "react-redux";
import { formatDate } from "../../helpers/formatDate";
import { Direction, sortByDate } from "../../helpers/sortByDate";
import { RootState } from "../../redux";
import { Conversation, Message } from "../../redux/slices/conversationSlice";

// nb some funky type casting here because of the way the sort
// function works, with more time would have this working correctly
export const MessageList = () => {
  const messages = useSelector(
    (state: RootState) => state.conversations.conversationState.messageList
  );
  return (
    <ul
      aria-label="a list of messages "
      className="p-20  border-4 border-slate-500 w-3/4 bg-fuchsia-100"
    >
      {messages &&
        sortByDate(
          messages as unknown as Conversation[],
          Direction.ASCENDING
        ).map((message: any, i) => {
          return (
            <li tabIndex={30 + i} className="py-10" key={message.id}>
              <p className="font-bold pb-5">
                {formatDate(message.last_updated)}
              </p>
              <p>"{message.text}"</p>
            </li>
          );
        })}
    </ul>
  );
};
