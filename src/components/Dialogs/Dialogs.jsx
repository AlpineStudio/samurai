import React from 'react'
import c from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import {addMessageActionCreator, updateDialogMessageActionCreator} from "../../redux/dialogsReducer"


const DialogItem = props => {
    let path = `/dialogs/${props.userId}`
    return (
        <div className={c.dialog}><NavLink activeClassName={c.active} to={path}>{props.name}</NavLink></div>
    )
}

const Message = props => {
    return (
        <div className={c.message}>{props.text}</div>
    )
}

const Dialogs = props => {
    let dialogsElements = props.state.dialogs.map(d => <DialogItem userId={d.userId} name={d.name} />)
    let msgElems = props.state.messages.map(m => <Message text={m.text} />)

    const onMessageChange = e => {
        const text = e.target.value
        props.dispatch(updateDialogMessageActionCreator(text))
    }
    const onMessageSend = () => {
        props.dispatch(addMessageActionCreator())
    }
    return (
        <div className={c.dialogs}>
            <div className={c['dialogs-item']}>{dialogsElements}</div>

            <div className={c['dialogs-messages']}>
                <div>{msgElems}</div>
                <div>
                    <textarea cols="30" rows="10" placeholder="Your message" onChange={onMessageChange} value={props.state.newMessageText} />
                    <button onClick={onMessageSend}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs