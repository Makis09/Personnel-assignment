import React from "react";

export default function SingleFilter(props) {
  const { option, filtersChanged, activeFilters } = props;

  let style = {
    backgroundColor: "#ff7474",
  };

  if (activeFilters && activeFilters.includes(option)) {
    style = {
      backgroundColor: " #87d851",
    };
  }

  return (
    <div className="SingleFilter">
      <input
        type="checkbox"
        name={option}
        id={option}
        checked={activeFilters && activeFilters.includes(option) ? true : false}
        onChange={(e) => filtersChanged(option, e.target.checked)}
      />
      <label style={style} htmlFor={option}>
        {option}
      </label>
    </div>
  );
}
