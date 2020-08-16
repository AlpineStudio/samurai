import React from 'react'
import './App.css'

import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'

import { BrowserRouter, Route } from 'react-router-dom'

const App = props => {
    return (
            <div className="App">
               <Header />
               <Navbar state={props.state.sidebar} />
               <div className="app-content">
                   <Route path="/profile" render={
                       () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />
                   } />
                   <Route path="/dialogs" render={
                       () => <Dialogs dispatch={props.dispatch} dialogsPage={props.state.dialogsPage} />
                   } />
                   <Route path="/news" render={News} />
                   <Route path="/music" render={Music} />
                   <Route path="/settings" render={Settings} />
               </div>
            </div>
    )
}

export default App