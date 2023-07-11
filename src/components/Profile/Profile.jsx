import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

  console.log('RENDER from Profile');

  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        saveProfile={props.saveProfile}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;