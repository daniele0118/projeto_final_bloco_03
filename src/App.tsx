import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
          <BrowserRouter>
            <Navbar />
              <div className="min-h-[80vh]">
                <Routes>
                  <Route path="/" element={<Home />} />
                </Routes>
              </div>
              <Footer />
          </BrowserRouter>
    </>
  )
}

export default App
