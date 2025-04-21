import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className='navbar-logos'>
                <div className="navbar-logo">
                    <img src="./assets/ucasal-logo.jpg" alt="logo ucasal" />
                </div>
                <div className="navbar-logo">
                    <img src="./assets/bolivia-logo.png" alt="logo encuentro" />
                </div>
            </div>

            <button className="navbar-toggle" onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </button>
            <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
                <li className="dropdown">
                    <a href="#inicio">Encuentro</a>
                    <ul className="dropdown-menu">
                        <li><a href="#introduccion">Introduccion</a></li>
                        <li><a href="#modularidad">Modalidad</a></li>
                        <li><a href="./assets/circular1-2025.pdf" target="_blank">Circular 1</a></li>
                        <li><a href="./assets/circular2-2025.pdf" target="_blank">Circular 2</a></li>
                    </ul>
                </li>
                <li><a href="./assets/formato-resumen.pdf" target="_blank">Formato Resumen</a></li>
                <li><a href="#objetivos">Objetivos</a></li>
                <li><a href="#fechas">Fechas importantes</a></li>
                <li><a href="#programas">Programa</a></li>
                <li><a href="#comite">Comité</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
