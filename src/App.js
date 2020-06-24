import React from 'react'
import './App.css'
import {Router} from '@reach/router'
// Layouts
import MainLayout from './layout/MainLayout'
// Pages
import Home from './pages/Home'
// import SignIn from './pages/SignIn'
import Project from './pages/Project'
import ProjectId from './pages/Project/ProjectId'

function App() {

  return (
    <Router>
      <MainLayout path='/'>
        <Home path='/' />
        {/* <SignIn path='signin' /> */}
        <Project path='project' />
        <ProjectId path=':projectId/:projectName' />
      </MainLayout>
    </Router>
  )
}

export default App
