const SEND_MESSAGE = 'SEND_MESSAGE';
const CHANGE_MESSAGE_INPUT_VALUE = "CHANGE_MESSAGE_INPUT_VALUE";

let initialState = {
    dialogs: [
        {id: 1, name: "Sasha"},
        {id: 2, name: "Roman"},
        {id: 3, name: "Julia"},
        {id: 4, name: "Daria"},
    ],
    messages: [
        {id: 1, text: "Hello"},
        {id: 2, text: "How are you?"},
        {id: 3, text: "Where are you???"},
        {id: 4, text: "Call me back"},
    ],
    messageInputValue: ""
};

const dialogsReducer = (state = initialState, action) => {
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