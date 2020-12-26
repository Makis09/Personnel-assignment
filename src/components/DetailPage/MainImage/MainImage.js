import React from "react";
import { Col } from "react-bootstrap";
import "./MainImage.css";

export default function MainImage({ src, alt }) {
  return (
    <Col className="MainImage" md={4}>
      <img
        style={{ borderRadius: "15px", maxWidth: "100%" }}
        src={src}
        alt={alt}
      />
    </Col>
  );
}
