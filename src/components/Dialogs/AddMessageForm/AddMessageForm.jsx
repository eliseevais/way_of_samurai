import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";

const maxLengh50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
          validate={[required, maxLengh50]}
          name="newMessageBody"
          placeholder="Enter your message" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

export default reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm);
