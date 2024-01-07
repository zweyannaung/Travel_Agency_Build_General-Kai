import React from 'react'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>  
      </Routes>
    </>
  )
}

export default App
