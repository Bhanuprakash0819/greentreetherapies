import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';
import logo from './Assets/greentree.jpg'; // Add your logo image here

const Admin = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/bookings', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (!response.ok) throw new Error('Failed to fetch bookings');
            const data = await response.json();
            setBookings(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/bookings/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            if (!response.ok) throw new Error('Failed to delete booking');
            alert('Booking deleted successfully');
            fetchBookings(); // Refresh bookings after deletion
        } catch (err) {
            alert(err.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token
        alert('Logged out successfully');
        navigate('/'); // Redirect to login page
    };

    return (
        <div className="admin-container">
            <header className="admin-header">
                <div className="logo">
                    <img src={logo} alt="Greentree Logo" />
                    <h1>Greentree</h1>
                </div>
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </header>
            {loading && <p>Loading bookings...</p>}
            {error && <p className="error">{error}</p>}
            {!loading && !error && (
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Child's Name</th>
                            <th>Child's Age</th>
                            <th>Contact</th>
                            <th>Therapy</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <td>{booking.name}</td>
                                <td>{booking.childName}</td>
                                <td>{booking.childAge}</td>
                                <td>{booking.contact}</td>
                                <td>{booking.therapy}</td>
                                <td>{booking.date}</td>
                                <td>{booking.time}</td>
                                <td>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(booking._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Admin;
