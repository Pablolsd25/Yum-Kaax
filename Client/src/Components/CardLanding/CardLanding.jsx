import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../CardLanding/CardLanding.scss";

const CardLanding = () => {
  return (
    <div className="card-container">
      <Card style={{ width: "30rem" }} className="bg-secondary color1">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="success">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardLanding;
