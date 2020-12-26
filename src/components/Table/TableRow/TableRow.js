import React from "react";
import { Link } from "react-router-dom";

export default function TableRow({ number, name, brand, country, image, id }) {
  return (
    <tr>
      <td data-column="#">{number}</td>
      <td data-column="Name">{name}</td>
      <td data-column="Brand">{brand}</td>
      <td data-column="Image">
        <img src={image} alt={name} />
      </td>
      <td data-column="Country" className="pizza-countries">
        {country}
      </td>
      <td data-column="Link">
        <Link
          to={{
            pathname: "/pizza",
            search: `?${name.toLowerCase().replace(/\s/g, "-")}`,
            hash: `#${id}`,
          }}
        >
          View
        </Link>
      </td>
    </tr>
  );
}
