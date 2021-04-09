import React from "react";
import store from '../../../redux/redux-store';
import MyPosts from "./MyPosts";
import {addPostAC, changePostInputAC} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
    const state = store.getState();

    const addPost = () => {
        store.dispatch(addPostAC());
    }

    const onChangePostInput = (text) => {
        store.dispatch(changePostInputAC(text));
    }

    return <MyPosts addPost={addPost}
                    changePostInput={onChangePostInput}
                    postInputValue={state.profileReducer.postInputValue}
                    postsData={state.profileReducer.posts}/>
};

export default MyPostsContainer;