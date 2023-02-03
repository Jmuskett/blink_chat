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
    <div className="w-full max-w-xl">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-6">
          <div className="mb-4">
            <label
              htmlFor="new-message-input"
              className='"block text-gray-700 text-sm font-bold mb-2"'
            >
              Add a new message
            </label>
          </div>
          <input
            onChange={(e) => setNewMessage(e.target.value)}
            id="new-message-input"
            name="new-message-input"
            type="text"
            value={newMessage}
            placeholder="enter your text"
            className='"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            send
          </button>
        </div>
      </form>
    </div>
  );
};
