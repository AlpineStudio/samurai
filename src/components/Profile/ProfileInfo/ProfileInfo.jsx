import React from 'react'
import c from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
            <div>
                <img className={c.profile__image} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="Main tag " />
                <div className={c.descriptionBlock}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid animi, aperiam architecto blanditiis, dicta doloribus error fuga laborum, maiores nihil nulla odio possimus qui quo repudiandae saepe sunt ut?
                </div>
            </div>
        )
}
export default ProfileInfo