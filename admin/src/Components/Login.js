import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css'; // Add your CSS styling

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        // Mock authentication (Replace this with real API call to validate login)
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
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
