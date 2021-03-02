import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Commons/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    let profile = props.profile

    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' alt={"#"}/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div>
                    <img
                        src={!profile.photos.large ? 'https://image.shutterstock.com/image-vector/please-no-photo-camera-vector-260nw-473234290.jpg' : profile.photos.large}
                        alt={"#"}/>
                    <div><strong>Status: </strong><ProfileStatusWithHooks status={props.status}
                                                                          updateStatus={props.updateStatus}/></div>
                </div>
                <div><strong>About Me: </strong>{profile.aboutMe}</div>
                <div><h2>Contacts:</h2></div>
                <div><strong>Facebook: </strong>{profile.contacts.facebook}</div>
                <div><strong>VK: </strong>{profile.contacts.vk}</div>
                <div><strong>Twitter: </strong>{profile.contacts.twitter}</div>
                <div><strong>Instagram: </strong>{profile.contacts.instagram}</div>
                <div><strong>GitHub: </strong>{profile.contacts.github}</div>
                <div><h2>Job:</h2></div>
                <div><strong>Looking for a Job: </strong>{profile.lookingForAJob ?
                    <span style={{FontSize: '30px'}}>&#129488;</span> :
                    <span style={{FontSize: '30px'}}>&#128526;</span>}</div>
                <div><strong>Full Name: </strong>{profile.fullName}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;