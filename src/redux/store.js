import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      posts:
        [
          { id: 1, message: 'Hi, how are you?', likesCount: 12 },
          { id: 2, message: 'It is my first post', likesCount: 20 },
          { id: 3, message: 'I like coctails', likesCount: 10 },
          { id: 4, message: 'Star wors is super film', likesCount: 17 }
        ],
      newPostText: 'мой круговорот данных'
    },
    dialogsPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('state was changed (from state.js)')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) { 

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
    
  }
}




export default store;
window.store = store;
// store - OOP