import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import BookingConsultation from './Components/BookingConsultation';
import Notification from './Components/Notification/Notification';

function App() {

  return (
    <div className="App">
        <BrowserRouter>
          <Notification>
              <Routes>
                <Route path="/" element={<Landing_Page />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Sign_Up />}/>
                <Route path="/instant-consultation" element={<BookingConsultation />} />
              </Routes>
          </Notification>
        </BrowserRouter>
       
    </div>
  );
}

export default App;