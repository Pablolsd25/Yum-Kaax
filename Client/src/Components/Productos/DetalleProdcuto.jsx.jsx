import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, ListGroup, Card } from "react-bootstrap"; // Importa componentes de Bootstrap

const DetalleProducto = ({ productos }) => {
  const { id } = useParams();

  // Recupera la información del producto según su ID
  const producto = productos[parseInt(id)];

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Image src={producto.imagen} alt={producto.nombre} fluid />
        </Col>
        <Col md={6}>
          <ListGroup>
            <ListGroup.Item>
              <h2>{producto.nombre}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Ingredientes:</strong> {producto.ingredientes.join(", ")}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Beneficios:</strong> {producto.beneficios.join(", ")}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Presentación:</strong> {producto.presentacion}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Precio:</strong> {producto.costo}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Descripción del Producto</Card.Title>
              <Card.Text>
                Aquí puedes incluir una descripción más detallada del producto
                si es necesario.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
