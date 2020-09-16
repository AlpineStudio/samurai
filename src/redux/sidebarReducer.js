let initialState = {
    friends: [
        {id: 1, name: 'Andrew', avatar: 'https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
        {id: 2, name: 'Sasha', avatar: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-1.2.1&w=1000&q=80'},
        {id: 3, name: 'Sveta', avatar: 'https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG'},
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state
}

export default sidebarReducer