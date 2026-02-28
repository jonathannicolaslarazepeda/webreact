import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo01.png';

const Header = () => {
    return (
        <header className="sidebar">
            <div className="animado"></div>
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>

            <p className="description">
                A Portfolio of a Comic, Ilustration, Logo and UI Design artist.
            </p>

            <nav className="menu">
                <Link to="/">Portafolio</Link>
                <Link to="/about">About me</Link>
                <Link to="/comment">Comments</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <div className="social">
                <a href="https://www.youtube.com/@HBatto" target="_blank"><i className="fa-brands fa-youtube fa-xl" style={{ color: '#40454f' }}></i></a>
                <a href="https://x.com/hbatto" target="_blank"><i className="fa-brands fa-square-twitter fa-xl" style={{ color: '#40454f' }}></i></a>
                <a href="https://www.instagram.com/hbatto" target="_blank"><i className="fa-brands fa-instagram fa-xl"
                    style={{ color: '#40454f' }}></i></a>
                <a href="https://es.linkedin.com/in/jonathan-lara-4a872166" target="_blank"><i className="fa-brands fa-square-linkedin fa-xl"
                    style={{ color: '#40454f' }}></i></a>
            </div>
        </header>
    );
};

export default Header;
