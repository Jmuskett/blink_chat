import { useSelector } from "react-redux";

import { formatDate } from "../../helpers/";
import { Direction, sortByDate } from "../../helpers/";
import { RootState } from "../../redux";
import { Conversation } from "../../redux/slices/conversationSlice";
import { AddMessageForm } from "../addMessageForm";

// nb some funky type casting here because of the way the sort
// function works, with more time would have this working correctly
export const MessageList = () => {
  const messages = useSelector(
    (state: RootState) => state.conversations.conversationState.messageList
  );

  return (
    <div className="ml-8  w-full max-w-xl h-full   px-8  pb-8 mb-4 ">
      <section>
        <ul
          aria-label="a list of messages"
          className=" h-96 overflow-scroll  bg-white shadow-md rounded pl-8 mb-8"
        >
          {!messages?.length && (
            <p className="flex justify-center py-40">
              Click a conversation to see all of its messages
            </p>
          )}
          {messages &&
            sortByDate(
              messages as unknown as Conversation[],
              Direction.ASCENDING
            ).map((message: any, i) => {
              return (
                <li tabIndex={30 + i} key={message.id}>
                  <p className="font-bold pt-5">
                    {formatDate(message.last_updated)}
                  </p>
                  <p>"{message.text}"</p>
                </li>
              );
            })}
        </ul>
        <div>{messages && messages.length > 0 && <AddMessageForm />}</div>
      </section>
    </div>
  );
};
