import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (isOpen) setIsSubMenuOpen(false);
    };

    const handleSubMenuToggle = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsOpen(false);
        setIsSubMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logos">
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
                    <button onClick={handleSubMenuToggle} className="dropdown-toggle">
                        Encuentro
                    </button>
                    <ul className={`dropdown-menu ${isSubMenuOpen ? 'show' : ''}`}>
                        <li><a href="#introduccion" onClick={handleCloseMenu}>Introducción</a></li>
                        <li><a href="#modularidad" onClick={handleCloseMenu}>Modalidad</a></li>
                        <li><a href="./assets/circular1-2025.pdf" target="_blank" onClick={handleCloseMenu}>Circular 1</a></li>
                        <li><a href="./assets/circular2-2025.pdf" target="_blank" onClick={handleCloseMenu}>Circular 2</a></li>
                    </ul>
                </li>
                <li><a href="./assets/formato-resumen.pdf" target="_blank" onClick={handleCloseMenu}>Formato Resumen</a></li>
                <li><a href="#objetivos" onClick={handleCloseMenu}>Objetivos</a></li>
                <li><a href="#fechas" onClick={handleCloseMenu}>Fechas importantes</a></li>
                <li><a href="#programas" onClick={handleCloseMenu}>Programa</a></li>
                <li><a href="#comite" onClick={handleCloseMenu}>Comité</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;
