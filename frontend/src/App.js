import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Therapies from './components/Therapies';
import Booking from './components/Booking';
import UserInfo from './components/Userinfo';
import Footer from './components/Footer';
import Therapy from './components/Therapy';
import Photos from './components/Photos';
import BookingSuccess from './components/BookingSuccess';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/therapy" element={<Therapy />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/therapies" element={<Therapies />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/userinfo" element={<UserInfo />} />
                <Route path="/booking-success" element={<BookingSuccess />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

