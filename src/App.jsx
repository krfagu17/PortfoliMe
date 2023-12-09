import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from './Test';
import Kumar from './Kumar';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Project' element={<Projects/>} />
        <Route path='Kumar' element={<Kumar/>} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
