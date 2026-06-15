"use client";
import { minOptions } from "@/data/filterOptions";
import React, { useEffect, useState } from "react";
import Select from "react-select";

// @ts-ignore
const ListingMinPrice = ({filters, setFilters}) => {


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
              filters.min_price
                ? minOptions.find((o) => o.value === filters.min_price)
                : null
            }
            onChange={(selected) => {
              setFilters((prev) => ({
                ...prev,
                min_price: selected?.value || null,
              }));
            }}

          // defaultValue={[locationOptions[0]]}
          name="min_price"
          options={minOptions}
          // @ts-ignore
          styles={customStyles}
          className="select-custom filterSelect"
          classNamePrefix="select"
          placeholder="Select Min Price"
          required
          isSearchable={false}
        />
      )}
    </>
  );
};

export default ListingMinPrice;
