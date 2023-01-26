const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts:
    [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: 'It is my first post', likesCount: 20 },
      { id: 3, message: 'I like coctails', likesCount: 10 },
      { id: 4, message: 'Star wors is super film', likesCount: 17 }
    ],
  newPostText: 'мой круговорот данных'
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };
      return { 
        ...state, 
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { 
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;