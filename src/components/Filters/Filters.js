import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import "./Filters.css";
import SingleFilter from "./SingleFilter/SingleFilter";

export default function Filters({ filtersChanged, activeFilters }) {
  const [mobileFiltersExpanded, setMobileFiltersExpanded] = useState(false);
  const filterOptions = [
    "mozzarella",
    "edam",
    "parmesan",
    "cheese",
    "ham",
    "salami",
    "pork-meat",
    "bacon",
    "tuna",
    "artichoke",
    "mushroom",
    "spinach",
  ];

  return (
    <Row>
      <Col
        className={`Filters ${
          mobileFiltersExpanded ? "mobileFilterExpanded" : ""
        }`}
        md={12}
      >
        <h6
          className="closeFilters"
          onClick={() => setMobileFiltersExpanded(false)}
        >
          Close filters
        </h6>

        <h6
          className="showFilters"
          onClick={() => setMobileFiltersExpanded(true)}
        >
          Search by ingredient
        </h6>

        <div className="FiltersHolder">
          {filterOptions.map((option) => (
            <SingleFilter
              key={option}
              option={option}
              filtersChanged={filtersChanged}
              activeFilters={activeFilters}
            />
          ))}
        </div>
      </Col>
    </Row>
  );
}
