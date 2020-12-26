import React from "react";
import { Col } from "react-bootstrap";

export default function Ingredients({ ingredients }) {
  return (
    <Col className="Ingredients" md={12}>
      <ul>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient.id.split(":")[1]}</li>
        ))}
      </ul>
    </Col>
  );
}
