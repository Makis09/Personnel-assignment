import React from "react";
import "./Pagination.css";
import { Row, Col } from "react-bootstrap";
import PaginationItem from "./PaginationItem/PaginationItem";

export default function pagination({ pagination, setPage }) {
  const { activePage, data, itemsPerPage } = pagination;

  const numberOfPages = Math.ceil(data.products.length / itemsPerPage);

  const renderPageNumbers = (num) => {
    const pageItems = [];
    for (let index = 1; index <= num; index++) {
      pageItems.push(
        <PaginationItem
          key={index}
          num={index}
          activePage={activePage}
          setPage={setPage}
        />
      );
    }
    return pageItems;
  };
  return (
    <Row>
      <Col className="Pagination" md={12}>
        <ul>
          {data.products.length ? (
            renderPageNumbers(numberOfPages)
          ) : (
            <span></span>
          )}
        </ul>
      </Col>
    </Row>
  );
}
