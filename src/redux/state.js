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
            newMessageText: 'Just message text'
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
        switch(action.type) {
            case 'ADD-POST':
                let newPost = {id: 5, title: this._state.profilePage.newPostText, description: 'lorem custom text', likesCount: 0}
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber(this._state)
            break;
            case 'UPDATE-NEW-POST-TEXT':
                this._state.profilePage.newPostText = action.postText
                this._callSubscriber(this._state)
            break;
            case  'UPDATE-NEW-DIALOG-MESSAGE':
                this._state.dialogsPage.newMessageText = action.message
                this._callSubscriber(this._state)
            break;
            case 'ADD-MESSAGE':
                const newMessage = {userId: 6, text: this._state.dialogsPage.newMessageText}
                this._state.dialogsPage.messages.push(newMessage)
                console.log(this._state.dialogsPage.messages)
                this._state.dialogsPage.newMessageText = ''
                this._callSubscriber(this._state)
            break;
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = text => ({type: 'UPDATE-NEW-POST-TEXT', postText: text})
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const updateDialogMessageActionCreator = text => ({type: 'UPDATE-NEW-DIALOG-MESSAGE', message: text})

// doing myself



export default store