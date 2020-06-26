import React from 'react'
import './App.css'
import {Router} from '@reach/router'
// Layouts
// Pages
import Home from './pages/Home'
// import SignIn from './pages/SignIn'
import Boards from './pages/Boards'
import BoardId from './pages/BoardId'
import BoardLayout from './layout/BoardLayout'
import BoardProvider from './provider/BoardProvider'


function App() {

  return (
    <Router>
      <Home path="/" />

      <BoardProvider path='/'>
        <BoardLayout path="boards" >
          <Boards path="/" />
          <BoardId path="b/:boardId/:boardName" />
        </BoardLayout>
      </BoardProvider>
    </Router >
  )
}

export default App

