import React from "react";
import "./Filter.css";

const Filter = ({ filter, setFilter }) => {
  return (
    <select
      name="region"
      id="region"
      className="filter__box"
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default Filter;
