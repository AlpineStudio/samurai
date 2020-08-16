import React from 'react'
import c from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = props => {
    let friendsItems = props.state.friends.map(friend => <li>
        <img src={friend.avatar} alt="Friend photo"/>
        <p>{friend.name}</p>
    </li>)
    return (
        <div className={c.nav}>
            <nav className={c.navMenu}>
                <div className={c.item}><NavLink activeClassName={c.active} to="/profile">Profile</NavLink></div>
                <div className={c.item}><NavLink activeClassName={c.active} to="/dialogs">Messages</NavLink></div>
                <div className={c.item}><NavLink activeClassName={c.active} to="/news">News</NavLink></div>
                <div className={c.item}><NavLink activeClassName={c.active} to="/music">Music</NavLink></div>
                <div className={c.item}><NavLink activeClassName={c.active} to="/settings">Settings</NavLink></div>
            </nav>

            <ul className={c.friends}>
                {friendsItems}
            </ul>
        </div>
    )
}
export default Navbar