import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../components/Carousel/Carousel";
import Filters from "../components/Filters/Filters";
import Pagination from "../components/Pagination/Pagination";
import Spinner from "../components/Spinner/Spinner";
import MyTable from "../components/Table/MyTable";

export default function Homepage(props) {
  return (
    <>
      <Container fluid>
        <Carousel />
      </Container>
      <Container>
        <Filters
          filtersChanged={props.filtersChanged}
          activeFilters={props.activeFilters}
        />
        {!props.isLoading && props.data ? (
          <>
            <MyTable
              data={props.data.products.slice(
                props.displayedItems,
                props.displayedItems + props.pagination.itemsPerPage
              )}
              displayedItems={props.displayedItems}
            />
            <Pagination pagination={props.pagination} setPage={props.setPage} />
          </>
        ) : (
          <Spinner />
        )}
      </Container>
    </>
  );
}
