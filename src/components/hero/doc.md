/* Main component estilos globales */

.hero {
    background-color: #f0f8ff; /* Azul claro similar al de referencia */
    padding: 80px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    min-height: 70vh;
    margin-top: 60px;
}

/* Banner */

.banner {
    width: 100%;
    max-width: 1260px;
    margin: 0 auto 20px auto;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.banner img {
    width: 100%;
    height: auto;
    display: block;
}

/* Estilos comunes para todas las secciones */
.section-content {
    max-width: 1100px;
    margin: 0 auto 50px auto;
    padding: 30px;
    background-color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
}

.section-content h2 {
    font-size: 2.8rem;
    color: #005691;
    margin-bottom: 15px;
    text-align: center;
    font-weight: bold;
}

.underline {
    width: 80px;
    height: 5px;
    background-color: #0077b6;
    margin: 0 auto 20px auto;
}

.section-content p {
    font-size: 1.1rem;
    color: #333;
    line-height: 1.8;
    margin-bottom: 15px;
    text-align: justify;
}

.section-content ul {
    list-style: none;
    padding: 0;
}

.section-content li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
    padding-left: 40px;
    position: relative;
}

.section-content .icon {
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 1.4rem;
    color: #0077b6;
    font-weight: bold;
}

/* Estilos específicos para la sección de objetivos */
.objetivos h3 {
    font-size: 1.7rem;
    color: #0077b6;
    margin-top: 25px;
    margin-bottom: 15px;
}

/* Estilos para la lista en la sección de Modalidad */
.modalidad-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.modalidad-list li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
    padding-left: 40px;
    position: relative;
}

.modalidad-list .icon {
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 1.4rem;
    color: #0077b6;
    font-weight: bold;
}

/* Info estilos */

.info {
    text-align: center;
}

.info-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.info-item {
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 150px; /* Ajusta según sea necesario */
}

.info-item h3 {
    font-size: 1.2rem;
    color: #005691;
    margin-bottom: 10px;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.info-item p {
    font-size: 1rem;
    color: #333;
    text-align: center;
    margin: 0;
}

.info-description {
    margin-top: 20px;
    font-size: 1rem;
    color: #333;
    text-align: justify;
}

/* comite */
.comite {
    text-align: left;
    width: 100%;
}

.comite-list {
    list-style: none;
    padding: 0;
    margin: 20px 0;
}

.comite-list li {
    background-color: #f0f8ff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
    color: #333;
}

/* programa-tentativo */
.programa-tentativo {
    text-align: left;
    width: 100%;
}

.programa-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.programa-item {
    background-color: #f0f8ff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.programa-item h3 {
    font-size: 1.2rem;
    color: #005691;
    margin-bottom: 10px;
}

.programa-item ul {
    list-style: none;
    padding: 0;
}

.programa-item li {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333;
}

.programa-item li strong {
    color: #005691;
}


@media (max-width: 480px) {
    .modalidad-list {
        padding-left: 20px; 
    }

    .modalidad-list li {
        flex-direction: column; 
        align-items: flex-start;
        margin-bottom: 15px; 
    }

    .modalidad-list .icon {
        width: 30px; 
        height: 30px;
        font-size: 1rem; 
        margin-bottom: 5px;
    }

    .section-content p, .section-content li {
        font-size: 1rem; 
    }
}

@media (min-width: 768px) {
    .section-content h2 {
        font-size: 3.2rem;
    }

    .section-content p, .section-content li, .objetivos h3 {
        font-size: 1.2rem;
    }
}

@media (min-width: 1024px) {
    .hero {
        padding: 100px 50px;
    }

    .section-content {
        max-width: 1200px;
    }

    .section-content h2 {
        font-size: 3.5rem;
    }

    .section-content p, .section-content li, .objetivos h3 {
        font-size: 1.3rem;
    }
}
