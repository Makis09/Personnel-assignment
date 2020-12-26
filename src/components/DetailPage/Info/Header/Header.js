import React from "react";
import { Col } from "react-bootstrap";

export default function Header({ title }) {
  return (
    <Col className="DetailPageHeader" md={12}>
      <h2>{title}</h2>
    </Col>
  );
}
