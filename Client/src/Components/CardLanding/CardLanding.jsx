import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../CardLanding/CardLanding.scss";

const CardLanding = () => {
  return (
    <div className="card-container">
      <Card style={{ width: "25rem" }} variant="color3">
        <Card.Header className="text-center">Bienvenidos</Card.Header>
        <Card.Body className="text-center">
          <Card.Title>Disfruta lo natural</Card.Title>
          <Card.Text>
            Yum Kaax es le cigarrillo herbarl perfecto. Somos una marca 100%
            mexicana;elaboramos los mejores cigarrillos herbales libres de
            tabaco. Nuestros ingrendientes son cuidadosamente seleccionados.
            <br />
            <br />
            Disfruta nuestra gama de saboreds y los beneficios que contienen.
            Disponible en tiendas y online, para que puedas comprar tus
          </Card.Text>
          <Button variant="success">Contáctanos</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardLanding;
