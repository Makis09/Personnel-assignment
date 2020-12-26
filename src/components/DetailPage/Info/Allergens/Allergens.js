import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Allergens({ allergens }) {
  const allergensString = allergens.replace(/en:/gi, " ");

  return (
    <Col className="Allergens" md={12}>
      <FontAwesomeIcon icon={"heartbeat"} />
      <span className="caption">Allergens:</span>
      <span className="description">{allergensString}</span>
    </Col>
  );
}
