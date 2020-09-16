import React from 'react'
import Post from './Post/Post'
    import c from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPostsContainer = props => {
    let postElems = props.posts.map(p => <Post title={p.title} description={p.description} likesCount={p.likesCount} />)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <MyPosts />
    )
}
export default MyPostsContainer