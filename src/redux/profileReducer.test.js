import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";
import { render, screen } from '@testing-library/react';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: 'It is my first post', likesCount: 20 },
    { id: 3, message: 'I like coctails', likesCount: 10 },
    { id: 4, message: 'Star wors is super film', likesCount: 17 }
  ]
}

test('length of post should be incremented', () => {
  // 1 . test data
  let action = addPostActionCreator("it-kamasutra.com");
  
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(5);
});

test('message of new post should be correct', () => {
  // 1 . test data
  let action = addPostActionCreator("it-kamasutra.com");
  
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

test('after deleting length of messages should be decrement', () => {
  // 1 . test data
  let action = deletePost(1);
  
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

test(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
  // 1 . test data
  let action = deletePost(1000);
  
  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(4);
});


