import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.item} id={props.id}>
            <img
                src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
                alt=""/>
            {props.message}
            <div>
                <button>like {props.likeCount}</button>
            </div>
        </div>
    )
}

export default Post;