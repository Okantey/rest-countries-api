import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ search, setSearch }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search__form">
      <label htmlFor="search">Search</label>
      <div className="search__box">
        <SearchIcon />
        <input
          type="text"
          role="searchbox"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a country...."
        />
      </div>
    </form>
  );
};

export default Search;
