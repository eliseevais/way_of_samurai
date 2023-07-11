import React, { useState } from "react";
import Preloader from "../../Common/Preloader/Preloader";
import style from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png';
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData)
  }

  return (
    <div>
      <div className={style.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={style.mainPhoto} />
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}

        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        {editMode
          ? <ProfileDataForm profile={props.profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }}
            profile={props.profile} isOwner={props.isOwner} />
        }
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>About me</b>: {profile.aboutme}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob &&
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      }

      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
          return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })
        }
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div className={style.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;