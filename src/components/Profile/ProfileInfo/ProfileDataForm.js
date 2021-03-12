import React from "react";
import s from './ProfileInfo.module.css';
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../Commons/FormsControls/FormsControls";
import styles from "../../Commons/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <button>Save</button>
                {error && <div className={styles.formSummaryError}>
                    {error}
                </div>}
            </div>
            <div><b>Full Name</b>: {createField("Enter the name", "fullName", [], Input)}</div>
            <div><b>Looking for a Job</b>: {createField('', "lookingForAJob", [], Input, {type: 'checkbox'})}</div>
            <div><b>My Prof. Skills</b>: {createField('Your skills', "lookingForAJobDescription", [], Textarea)}</div>
            <div><b>About Me</b>: {createField("About me", "aboutMe", [], Textarea)}</div>
            <div>
                <b>Contacts</b>:
                {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={s.contact}>
                            <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                        </div>
                    )
                })}
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;