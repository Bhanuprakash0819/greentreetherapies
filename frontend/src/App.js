import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Therapies from './components/Therapies';
import Booking from './components/Booking';
import UserInfo from './components/Userinfo';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/therapies" element={<Therapies />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/userinfo" element={<UserInfo />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;

