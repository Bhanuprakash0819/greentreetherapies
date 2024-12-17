import React from 'react';
import greentree from './Assets/greentree.jpg';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
    return(
        <div className='body'>
             <div className="therapies">
                <ul className="navbar-links">
                <li>
                    <Link to="/therapies">Therapies</Link>
                </li>
                <li>
                    <Link to="/photos">Photos</Link>
                </li>
                <li>
                    <Link to="/about-us">AboutUs</Link>
                </li>
            </ul>
            </div>
            <img src={greentree} alt='background' className='background-image'></img>
       
     </div>
    );
};

export default Home;
