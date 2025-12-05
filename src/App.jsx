import { useState } from 'react'
import './App.css'
import './GlobalStyle.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Servics from './Servics';

function App() {

  return (
    
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/servics' element={<Servics/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
