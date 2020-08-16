import React from 'react'
import c from './Header.module.css'

const Header = () => {
    return <header className={c.header}>
                <img className={c.header__image} src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg" alt="header foo"/>
            </header>
}

export default Header