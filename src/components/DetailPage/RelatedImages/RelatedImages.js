import React from "react";
import IngredientAndAllergenImg from "./IngredientAndAllergenImg/IngredientAndAllergenImg";
import { Col, Row } from "react-bootstrap";
import "./RelatedImages.css";

export default function RelatedImages(props) {
  return (
    <Col className="RelatedImages" md={6}>
      <h3>Related images</h3>
      <Row>
        <IngredientAndAllergenImg
          ingredientImage={props.ingredientImage}
          nutritionImage={props.nutritionImage}
        />
      </Row>
    </Col>
  );
}
