import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                
                <div className="footer-links">
                    <p>Web Copyright © 2025. All rights reserved. <Link to="/privacy">Privacy Policy and Cookies</Link> | <a href="https://github.com/jonathannicolaslarazepeda/webreact/tree/main/src" target="_blank" rel="noopener noreferrer">My Github</a></p>
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
