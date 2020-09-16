let initialState = {
    posts: [
        {id: 1, title: 'This is header 1', description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum', likesCount: 12},
        {id: 2, title: 'Go pro 2', description: 'lo2rem ip2sum lo2rem ip2sum lo2rem ip2su', likesCount: 23},
        {id: 3, title: 'Go pro 3', description: 'goood work lols', likesCount: 0},
    ],
    newPostText: 'it-kama.com'
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD-POST':
            let newPost = {id: 5, title: state.newPostText, description: 'lorem custom text', likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ''
        break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.postText
            console.log(state)
        break;
    }
    return state
}

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const updateNewPostTextActionCreator = text => ({type: 'UPDATE-NEW-POST-TEXT', postText: text})

export default profileReducer