import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Commons/FormsControls/FormsControls";

const maxLengthCreator10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLengthCreator10]} component={Textarea} name={'newPostText'}
                       placeholder={'Enter the new Post'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm({form: "addPostForm"})(AddNewPostForm)

const MyPosts = React.memo(props => {

    let postsElements =
        [...props.posts]
            .reverse()
            .map(post => (
                <Post
                    message={post.message}
                    likeCount={post.likeCount}
                    id={post.id}
                    key={post.id}
                />
            ))

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
});

export default MyPosts;