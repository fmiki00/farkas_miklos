import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './page/Home'
import AboutPage from './page/About'
import ContactPage from './page/Contact'
import ServicePage from './page/Service'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Service" element={<ServicePage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
