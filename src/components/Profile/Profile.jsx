import React from 'react'
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = props => {
    return <div className={c.profile}>
            <ProfileInfo />
            <MyPosts newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} dispatch={props.dispatch} />
        </div>
}

export default Profile