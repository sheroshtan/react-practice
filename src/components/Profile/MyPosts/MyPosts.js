import React from "react";
import Post from "./Post/Post";

import s from './MyPosts.module.css';
import {addPostAC, changePostInputAC} from "../../../redux/profile-reducer";

const MyPosts = (props) => {

    const { postInputValue, postsData, dispatch } = props;

    const postsElements = postsData.map(({id,text,likes}) => {
        return <Post key={id} id={id} text={text} likes={likes}/>
    })

    const onAddPost = () => {
        dispatch(addPostAC());
    }

    const onPostInputChange = (e) => {
        dispatch(changePostInputAC(e.target.value));
    }

    return (
        <div>
            <div className={s.add_post}>
                <textarea
                    name="add-post"
                    className={s.post_input}
                    placeholder="type here..."
                    value={postInputValue}
                    onChange={onPostInputChange}/>
                <button
                    className={s.post_btn}
                    onClick={ onAddPost }>send</button>
            </div>
            <div>
                {
                    postsElements
                }
            </div>
        </div>
    )
};

export default MyPosts;