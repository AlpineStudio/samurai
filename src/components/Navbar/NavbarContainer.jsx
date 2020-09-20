import React from 'react'
import StoreContext from '../../StoreContext'
import Navbar from './Navbar'

const NavbarContainer = props => (
    <StoreContext.Consumer>{store => (
        <Navbar state={store.getState().sidebar} />
    )}</StoreContext.Consumer>
)
export default NavbarContainer