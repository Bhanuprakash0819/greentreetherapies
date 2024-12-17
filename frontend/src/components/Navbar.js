import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import greentree from './Assets/greentree.jpg';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-icons'>
                <img src={greentree} alt='logo'></img>
                <h1>GreenTree</h1>    
            </div>
            <div className="button-container">
  <Link to="/therapies" className="book-appointment">Book Appointment</Link>
  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon instagram-icon"></a>
  <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" className="icon whatsapp-icon"></a>
</div>

        </nav>
    );
};

export default Navbar;
