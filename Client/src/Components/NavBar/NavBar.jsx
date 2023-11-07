import * as React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import Logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="custom-navbar">
      <Container className="custom-navbar">
        <Navbar bg="succes" variant="dark">
          <img src={Logo} alt="logo" width="50%" height="50%" />
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
            <Link to="/pedidos" className="nav-link">
              Pedidos
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
