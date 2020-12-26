import React from "react";
import image from "../../assets/images/main.jpg";
import { Row, Col } from "react-bootstrap";
import "./MainImage.css";

export default function MainImage() {
  return (
    <Row>
      <Col className="MainImage" md={12}>
        <img src={image} alt="" />
      </Col>
    </Row>
  );
}
