import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import s from './Dialogs.module.css';
import { changeMessageInputAC, sendMessageAC } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    const { data: { messageInputValue }, dispatch } = props;

    const dialogsElements = props.data.dialogs.map(({id, name}) => <DialogItem key={id} name={name} id={id}/>);

    const messagesElements = props.data.messages.map(({id, text}) => <Message key={id} id={id} text={text}/>);

    const sendMessage = () => {
        dispatch(sendMessageAC());
    }

    const onChangeMessageInput = (e) => {
        dispatch(changeMessageInputAC(e.target.value));
    }

    return (
        <div className={s.dialogs}>
            <div>
                <ul>
                    {
                        dialogsElements
                    }
                </ul>
            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
                <div className={s.sendMessage}>
                    <textarea
                        className={s.message_input}
                        onChange={onChangeMessageInput}
                        value={messageInputValue}/>
                    <button
                        className={s.message_btn}
                        onClick={ sendMessage }>SEND</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;