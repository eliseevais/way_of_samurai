import React, { memo, useState } from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../Common/FormsControls/FormsControls";

const maxLengh10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field name="newPostText" component={Textarea} placeholder={"Post message"}
        validate={[required, maxLengh10]} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>;
}

let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

const MyPosts = React.memo(props => {

  console.log('RENDER from myPost');

  let postsElement =
    props.posts.map(p => <Post message={p.message}
      likesCount={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

  return (
    <div className={s.postsBlock} >
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElement}
      </div>
    </div>
  )
})


export default MyPosts;