import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p>Web Copyright © 2025. All rights reserved.</p>
                <p>Privacy Policy and Cookies | Terms of Sale</p>
                <div className="footer-links">
                    <a href="https://github.com/hbatto" target="_blank" rel="noopener noreferrer">My Github</a>
                    <span> | </span>
                    <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">Figma Inspiration</a>
                </div>
                <div className="footer-social">
                    <i className="fa-brands fa-youtube" style={{ margin: '0 5px' }}></i>
                    <i className="fa-brands fa-twitter" style={{ margin: '0 5px' }}></i>
                    <i className="fa-brands fa-instagram" style={{ margin: '0 5px' }}></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
