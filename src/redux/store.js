import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, text: "first post", likes: 0},
                {id: 2, text: "second post", likes: 3},
                {id: 3, text: "third post", likes: 1},
                {id: 4, text: "fourth post", likes: 12},
            ],
            postInputValue: ''
        },
        dialogsPage: {
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
        }
    },
    getState() {
        return this._state;
    },
    subscribe(func) {
        this.rerenderDOM = func;
    },
    rerenderDOM() {
        console.log("state was changed")
    },

    dispatch(action) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this.rerenderDOM(this._state);
    }
}