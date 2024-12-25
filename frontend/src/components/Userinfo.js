import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserInfo.css'; // Link the external CSS

const UserInfo = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate
    const { therapy, date, time } = location.state;

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [childName, setChildName] = useState('');
    const [childAge, setChildAge] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate contact number
        if (!/^[0-9]{10}$/.test(contact)) {
            alert('Please enter a valid 10-digit mobile number.');
            return;
        }

        // Prepare booking object
        const booking = { name, contact, childName, childAge, therapy, date, time };

        // Post the booking data
        fetch('https://green-tree-backend.onrender.com/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(booking),
        }).then(() => {
           // alert('Booking confirmed!');
            // Redirect to successful booking page
            navigate('/booking-success', { state: { name, therapy, date, time } });
        }).catch((error) => {
            alert('An error occurred while confirming your booking.');
            console.error('Error:', error);
        });
    };

    return (
        <div className="form-container">
            <form className="user-info-form" onSubmit={handleSubmit}>
                <h2>Enter Your Details</h2>
                <input
                    type="text"
                    placeholder="Parent Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="10-digit Mobile Number"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Child's Name"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Child's Age"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    min="0"
                />
                <button type="submit">Confirm Booking</button>
            </form>
        </div>
    );
};

export default UserInfo;
