import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => (<DialogItem name={d.name} id={d.id} key={d.id}/>))
    let messageElements = state.messages.map(m => (<Message message={m.message} id={m.id} key={m.id}/>))

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messageElements}
                </div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}

export default Dialogs;