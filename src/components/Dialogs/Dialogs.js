import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import s from './Dialogs.module.css';


const Dialogs = (props) => {

    const { dialogsItems, messagesItems,
        sendMessage, changeMessageInput, messageInputValue } = props;

    const dialogsElements = dialogsItems.map(({id, name}) => <DialogItem key={id} name={name} id={id}/>);

    const messagesElements = messagesItems.map(({id, text}) => <Message key={id} id={id} text={text}/>);

    const onSendMessage = () => {
        sendMessage();
    }

    const onChangeMessageInput = (e) => {
        changeMessageInput(e.target.value);
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
                        onClick={ onSendMessage }>SEND</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;