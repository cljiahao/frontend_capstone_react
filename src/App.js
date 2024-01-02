import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_Page from './Components/Landing_Page/Landing_Page';
import Navbar from './Components/NavBar/NavBar';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import BookingConsultation from './Components/BookingConsultation';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Navbar/>
              <Routes>
              <Route path="/" element={<Landing_Page/>}/>
              <Route path="/signup" element={<Sign_Up/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/instant-consultation" element={<BookingConsultation />} />
              </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;