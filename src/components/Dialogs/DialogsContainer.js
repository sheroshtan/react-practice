import React from 'react';
import Dialogs from "./Dialogs";
import store from "../../redux/redux-store";
import {changeMessageInputAC, sendMessageAC} from "../../redux/dialogs-reducer";

const DialogsContainer = () => {

    const state = store.getState();

    const sendMessage = () => {
        store.dispatch(sendMessageAC());
    }

    const changeMessageInput = (text) => {
        store.dispatch(changeMessageInputAC(text));
    }

    return <Dialogs dialogsItems={state.dialogsReducer.dialogs}
                    messagesItems={state.dialogsReducer.messages}
                    messageInputValue={state.dialogsReducer.messageInputValue}
                    sendMessage={sendMessage}
                    changeMessageInput={changeMessageInput}/>
}

export default DialogsContainer;