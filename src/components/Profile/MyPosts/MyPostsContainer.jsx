import React from 'react'
import Post from './Post/Post'
import MyPosts from './MyPosts'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import StoreContext from '../../../StoreContext';

const MyPostsContainer = props => {
    return (
        <StoreContext.Consumer>{store => {
            const addPost = () => {
                store.dispatch(addPostActionCreator())
            }
            const onPostChange = text => {
                store.dispatch(updateNewPostTextActionCreator(text))
            }
            let state = store.getState().profilePage
            let postElems = state.posts.map(p => <Post title={p.title} description={p.description} likesCount={p.likesCount} />)
            return <MyPosts addPost={addPost} newPostText={state.newPostText} updateNewPostText={onPostChange} postElems={postElems} />
        }
        }</StoreContext.Consumer>
    )
}
export default MyPostsContainer