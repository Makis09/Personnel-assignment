import { Row, Col } from "react-bootstrap";
import TableRow from "./TableRow/TableRow";
import "./MyTable.css";

export default function MyTable({ data, displayedItems }) {
  return (
    <Row>
      <Col md={12}>
        {data.length ? (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Brand</th>
                <th>Image</th>
                <th>Country</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {data.map((pizza, index) => {
                return (
                  <TableRow
                    key={pizza.id}
                    number={index + 1 + displayedItems}
                    page={data.page}
                    id={pizza.id}
                    name={pizza.product_name}
                    brand={pizza.brands}
                    image={pizza.image_front_thumb_url}
                    country={pizza.countries}
                  />
                );
              })}
            </tbody>
          </table>
        ) : (
          <h3 style={{ textAlign: "center", marginTop: "50px" }}>
            No pizza match your criteria, try different combination
          </h3>
        )}
      </Col>
    </Row>
  );
}
