import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import sidebarReducer from './sidebarReducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, title: 'This is header 1', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum', likesCount: 12},
                {id: 2, title: 'Go pro 2', description: 'lo2rem ip2sum lo2rem ip2sum lo2rem ip2su', likesCount: 23},
                {id: 3, title: 'Go pro 3', description: 'goood work lols', likesCount: 0},
            ],
            newPostText: 'it-kama.com'
        },
        dialogsPage: {
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
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrew', avatar: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
                {id: 2, name: 'Sasha', avatar: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&w=1000&q=80'},
                {id: 3, name: 'Sveta', avatar: 'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG'},
            ]
        }
    },
    _callSubscriber() {
        console.log('No subscribers')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) { // {type: 'ADD-POST'}
        this._state.profilePage = profileReducer(this.getState().profilePage, action)
        this._state.dialogsPage = dialogsReducer(this.getState().dialogsPage, action)
        this._state.sidebar = sidebarReducer(this.getState().sidebar, action)
        this._callSubscriber(this.getState())
    }
}

// doing myself



export default store