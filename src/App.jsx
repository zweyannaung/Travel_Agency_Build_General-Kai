import React from 'react'
import './index.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './Pages/Home'
import AboutPlace from './Pages/AboutPlace'
import ProjectUnfinishModal from './components/ProjectUnfinishModal'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>  
        <Route path='/Destination_Of_Myanmar/:destinationName' element={<AboutPlace/>}/>
        {/* <Route path='/Destination_Of_Myanmar/Unfinish_Project' element={<ProjectUnfinishModal/>}/> */}
      </Routes>
    </>
  )
}

export default App
