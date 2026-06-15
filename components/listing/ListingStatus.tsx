"use client";
import { statusOptions } from "@/data/filterOptions";
import React, { useEffect, useState } from "react";
import Select from "react-select";

// @ts-ignore
const ListingStatus = ({filters, setFilters}) => {


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
              filters.status
                ? statusOptions.find((o) => o.value === filters.status)
                : null
            }
            onChange={(selected) => {
              setFilters((prev) => ({
                ...prev,
                status: selected?.value || null,
              }));
            }}

          // defaultValue={[locationOptions[0]]}
          name="status"
          options={statusOptions}
          // @ts-ignore
          styles={customStyles}
          className="select-custom filterSelect"
          classNamePrefix="select"
          placeholder="Select Status"
          required
          isSearchable={false}
        />
      )}
    </>
  );
};

export default ListingStatus;
