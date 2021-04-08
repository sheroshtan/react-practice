import React from "react";
import Post from "./Post/Post";

import s from './MyPosts.module.css';


const MyPosts = (props) => {

    const { postInputValue, postsData, dispatch } = props;

    const newPostElement = React.createRef();

    const postsElements = postsData.map(({id,text,likes}) => {
        return <Post key={id} id={id} text={text} likes={likes}/>
    })

    const onAddPost = () => {
        dispatch({type: 'ADD_POST'});
    }

    const onPostInputChange = () => {
        dispatch({type: 'CHANGE_POST_INPUT_VALUE', value: newPostElement.current.value});
    }

    return (
        <div>
            <div className={s.add_post}>
                <textarea
                    name="add-post"
                    className={s.post_input}
                    placeholder="type here..."
                    ref={newPostElement}
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