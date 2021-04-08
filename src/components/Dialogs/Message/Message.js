import React from 'react';
import s from "./Message.module.css";

const Message = (props) => {

    const { text } = props;

    return (
        <div className={s.message}>
            <img
                src="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
                alt="avatar"/>
            { text }
        </div>
    )
};

export default Message;