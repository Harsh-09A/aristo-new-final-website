import { PROPERTY_CATEGORIES } from "@/data/filterOptions";
import React from "react";

const ListingCategory = ({ filters, setFilters }) => {
  const options = PROPERTY_CATEGORIES;
  return (
    <>
      {options.map((option) => (
        <div
          className="form-check d-flex align-items-center mb10"
          key={option.value}
        >
          <input
            className="form-check-input"
            type="radio"
            name="category"
            id={option.value}
            checked={filters.category === option.value}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                category: option.value,

                // IMPORTANT
                type: null,
              }))
            }
          />

          <label className="form-check-label" htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </>
  );
};

export default ListingCategory;
