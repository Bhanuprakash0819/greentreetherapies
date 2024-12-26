import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <h3 className='footer-title'>Support Us</h3>
                <p className='footer-description'>
                Your support helps us create meaningful opportunities for children to grow, learn, and thrive. Follow us on Instagram, visit us at our location, or contact us directly.
                </p>
                <div className='footer-links'>
                    {/* Instagram Link */}
                    <a 
                        href='https://www.instagram.com/greentreetherapies/' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='footer-link'
                    >
                        <i className="fa fa-instagram"></i> Instagram
                    </a>
                    {/* Location Link */}
                    <a 
                        href='https://maps.app.goo.gl/Z94R1vH9dCqBokhL7' 
                        target='_blank' 
                        rel='noopener noreferrer' 
                        className='footer-link'
                    >
                        <i className="fa fa-map-marker"></i> Location
                    </a>
                    <a href="tel:+91 9963939354" className="footer-link">
                    <i className="fa fa-phone"></i> +91 9963939354 </a>
                    
                    <a href="tel:+91 7794946656" className="footer-link">
                    <i className="fa fa-phone"></i>+91 7794946656
                    </a>
                   
                </div>
            </div>
            <div className='footer-bottom'>
                <p>© 2024 Green Tree Therapies | All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
