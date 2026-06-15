"use client";
import { bhkOptions } from "@/data/filterOptions";
import React, { useEffect, useState } from "react";
import Select from "react-select";

// @ts-ignore
const ListingBHK = ({filters, setFilters}) => {


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
              filters.bhk
                ? bhkOptions.find((o) => o.value === filters.bhk)
                : null
            }
            onChange={(selected) => {
              setFilters((prev) => ({
                ...prev,
                bhk: selected?.value || null,
              }));
            }}

          // defaultValue={[locationOptions[0]]}
          name="bhk"
          options={bhkOptions}
          // @ts-ignore
          styles={customStyles}
          className="select-custom filterSelect"
          classNamePrefix="select"
          placeholder="Select BHK"
          required
          isSearchable={false}
        />
      )}
    </>
  );
};

export default ListingBHK;
