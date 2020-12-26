import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Brand({ brands }) {
  return (
    <Col className="Brand" md={12}>
      <FontAwesomeIcon icon={"copyright"} />{" "}
      <span className="caption"> Brand: </span>
      <span className="description">{brands}</span>
    </Col>
  );
}
