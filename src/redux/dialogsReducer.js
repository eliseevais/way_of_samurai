const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
    ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;