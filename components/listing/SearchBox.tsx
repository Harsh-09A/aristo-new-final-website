import React from "react";

const SearchBox = ({ filters, setFilters }) => {
  return (
    <>
      <div className="search_area">
        <input
          type="text"
          className="form-control"
          placeholder="What are you looking for?"
          value={filters.search || ""}
          onChange={(e) =>
            setFilters((prev) => ({
              ...prev,
              search: e.target.value,
            }))
          }
        />
        <label>
          <span className="flaticon-search" />
        </label>
      </div>
    </>
  );
};

export default SearchBox;
