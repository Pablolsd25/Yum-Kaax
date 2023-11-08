import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../Pedidos/Pedidos.css";

const Pedidos = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890"); // Reemplaza "1234567890" con el número de WhatsApp deseado
  };

  return (
    <Container className="py-4 px-50">
      <h2 className="text-center">Pedidos</h2>
      <Row>
        <Col xs={12} md={6} className="text-center">
          <div className="centrado">
            <p>
              ¿Tienes alguna pregunta o deseas hacer un pedido? ¡Estamos aquí
              para ayudarte! Contáctanos a través de WhatsApp y te responderemos
              lo antes posible.
            </p>
            <Button onClick={handleWhatsAppClick} variant="success">
              Contactar por WhatsApp
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <div className="centro-form">
            <Form>
              <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Escribe tu nombre" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Escribe tu correo electrónico"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Detalles del Pedido</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Escribe los detalles de tu pedido"
                />
              </Form.Group>
              <Button type="submit" variant="success" className="espacio-btn">
                Enviar Pedido
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Pedidos;
