import React from "react";
import { Input, Textarea, createField } from "../../Common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import style from './ProfileInfo.module.css';
import style2 from "../../Common/FormsControls/FormControls.module.css";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button onClick={() => { }}>save</button></div>
      
      {error && <div className={style2.formSummaryError}>{error}</div>}

      <div>
        <b>Full name</b>:
        {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>About me</b>:
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
      </div>

      <div>
        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
          return <div key={key} className={style.contact}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
          </div>
        })
        }
      </div>
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm;