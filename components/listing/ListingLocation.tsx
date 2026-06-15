"use client";
import { locationOptions } from "@/data/filterOptions";
import React, { useEffect, useState } from "react";
import Select from "react-select";

// @ts-ignore
const ListingLocation = ({filters, setFilters}) => {


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
              filters.location
                ? locationOptions.find((o) => o.value === filters.location)
                : null
            }
            onChange={(selected) => {
              setFilters((prev) => ({
                ...prev,
                location: selected?.value || null,
              }));
            }}

          // defaultValue={[locationOptions[0]]}
          name="location"
          options={locationOptions}
          // @ts-ignore
          styles={customStyles}
          className="select-custom filterSelect"
          classNamePrefix="select"
          placeholder="Select Location"
          required
          isSearchable={false}
        />
      )}
    </>
  );
};

export default ListingLocation;
