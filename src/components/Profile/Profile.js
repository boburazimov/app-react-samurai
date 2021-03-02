import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import SuperMyPostContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <SuperMyPostContainer store={props.store}/>
        </div>
    )
}

export default Profile;