import React, {useState} from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header';
import Error from '../src/Components/Error'
import Footer from '../src/Components/Footer/Footer'
import AutentificationPage from './Components/AutentificationPage/AutentificationPage'
import SecondExp from './Components/SecondExp';
import Contact from '../src/Components/Contact/Contact'
import Details from '../src/Components/Details/Details'


import Destinations from '../src/Components/Destinations/Destinations'
import {BrowserRouter as Router, Link, Route, Routes, Navigate} from 'react-router-dom'



function App() {



  return (
        <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/error" element={<Error />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/login" element={<AutentificationPage/>} />
            <Route path="/details" element={<Details/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<SecondExp/>} />




          </Routes>
          <Footer />

        </div>
        
      
        </Router>
  );
}

export default App;
