import React from 'react'
import c from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import {addMessageActionCreator, updateDialogMessageActionCreator} from "../../redux/dialogsReducer"
import Dialogs from './Dialogs'
import StoreContext from '../../StoreContext'

const DialogsContainer = props => {
    return <StoreContext.Consumer>{store => {
        let state = store.getState().dialogsPage

        const updateNewMessageText = text => {
            props.store.dispatch(updateDialogMessageActionCreator(text))
        }
        const addNewMessage = () => {
            props.store.dispatch(addMessageActionCreator())
        }

        return <Dialogs updateNewMessageText={updateNewMessageText}
        addNewMessage={addNewMessage}
        state={state} />
    }}</StoreContext.Consumer>
}

export default DialogsContainer