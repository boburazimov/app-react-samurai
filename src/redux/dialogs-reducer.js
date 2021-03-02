const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                message: action.newMessageBody,
                id: toString(state.messages.length + 1)
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;