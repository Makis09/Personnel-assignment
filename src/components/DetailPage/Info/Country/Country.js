import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Country({ countries }) {
  return (
    <Col className="Country" md={12}>
      <FontAwesomeIcon icon={"flag"} />
      <span className="caption">
        {" "}
        {countries.includes(",") ? "Countries: " : "Country: "}
      </span>
      <span className="description">{countries}</span>
    </Col>
  );
}
