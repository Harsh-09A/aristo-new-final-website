"use client";
import React, { useState } from "react";
import Slider from "rc-slider";

const MIN = 0;
const MAX = 10000000;

type Props = {
  value: [number, number];
  onChange: (val: [number, number]) => void;
};

const PriceRange: React.FC<Props> = ({ value, onChange }) => {
  const handleInputChange = (index: number, val: string) => {
    let num = Number(val);
    if (isNaN(num)) return;

    num = Math.max(MIN, Math.min(MAX, num));

    const newPrice: [number, number] = [...value];

    if (index === 0 && num > newPrice[1]) return;
    if (index === 1 && num < newPrice[0]) return;

    newPrice[index] = num;
    onChange(newPrice);
  };

  return (
    <>
      <div className="range-wrapper">
        <Slider
          range
          step={50000}
          min={MIN}
          max={MAX}
          value={value}
          onChange={(val) => {
            if (Array.isArray(val)) {
              onChange(val as [number, number]);
            }
          }}
          id="slider"
        />
        <div className="d-flex align-items-center mt-2">
          <input
            id="slider-range-value1"
            type="number"
            min={MIN}
            max={MAX}
            value={value[0]}
            onChange={(e) => handleInputChange(0, e.target.value)}
          />
          <i className="fa-sharp fa-solid fa-minus mx-2 dark-color icon" />

          <input
            id="slider-range-value2"
            type="number"
            min={MIN}
            max={MAX}
            value={value[1]}
            onChange={(e) => handleInputChange(1, e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default PriceRange;
