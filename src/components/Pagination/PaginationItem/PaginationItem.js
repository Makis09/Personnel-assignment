import React from "react";

export default function PaginationItem({ num, activePage, setPage }) {
  return (
    <li className="PaginationItem">
      <span
        onClick={() => setPage(num)}
        className={`${activePage === num ? "activePage" : ""}`}
      >
        {num}
      </span>
    </li>
  );
}
