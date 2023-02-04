## Blink Chat app

In the project directory, you can run npm start to get going
npm run test to run tests

## General approach and technology choices

# Technology

- Create React App (with typescript template) - project framework, used to get going fast and a reasonable choice for a SPA. In a prod environment, I'd more likely reach for Next

- Redux Tool Kit for state - state management. I haven't used Redux in quite a while, and this was my first time using the tool kit. My rationale here was that we have no data coming in from network requests
  so redux should handle this nicely. In the real world, I've moved away from Redux/RTK and prefer to use something like React Query, or Apollo to handle my data, since it's going to be coming in from network requests and I can get my error and date state handling right out of the box.

- Tailwind - used for styling, it's a nice tool to get some styling applied quickly. I'm a bit on the fence about using it in a production app, as I think it could get unmanageable quite quickly. In the real world, I'm using styled components with MUI.

- additional libraries, date-fns for date handling, uuid for creating uuid, testing library (built in with CRA) for testing.

# Approach

I am a bit concerned I've misunderstood one of the core parts of the task, so wanted to flag that straight away. The test says to pull the data directly into a JSON as the link will expire after X time, as such this app has no API calls, loading or error state. I question this as it means some of the architecture is very different from what I'd do in production. If I was doing this task but reaching out directly to the notes, I would have used a query library (in this case RTK-QUERY) and shown loading and error states at the point of data injestion. In this app, App.tsx would have fired the data request and then showing a loading spinner while load, and then an error message componnt that consumed the error mesage, I'd also have put an error boundary around messageList, if we were adding messages via network request. with that said...

all conversation data is loaded straight into redux state from the start
and is then available to be consumed across the app.

App.tsx holds a conversation list and a message list. The conversation list always renders, and the message list renders with a placeholder CTA.

In state, we have a messageList which instantiates as an empty array, when the conversation is clicked, the id of that conversation is fired as a redux action and triggers in the redurcer to set all those conversations' messages as the global messageList

messageList having a length is also the trigger for the input form to
render. The user can enter a message and hit send, and another redux action is sent to append the new message to the message list. In a real world network app, this function would be slightly different, as here we just mutate the list of messages since it's all local. In a real world networked app, we'd handle this differently as we'd get the conversation in remotely each time and so we'd want to mutate the message key on the conversation object itself.

Outside of this the other things to look out for are a few util functions. I'm using date-fns to format the string into a human readnable date, as well as to handle the sorting algorithm

## What's missing?

The biggest things are, I ran out of time for the optional story point. Thinking of how I'd handle this, I'd modify my message list to create a piece of local state with the entire message object for the selected message. We'd then pass this down to the add message form, which we'd refactor to AddOrEditMessage. This component would get the text from the object and pass this to the form value. On submit we'd fire an "edit message" action which would take the id from message object, and then target and edit that property value in the redux store, in the messageList array of objects.

I also ran out of time for proper styling, by which I mean it's not responsive at all. It looks fairly ok on a laptop screen (using MBP 14), but it doesn't respond at all. In a prod app I'd set up size variables in a global theme and then consume these in media queries to make sure everything worked across screen sizes.

Finally, I ran out of time to test everything I'd have liked to. In particular, we're not really testing the user actions. I'd have added tests to assert that each conversation click renders the correct messages on to the page and that when the user hits send, the new message is appeneded to the DOM.

Finally, I came across an annoying TS issue with the sortDate function. In order to genericise, we want this function to take either a Conversation[] or Message[], however even with getting super explicit with return types, I was still having TS shout at me, so I went for a, not great approach of keeping the typing to Conversation[] and then casting where needed. If I take one thing away from this tests, it's goign to be investingating this and working out how to do this properly. I did think about going for Omit and creating a custom return type, but then that still needed extensive casting and kept on firing errors at me, so this was the 'least bad' option with the time constraint
