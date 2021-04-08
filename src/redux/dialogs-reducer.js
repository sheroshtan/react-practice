const SEND_MESSAGE = 'SEND_MESSAGE';
const CHANGE_MESSAGE_INPUT_VALUE = "CHANGE_MESSAGE_INPUT_VALUE";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {
                id: state.messages.length + 1,
                text: state.messageInputValue
            }
            state.messages.push(newMessage);
            state.messageInputValue = "";
            return state;

        case CHANGE_MESSAGE_INPUT_VALUE:
            state.messageInputValue = action.value;
            return state;
        default:
            return state
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const changeMessageInputAC = (text) => {
    return {
        type: CHANGE_MESSAGE_INPUT_VALUE,
        value: text
    }
};

export default dialogsReducer;