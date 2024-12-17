import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './Components/Admin';
import Login from './Components/Login';

function App() {
    return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<Admin />} />
        </Routes>
    );
}

export default App;
