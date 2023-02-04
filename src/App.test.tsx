import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { data } from "./api/data";
import App from "./App";
import { Direction, sortByDate } from "./helpers/sortByDate";
import { store } from "./redux";

describe("App", () => {
  it("should render a list of conversations when the app loads", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getAllByRole("listitem")).toHaveLength(data.length);
    expect(screen.getByText("eiusmod nostrud sunt")).toBeInTheDocument();
  });

  it("should return the conversations ordered from newest to oldest", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const sortedData = sortByDate(data, Direction.DESCENDING);
    const listOfConversations = screen.getAllByRole("heading");

    expect(listOfConversations[0].textContent).toEqual(sortedData[0].name);
  });
  it("should show the call to action, when no conversation is selected", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(
      screen.getByText("Click a conversation to see all of its messages")
    ).toBeInTheDocument();
  });

  it("should open a list of messages when the user clicks the relevant conversations", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const messageList = screen.getByRole("list", {
      name: "a list of messages",
    });

    //nb fragile test since it relies on first conversation
    //always being the same, refactor in future
    expect(messageList).not.toHaveTextContent("qui sint irure sunt");
    userEvent.click(screen.getAllByRole("heading")[0]);
    expect(messageList).toHaveTextContent("qui sint irure sunt");
  });

  it("should allow a user to add a new message", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.queryByText('"hello"')).toBeNull();

    userEvent.click(screen.getAllByRole("heading")[0]);
    const input = screen.getByRole("textbox", { name: "Add a new message" });
    userEvent.type(input, "hello");
    userEvent.click(screen.getByRole("button"));

    expect(screen.getByText('"hello"')).toBeInTheDocument();
  });
});
