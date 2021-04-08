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
            ]
        }
    },
    getState() {
        return this._state;
    },
    observer(func) {
        this.rerenderDOM = func;
    },
    rerenderDOM() {
        console.log("state was changed")
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD_POST': {
                const newPost = {
                    id: this._state.profilePage.posts.length + 1,
                    text: this._state.profilePage.postInputValue,
                    likes: 0
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.postInputValue = "";
                this.rerenderDOM(this._state);
            }
                break;
            case 'CHANGE_POST_INPUT_VALUE': {
                this._state.profilePage.postInputValue = action.value;
                this.rerenderDOM(this._state);
            } break;
            default:
                return this._state
        }
    }
}

window.store = store;

export default store;
