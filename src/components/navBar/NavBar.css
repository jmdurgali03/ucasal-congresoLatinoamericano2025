/* Estilos generales para el navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 15px 25px;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar-logos {
  display: flex;
  align-items: center;
  gap: 10px;
}

.navbar-logo img {
  height: 55px;
  transition: transform 0.3s ease-in-out;
  margin-right: 15px; /* Espacio entre los logos */
}

.navbar-logo img:hover {
  transform: scale(1.1);
}

.navbar-toggle {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  position: relative;
}

.navbar-menu li a {
  color: #333;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s, border-bottom 0.3s;
}

.navbar-menu li a:hover {
  color: #3498db;
  border-bottom: 2px solid #3498db;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 10px 0;
  margin: 0;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li a {
  color: #333;
  padding: 10px 20px;
  display: block;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  background-color: #f0f0f0;
}

@media (max-width: 768px) {
  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: white;
    width: 100%;
    padding: 10px 0;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .navbar-menu.open {
    display: flex;
  }

  .navbar-menu li {
    text-align: center;
    padding: 10px 0;
  }

  .dropdown-menu {
    position: static; 
    box-shadow: 1px solid grey; 
    padding: 0; 
  }

  .dropdown-menu li a {
    padding: 10px 0;
  }
}