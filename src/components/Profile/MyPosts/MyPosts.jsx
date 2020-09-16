import React from 'react'
import Post from './Post/Post'
import c from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = props => {
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
        <div>
            <div>
                <h3>Добавление нового поста</h3>
                <div>
                    <textarea ref={newPostElement} rows="10" style={{width: '100%'}} onChange={onPostChange} value={props.newPostText} />
                    <br/>
                    <button onClick={ addPost }>Добавить пост</button>
                </div>
            </div>
            <br/>
            <br/>
            <div className={c.posts}>
                <h3>My Posts</h3>
                {postElems}
            </div>
        </div>
    )
}
export default MyPosts