import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';
import greentree from './Assets/greentree.jpg';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            // Clear error and navigate to admin dashboard
            setError('');
            navigate('/admin/dashboard'); // Navigate to admin dashboard
        } else {
            setError('Invalid username or password');
        }
        try {
            const response = await fetch('http://localhost:5000/api/admin/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                alert(data.message);
                navigate('/admin/dashboard'); // Navigate to admin dashboard
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Failed to login');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={greentree} alt="Greentree" className="greentree-img" />
                <h2>Admin Login</h2>
                <form onSubmit={handleLogin} className="login-form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
