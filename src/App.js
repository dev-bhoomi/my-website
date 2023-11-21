import React from 'react'
import Layout from './Components/Layout'
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Contact';
import "./App.css"
import Portfolio from './Pages/Portfolio';
import Testimonials from './Pages/Testimonials';


const App = () => {
  return (
    <>
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="portfolio" element={<Portfolio />}/>
        <Route path="testimonials" element={<Testimonials />}/>
        <Route path="about" element={<About />}/>
      </Route>
    </Routes>
    </HashRouter>
    </>
  )
}

export default App
