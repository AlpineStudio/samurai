import React from 'react'
import './App.css'

import Header from './components/Header/Header'
import NavbarContainer from './components/Navbar/NavbarContainer'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import { BrowserRouter, Route } from 'react-router-dom'

const App = props => {
    return (
            <div className="App">
               <Header />
               <NavbarContainer />
               <div className="app-content">
                   <Route path="/" exact render={() => (<h1>This is the main page</h1>)} />
                   <Route path="/profile" render={() => <Profile />} />
                   <Route path="/dialogs" render={() => <DialogsContainer />} />
                   <Route path="/news" render={News} />
                   <Route path="/music" render={Music} />
                   <Route path="/settings" render={Settings} />
               </div>
            </div>
    )
}

export default App