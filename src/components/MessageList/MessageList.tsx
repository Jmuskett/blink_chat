import { Message } from "../../redux/slices/conversationSlice";

type Props = {
  messages: Message[];
};

export const MessageList = ({ messages }: Props) => (
  <div>
    {messages.map((message: Message) => (
      <p>{message.text}</p>
    ))}
  </div>
);
