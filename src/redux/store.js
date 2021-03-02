import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: 'Alloh buyuk!', likeCount: '20', id: 1},
                {message: 'Hi every body!', likeCount: '10', id: 2},
                {message: 'Good Morning!', likeCount: '14', id: 3},
                {message: 'Let"s go to the garden!', likeCount: '16', id: 4},
                {message: 'Good night!', likeCount: '100', id: 5}
            ],
            newPostText: 'Bobur Azimov blog!'
        },
        dialogsPage: {
            dialogs: [
                {name: 'Bobur', id: '1'},
                {name: 'Abdurahim', id: '2'},
                {name: 'Jahongir', id: '3'},
                {name: 'Alovuddin', id: '4'},
                {name: 'Sherzod', id: '5'}
            ],
            messages: [
                {message: 'Hi', id: '1'},
                {message: 'How are you?', id: '2'},
                {message: 'Yo-yo', id: '3'},
            ],
            newMessageText: '',
        },
        sidebarPage:{}
    },

    _callSubscriber() {
        alert('State changed!');
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this.getState().profilePage, action);
        this._state.dialogsPage = dialogsReducer(this.getState().dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this.getState().sidebarPage, action);
        this._callSubscriber(this._state);
    }
}

// Window.store = store;

export default store;