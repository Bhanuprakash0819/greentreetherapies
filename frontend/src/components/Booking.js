import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default calendar styles
import './Booking.css'; // Import custom styles for the component

const Booking = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const therapy = location.state?.therapy;

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [bookedSlots, setBookedSlots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch booked slots from the backend
    useEffect(() => {
        const fetchBookedSlots = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/bookings');
                const data = await response.json();
                setBookedSlots(data);
            } catch (error) {
                console.error('Error fetching booked slots:', error);
            }
        };

        fetchBookedSlots();
    }, []);

    // Handle date change from the calendar
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    // Handle slot selection and navigate to UserInfo page
    const handleSlotSelect = async (slot) => {
        // Mark slot as unavailable immediately (optimistic update)
        setBookedSlots((prev) => [...prev, { date: selectedDate.toISOString().split('T')[0], time: slot }]);

        navigate('/userinfo', { state: { therapy, date: selectedDate.toISOString().split('T')[0], time: slot } });
    };

    // Available slots logic
    const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
    const availableSlots = ['9:15 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'].filter(
        (slot) =>
            !bookedSlots.some(
                (booking) => booking.date === formattedSelectedDate && booking.time === slot
            )
    );

    return (
        <div className="booking-container">
            <h2>Select Date and Time for {therapy}</h2>
            <div className="calendar-container">
                <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    minDate={new Date()} // Disable past dates
                />
            </div>
            <div className="slots-container">
                {isLoading && <p>Loading slots...</p>}
                {!isLoading && availableSlots.length === 0 && (
                    <p className="no-slots-message">No available slots for the selected date.</p>
                )}
                {!isLoading &&
                    availableSlots.map((slot, index) => (
                        <button key={index} onClick={() => handleSlotSelect(slot)}>
                            {slot}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default Booking;
