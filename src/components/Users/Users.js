import React from 'react';
import Paginator from "../Commons/Paginator/Paginator";
import User from "./User";

let Users = ({totalItemsCount, pageSize, currentPage, onPageChanged, ...props}) => {

    return (
        <div>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage}
                       onPageChanged={onPageChanged}/>
            <div>
                {props.users.map(u =>
                    <User user={u} key={u.id} followingInProgress={props.followingInProgress}
                          follow={props.follow} unfollow={props.unfollow}/>
                )}
            </div>
        </div>
    );
}

export default Users;