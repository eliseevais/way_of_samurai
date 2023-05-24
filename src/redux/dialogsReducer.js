const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs:
    [
      { id: 1, name: 'Dima' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Valery' },
      { id: 6, name: 'Viktor' }
    ],
  messages:
    [
      { id: 1, message: 'Hi' },
      { id: 2, message: 'How is your day?' },
      { id: 3, message: 'Yo' },
      { id: 4, message: 'hey' },
      { id: 5, message: 'Ha-ha' },
    ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = (newMessageBody) => (
  { type: SEND_MESSAGE, newMessageBody }
);

export default dialogsReducer;