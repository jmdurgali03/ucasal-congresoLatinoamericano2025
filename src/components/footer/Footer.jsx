import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-section">
                <h3>Lugar</h3>
                <p><strong>Facultad de Ingeniería, Universidad Católica de Salta</strong></p>
                <p><strong>Dirección:</strong> <a href="https://www.google.com/maps/search/ucasal/@-24.7408014,-65.3954423,17z?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D" target="_blank">Campo Castañares [A4400EDD], Salta</a></p>
                <p><strong>Teléfono:</strong> (0387) 426-8536/39</p>
                <p><strong>Horario:</strong> lunes a viernes de 10 a 20 hs.</p>
            </div>

            <div className="footer-section">
                <h3>Contacto</h3>
                <p>Para informes e inscripción contactar con: <a href="mailto:2edelagua@ucasal.edu.ar">2edelagua@ucasal.edu.ar</a></p>
                <p><strong>Correo adicional:</strong> <a href="extension.ing@ucasal.edu.ar">extension.ing@ucasal.edu.ar</a></p>
            </div>

            <div className="footer-section">
                <h3>Para mayor información</h3>
                <p><a href="http://tja.ucb.edu.bo/encuentrodelagua/" target='_blank'>Primer Encuentro Latinoamericano por el Agua</a></p>
                <p>Correo:<a href="gabinetehidraulica@ucasal.edu.ar"> Esp. Ing. M. Cecilia Botelli </a></p>
                <div className='btn-container'>
                    <a href="./assets/circular1-2025.pdf" target="_blank" rel="noopener noreferrer" className="circular-btn">Circular 1 2025</a>
                    <a href="./assets/circular2-2025.pdf" target="_blank" rel="noopener noreferrer" className="circular-btn">Circular 2 2025</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer