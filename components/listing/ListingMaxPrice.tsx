"use client";
import { maxOptions } from "@/data/filterOptions";
import React, { useEffect, useState } from "react";
import Select from "react-select";

// @ts-ignore
const ListingMaxPrice = ({filters, setFilters}) => {


  const [showSelect, setShowSelect] = useState(false);
  useEffect(() => {
    setShowSelect(true);
  }, []);


  const customStyles = {
    // @ts-ignore
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
            ? "#eb675312"
            : isFocused
              ? "#eb675312"
              : undefined,
      };
    },
  };
  return (
    <>
      {showSelect && (
        <Select
            value={
              filters.max_price
                ? maxOptions.find((o) => o.value === filters.max_price)
                : null
            }
            onChange={(selected) => {
              setFilters((prev) => ({
                ...prev,
                max_price: selected?.value || null,
              }));
            }}

          // defaultValue={[locationOptions[0]]}
          name="max_price"
          options={maxOptions}
          // @ts-ignore
          styles={customStyles}
          className="select-custom filterSelect"
          classNamePrefix="select"
          placeholder="Select Max Price"
          required
          isSearchable={false}
        />
      )}
    </>
  );
};

export default ListingMaxPrice;
