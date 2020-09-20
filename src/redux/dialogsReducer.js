let initialState = {
    dialogs: [
        {userId: 1, name: "Alex"},
        {userId: 2, name: "Masha"},
        {userId: 3, name: "Diana"},
        {userId: 4, name: "Sofia"},
        {userId: 5, name: "Lera"},
    ],
    messages: [
        {userId: 1, text: 'Привет'},
        {userId: 2, text: 'Здаров'},
        {userId: 3, text: 'Как дела?'},
        {userId: 4, text: 'Нормально'},
        {userId: 5, text: 'А у тебя'},
        {userId: 6, text: 'Тоже'},
        {userId: 7, text: 'А у тебя'},
    ],
    newMessageText: 'test message'
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case  'UPDATE-NEW-DIALOG-MESSAGE':
            state.newMessageText = action.message
        break;
        case 'ADD-MESSAGE':
            const newMessage = {userId: 6, text: state.newMessageText}
            state.messages.push(newMessage)
            console.log(state.messages)
            state.newMessageText = ''
        break;
    }
    return state
}

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const updateDialogMessageActionCreator = text => ({type: 'UPDATE-NEW-DIALOG-MESSAGE', message: text})

export default dialogsReducer