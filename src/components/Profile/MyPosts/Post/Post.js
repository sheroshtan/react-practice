import React from "react";

import s from './Post.module.css';

const Post = (props) => {

    const { text, likes } = props;

    return (
        <div className={s.post}>
            <img
                src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
                alt="avatar"/>
            { text }
            <span className={s.likes}>Likes: {likes}</span>
        </div>
    )
};

export default Post;