import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import "../Productos/productos.css";

const Productos = () => {
  // Array de imágenes (puedes cambiar las URL de las imágenes)
  const imagenes = [img1, img2, img3, img3, img3, img3];

  return (
    <Container className="container-productos">
      <Row>
        {imagenes.map((imagen, index) => (
          <Col sm={4} key={index} className="col-imagen">
            <Link to={`/producto/${index}`}>
              {" "}
              {/* Enlace al detalle del producto */}
              <img
                src={imagen}
                alt={`Imagen ${index}`}
                className="imagen-azulejo"
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
