import React from 'react'
import c from './MyPosts.module.css'

const MyPosts = props => {
    let newPostElement = React.createRef()
    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
    return (
        <div>
            <div>
                <h3>Добавление нового поста</h3>
                <div>
                    <textarea ref={newPostElement} rows="10" style={{width: '100%'}} onChange={onPostChange} value={props.newPostText} />
                    <br/>
                    <button onClick={ onAddPost }>Добавить пост</button>
                </div>
            </div>
            <br/>
            <br/>
            <div className={c.posts}>
                <h3>My Posts</h3>
                {props.postElems}
            </div>
        </div>
    )
}
export default MyPosts