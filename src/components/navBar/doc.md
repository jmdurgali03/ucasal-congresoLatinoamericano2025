body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  padding: 15px 25px;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar-logo img {
  height: 55px;
  transition: transform 0.3s ease-in-out;
}

.navbar-logo img:hover {
  transform: scale(1.1);
}

.navbar-toggle {
  display: none;
  font-size: 24px;
  background: none;
  border: none;
  color: #ecf0f1;
  cursor: pointer;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.navbar-menu li a {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.navbar-menu li a:hover {
  color: #3498db;
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
    background-color: #2c3e50;
    width: 100%;
    padding: 10px 0;
  }

  .navbar-menu.open {
    display: flex;
  }

  .navbar-menu li {
    text-align: center;
    padding: 10px 0;
  }
}