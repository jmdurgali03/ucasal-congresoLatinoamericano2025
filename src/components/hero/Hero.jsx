import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">

            <div className='banner' id='inicio'>
                <img src="./assets/banner.png" alt="banner" />
            </div>

            <div className="introduccion section-content" id='introduccion'>
                <h2>Introducción</h2>
                <div className="underline"></div>
                <p>
                    El Segundo Encuentro Latinoamericano por el Agua surge de las experiencias de los Encuentros Colombiano – Boliviano por el Agua realizados en los últimos años. El primero fue virtual en noviembre de 2020 y el segundo híbrido en Tarija en abril de 2023, con el apoyo de la Pontificia Universidad Javeriana de Colombia y la Universidad Católica Boliviana “San Pablo”. También se destaca el Primer Encuentro Latinoamericano en septiembre de 2024, coordinado con el Instituto Javeriano del Agua y la Universidad Católica de Salta, con participación de la Universidad Católica de Paraguay y entidades gubernamentales como la OTN y el SEDEGIA.
                </p>
                <p>
                    En 2016, UCASAL organizó el V° Taller de Diseño Hidrológico, estableciendo bases para nuevas metodologías en la región. El presente encuentro se llevará a cabo en Salta, Argentina, organizado por la Facultad de Ingeniería de la Universidad Católica de Salta, con la colaboración de la Facultad de Ciencias Exactas, Físicas y Naturales de la Universidad Nacional de Córdoba.
                </p>
            </div>

            <div className="modalidad section-content" id='modularidad'>
                <h2>Modalidad del evento</h2>
                <div className="underline"></div>
                <ul className="modalidad-list">
                    <li>
                        <span className="icon">✔</span>
                        Se propone una modalidad híbrida, con expositores y participantes presenciales y conectados en línea (participantes que no se encuentren en Salta -Argentina).
                    </li>
                    <li>
                        <span className="icon">✔</span>
                        Se entregarán certificados de asistencia digitales a todos los participantes que se hayan registrado y pagado el costo correspondiente al evento.
                    </li>
                    <li>
                        <span className="icon">✔</span>
                        Los estudiantes de las universidades que organizan el evento podrán acceder a las conferencias en línea previo registro en la universidad correspondiente.
                    </li>
                </ul>
            </div>

            <div className="objetivos section-content" id='objetivos'>
                <h2>Objetivos</h2>
                <div className="underline"></div>
                <p>
                    El presente conversatorio internacional tiene la finalidad de generar conciencia en la gestión y administración de los recursos hídricos en estudiantes, profesionales e instituciones de Salta -Argentina y participantes de distintas regiones del país, Bolivia y Colombia. Servir de apoyo a las medidas necesarias para la Gestión Integrada de los Recursos Hídricos, particularmente las que se refieren a las cuencas hidrográficas, a través de experiencias, intereses, investigación y conocimiento de otras latitudes relatados por sus expertos.
                </p>
                <p>
                    Se pretende que con este primer encuentro se puedan establecer lineamientos para proyectos de investigación conjunta sobre la gestión de cuencas hidrográficas de ríos internacionales como ser la cuenca del Río Bermejo y Río Pilcomayo.
                </p>
                <h3>Entre los objetivos específicos podemos mencionar los siguientes:</h3>
                <ul className="objetivos-list">
                    <li>
                        <span className="icon">✔</span>
                        Dar a conocer proyectos relevantes que se hicieron en los últimos diez años en los países participantes, con disertaciones de expertos locales, que gestionaron y participaron en estos proyectos.
                    </li>
                    <li>
                        <span className="icon">✔</span>
                        Continuar aprendiendo de la experiencia internacional. Este objetivo es una consecuencia directa de simposios internacionales que se organizaron en las gestiones 2016 y 2017 con expertos de Texas, EE. UU. Las ramificaciones de este evento han sido de gran impacto no solo para nuestros estudiantes y académicos, sino también para profesionales y autoridades del sector público y privado.
                    </li>
                    <li>
                        <span className="icon">✔</span>
                        Compartir planes y resultados de los proyectos más significativos de investigación en recursos hídricos que ambas universidades llevan a cabo y que contribuyen a la planificación y desarrollo departamental.
                    </li>
                </ul>
            </div>

            <div className="info section-content" id='fechas'>
                <h2>Cronograma de Actividades</h2>
                <div className="underline"></div>

                <div className="info-grid">
                    <div className="info-item">
                        <h3>Universidad Católica de Salta-Envio Circular Invitación</h3>
                        <p>Marzo 20, 2025</p>
                    </div>
                    <div className="info-item">
                        <h3>Comunicación de aceptación de resúmenes</h3>
                        <p>May 31, 2025</p>
                    </div>
                    <div className="info-item">
                        <h3>Envío de resúmenes extendidos</h3>
                        <p>Jul 1, 2025</p>
                    </div>
                    <div className="info-item">
                        <h3>Comunicación de aceptación de resúmenes extendidos</h3>
                        <p>Jul 25, 2025</p>
                    </div>
                </div>
                <p className="info-description">
                    El encuentro se desarrollará en la Facultad de Ingeniería de la Universidad Católica de Salta, ubicada en el Campus Castañares, Salta, Argentina.
                </p>
            </div>

            <div className="programa-tentativo section-content" id='programas'>
                <h2>Programa tentativo</h2>
                <div className="underline"></div>

                <div className="programa-grid">
                    <div className="programa-item">
                        <h3>Primera jornada</h3>
                        <ul>
                            <li><strong>Eje temático 1</strong>: Gestión Integral de Recursos Hídricos</li>
                            <li><strong>Eje temático 2</strong>: Cambio Climático y Manejo Ecosistémico de Cuencas</li>
                        </ul>
                    </div>
                    <div className="programa-item">
                        <h3>Segunda jornada</h3>
                        <ul>
                            <li><strong>Eje temático 3</strong>: Hidrogeología y Aguas Subterráneas</li>
                            <li><strong>Mesas de trabajo</strong></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="comite section-content" id='comite'>
                <h2>Comité organizador</h2>
                <div className="underline"></div>
                <ul className="comite-list">
                    <li>Ing. Fernando Albarracín - UCASAL</li>
                    <li>Esp. Ing. M. Cecilia Botelli - UCASAL</li>
                    <li>Ing. Lorena Sanchez Barrero - Universidad Católica Boliviana “San Pablo” de Sede Tarija</li>
                    <li>Andrés Eduardo Torres Abello - Instituto Javeriano del Agua - Pontificia Universidad Javeriana, Colombia</li>
                    <li>Angela Margarita Moncaleano Niño - Instituto Javeriano del Agua - Pontificia Universidad Javeriana, Colombia</li>
                    <li>Mg. Ing. Guillermina Nievas - UCASAL</li>
                    <li>Mg. Ing. Juan Francisco Linares - UCASAL</li>
                    <li>TPN. Lucía Guillén - UCASAL</li>
                </ul>
            </div>

        </section>
    )
}

export default Hero