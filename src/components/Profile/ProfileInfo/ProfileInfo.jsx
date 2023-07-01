import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.png'; 

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (event) => {
    if (event.target.files.length) {
      props.savePhoto(event.target.files[0])
    }
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={s.mainPhoto}/>
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

        <div>Обо мне: {props.profile.aboutMe}</div>
        <div>Мои контакты</div>
        <div>{props.profile.contacts.facebook}</div>
        <div>{props.profile.contacts.website}</div>
        <div>{props.profile.contacts.vk}</div>
        <div>{props.profile.contacts.twitter}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.contacts.youtube}</div>
        <div>{props.profile.contacts.github}</div>
        <div>{props.profile.contacts.mainLink}</div>
        <div>Статус поиска работы:</div>
        <div>{props.profile.lookingForAJob}</div>
        <div>{props.profile.lookingForAJobDescription}</div>
        <div>Полное имя: {props.profile.fullName}</div>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;