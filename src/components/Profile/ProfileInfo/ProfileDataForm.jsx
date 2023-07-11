import React from "react";
import { Input, Textarea, createField } from "../../Common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button onClick={() => { }}>save</button></div>
      <div>
        <b>Full name</b>: {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>About me</b>: {createField("About me", "aboutme", [], Textarea)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        <b>My professional skills</b>:
        {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
      </div>

      {/* <div>
    <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
      return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
    })
    }
  </div> */}
    </form>
  )
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataReduxForm;