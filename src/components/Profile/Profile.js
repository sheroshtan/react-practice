import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

//import s from './Profile.module.css';

const Profile = (props) => {
    const { data: { posts, postInputValue }, dispatch } = props;

    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={posts}
                     dispatch={dispatch}
                     postInputValue={postInputValue}/>
        </div>
    )
};

export default Profile;