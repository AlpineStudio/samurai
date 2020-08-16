import React from 'react'
import c from './Post.module.css'

const Post = props => {
    return <div className={c.post}>
        <img src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/280x178_2" alt=""/>
        <h1>{ props.title }</h1>
        <p>{ props.description }</p>
        <a href="#">Get read</a> ------ <a href="#">Like</a> <h4>Likes: { props.likesCount }</h4>
    </div>
}

export default Post