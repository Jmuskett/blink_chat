import { Message } from "../../redux/slices/conversationSlice";

type Props = {
  messages: Message[];
};

export const MessageList = ({ messages }: Props) => {
  return (
    <div>
      hello!
      {messages.map((message: Message) => {
        return <p>{message.text}</p>;
      })}
    </div>
  );
};
