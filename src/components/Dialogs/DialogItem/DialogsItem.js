import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt={"#"}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;