import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <h3 className='footer-title'>Support Us</h3>
                <p className='footer-description'>
                    Join us in our mission to bring holistic therapies and support to the community. Follow us on Instagram and visit us at our location.
                </p>
                <div className='footer-links'>
                    {/* Instagram Link */}
                    <a 
                        href='https://www.instagram.com' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='footer-link'
                    >
                        <i className="fa fa-instagram"></i> Instagram
                    </a>
                    {/* Location Link */}
                    <a 
                        href='https://maps.google.com' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='footer-link'
                    >
                        <i className="fa fa-map-marker"></i> Location
                    </a>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>© 2024 Greentree Therapies | All rights reserved.</p>
                <p>Designed with ❤️ by Greentree Team.</p>
            </div>
        </footer>
    );
};

export default Footer;
