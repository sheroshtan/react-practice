const ADD_POST = 'ADD_POST';
const CHANGE_POST_INPUT_VALUE = 'CHANGE_POST_INPUT_VALUE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                text: state.postInputValue,
                likes: 0
            }
            state.posts.push(newPost);
            state.postInputValue = "";
            return state;

        }
        case CHANGE_POST_INPUT_VALUE:
            state.postInputValue = action.value;
            return state;
        default:
            return state;
    }

}

export const addPostAC = () => ({type: ADD_POST});
export const changePostInputAC = (text) => {
    return {
        type: CHANGE_POST_INPUT_VALUE,
        value: text
    }
};

export default profileReducer;