import React from "react";
import { Row, Col } from "react-bootstrap";
import Allergens from "./Allergens/Allergens";
import Brand from "./Brand/Brand";
import Country from "./Country/Country";
import Header from "./Header/Header";
import Ingredients from "./Ingredients/Ingredients";
import "./Info.css";

export default function Info(props) {
  return (
    <Col className="Info" md={8}>
      <Row>
        <Header title={props.title} />
        <Ingredients ingredients={props.ingredients} />
        <Allergens allergens={props.allergens} />
        <Country countries={props.countries} />
        <Brand brands={props.brands} />
      </Row>
    </Col>
  );
}
