import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { Row, Col } from "react-bootstrap";
import "./Carousel.css";
import image1 from "../../assets/images/img1.jpg";
import image2 from "../../assets/images/img2.jpg";
import image3 from "../../assets/images/img3.png";
import image4 from "../../assets/images/img4.jpeg";
import image5 from "../../assets/images/img5.jpg";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    { id: 0, url: image1 },
    { id: 1, url: image2 },
    { id: 2, url: image3 },
    { id: 3, url: image4 },
    { id: 4, url: image5 },
  ];

  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  useEffect(() => {
    const imageSlide = setInterval(
      () => setIndex((state) => (state + 1) % slides.length),
      7000
    );
    return () => clearInterval(imageSlide);
  }, [slides.length]);

  return (
    <Row>
      <Col md={12} className="carousel">
        {transitions.map(({ item, props, key }) => {
          return (
            <animated.div
              key={key}
              className="bg"
              style={{
                ...props,
                backgroundImage: `url("${item.url}")`,
              }}
            />
          );
        })}
      </Col>
      <Col md={12} className="indicators">
        {slides.map((slide) => {
          return (
            <span
              key={slide.id}
              onClick={() => setIndex(slide.id)}
              style={{
                backgroundColor: slide.id === index && "rgb(252, 92, 94)",
              }}
            ></span>
          );
        })}
      </Col>
    </Row>
  );
}
