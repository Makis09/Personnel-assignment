import React from "react";
import { Col } from "react-bootstrap";

export default function IngredientAndAllergenImg({
  ingredientImage,
  nutritionImage,
}) {
  return (
    <>
      <Col md={12}>
        <h5>Ingredients</h5>
        <img src={ingredientImage} alt="ingredients" />
      </Col>
      <Col md={12}>
        <h5>Nutritions</h5>
        <img src={nutritionImage} alt="nutritions" />
      </Col>
    </>
  );
}
