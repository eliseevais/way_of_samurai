import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      {/* <div>
        <img
          src='https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
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