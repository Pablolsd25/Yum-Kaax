import React from "react";
import Carrusel from "../Carrusel/Carrusel";
import CardLanding from "../CardLanding/CardLanding";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Langind = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Carrusel />
        </Col>
        <Col>
          <CardLanding />
        </Col>
      </Row>
    </Container>
  );
};

export default Langind;
