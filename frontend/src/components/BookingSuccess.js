import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BookingSuccess.css'; // Link to the CSS file

const BookingSuccess = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, therapy, date, time } = location.state;

    return (
        <div className="success-container">
            <h1>Booking Successful!</h1>
            <p>Thank you, <strong>{name}</strong>, for booking a <strong>{therapy}</strong> session.</p>
            <p>Your session is scheduled for <strong>{date}</strong> at <strong>{time}</strong>.</p>
           <p> Our team will contact you as soon as possible.</p>
           <p>If you have any Queries, Please reach out to below mentioned phone numbers</p>
            <button
                className="home-button"
                onClick={() => navigate('/')}
            >
                Go to Home
            </button>
        </div>
    );
};

export default BookingSuccess;
