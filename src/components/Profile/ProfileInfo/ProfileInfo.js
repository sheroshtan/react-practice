import React from 'react';

import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.profile}>
            <img
                src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
                alt="avatar"
                className={s.profile_photo}/>
            <div>
                some description here
            </div>
        </div>
    )
};

export default ProfileInfo;