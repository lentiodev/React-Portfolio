import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './routes/AboutMe'
import MyProjects from './routes/MyProjects'
import ContactMe from './routes/ContactMe'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/about' element={< AboutMe />} />
      <Route path='/projects' element={< MyProjects />} />
      <Route path='/contact' element={< ContactMe />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
