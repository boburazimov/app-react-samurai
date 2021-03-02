import React from 'react';
import s from '.././Dialogs.module.css';

const Message = (props) => {

    return (
        <div className={s.message}>
           <span className={s.element}>
               {props.message}
            </span>
        </div>
    )
}

export default Message;