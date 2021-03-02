import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../Commons/FormsControls/FormsControls";
import s from "../Dialogs.module.css";
import React from "react";

const maxLengthCreator50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLengthCreator50]} name={'newMessageBody'} component={Textarea}
                       className={s.textAreaBox}
                       placeholder='Enter the message'
                />
            </div>
            <button>Send message</button>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);
