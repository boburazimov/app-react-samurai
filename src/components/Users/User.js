import React from 'react';
import photoUrl from "../../assets/images/user.png";
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";

let User = ({user, ...props}) => {

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small ? user.photos.small : photoUrl}
                             className={styles.userPhoto} alt='#'/>
                    </NavLink>
                </div>
                <div>
                            {user.followed
                                ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id);
                                }}>Unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.unfollow(user.id);
                                }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                <div>{user.name}</div>
                    {/*<div>{user.status}</div>*/}
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
            </span>
        </div>
    );
}

export default User;