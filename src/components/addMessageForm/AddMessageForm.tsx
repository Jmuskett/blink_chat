import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addMessage } from "../../redux/slices/conversationSlice";

export const AddMessageForm = () => {
  const [newMessage, setNewMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(addMessage(newMessage));
    setNewMessage("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="new-message-input">Add a new message</label>
      <input
        onChange={(e) => setNewMessage(e.target.value)}
        id="new-message-input"
        name="new-message-input"
        type="text"
        value={newMessage}
      />
      <button type="submit">Click to send</button>
    </form>
  );
};
