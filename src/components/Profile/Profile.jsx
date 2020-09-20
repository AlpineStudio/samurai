import React from 'react'
import c from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = props => {
    return <div className={c.profile}>
            <ProfileInfo />
            {/* <MyPostsContainer newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} dispatch={props.dispatch} /> */}
            <MyPostsContainer />
        </div>
}

export default Profile