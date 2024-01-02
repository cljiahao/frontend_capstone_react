import React, { useEffect, useState } from 'react';
import Navbar from '../NavBar/NavBar';
import "./Notification.css";

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }
  }, []);
  return (
    <div>
      <Navbar ></Navbar>
      {children}
      {isLoggedIn && (
        <>
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <p><strong>Doctor: </strong> Dr. Jiao Yang</p>
                <p><strong>Specialty: </strong> Dentist</p>
                <p><strong>Name: </strong> Test</p>
                <p><strong>Phone Number: </strong> 1234567890</p>
                <p><strong>Date: </strong> 2024-02-09</p>
                <p><strong>Time: </strong> 17:20 PM</p>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notification;