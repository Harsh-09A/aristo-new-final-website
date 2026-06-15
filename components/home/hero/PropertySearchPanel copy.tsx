"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import SelectPropertyType from "./search-fields/SelectPropertyType";
import { StylesConfig } from "react-select";
import SearchInput from "./search-fields/SearchInput";
import SelectLocations from "./search-fields/SelectLocations";
import SelectBedrooms from "./search-fields/SelectBedroom";
import SelectMinPrice from "./search-fields/SelectMinPrice";
import SelectMaxPrice from "./search-fields/SelectMaxPrice";
import SelectStatus from "./search-fields/SelectStatus";

type Tab = {
  id: "residential" | "commercial";
  label: string;
};

type Filters = {
  min_price: number | null;
  max_price: number | null;
  propertyType: string | null;
  location: string | null;
  bhk: string | null;
  status: string | null;
};

const defaultFilters: Filters = {
  min_price: 0,
  max_price: 0,
  propertyType: null,
  location: null,
  bhk: null,
  status: null,
};

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

const PropertySearchPanel: React.FC = () => {
  const router = useRouter();
  const [showMore, setShowMore] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab["id"]>("residential");
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const handleReset = () => {
    setFilters(defaultFilters);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (filters.propertyType) {
      params.set("propertyType", filters.propertyType);
    }

    if (filters.location) {
      params.set("location", filters.location);
    }

    if (filters.bhk) {
      params.set("bhk", filters.bhk);
    }

    if (filters.status) {
      params.set("status", filters.status);
    }

    if (filters.min_price) {
      params.set("min_price", String(filters.min_price));
    }

    if (filters.max_price) {
      params.set("max_price", String(filters.max_price));
    }

    params.set("category", activeTab);

    router.push(`/search?${params.toString()}`);
  };

  const handleTabClick = (tab: Tab["id"]) => {
    setActiveTab(tab);
  };

  const tabs: Tab[] = [
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
  ];

  return (
    <div className="advance-search-tab mt70 mt30-md mx-auto animate-up-3">
      <ul className="nav nav-tabs p-0 m-0">
        {tabs.map((tab) => (
          <li className="nav-item" key={tab.id}>
            <button
              className={`nav-link ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="tab-content">
        <div className="">
          <div className="advance-content-style3">
            {/* SHOW ON DESKTOP */}
            <div className="d-none d-lg-block">
              <div className="row g-3 align-items-stretch">
                {/* Search Input */}
                <div className="col-12 col-lg-8 order-1 order-lg-2">
                  <SearchInput currentTab={activeTab} />
                </div>

                {/* Property Type */}
                <div className="col-12 col-sm-6 col-lg-3 order-2 order-lg-1">
                  <SelectPropertyType
                    key={`property-type-${activeTab}`}
                    customStyles={customStyles}
                    currentTab={activeTab}
                    value={filters.propertyType}
                    onChange={(value) =>
                      setFilters((prev) => ({
                        ...prev,
                        propertyType: value,
                      }))
                    }
                  />
                </div>

                {/* Location */}
                <div className="col-12 col-sm-6 col-lg-3 order-3">
                  <SelectLocations
                    customStyles={customStyles}
                    currentTab={activeTab}
                  />
                </div>

                {/* Bedrooms */}
                <div className="col-12 col-sm-6 col-lg-2 order-4">
                  <SelectBedrooms
                    customStyles={customStyles}
                    currentTab={activeTab}
                  />
                </div>

                {/* Min Price */}
                <div className="col-12 col-sm-6 col-lg-2 order-5">
                  <SelectMinPrice
                    customStyles={customStyles}
                    currentTab={activeTab}
                  />
                </div>

                {/* Max Price */}
                <div className="col-12 col-sm-6 col-lg-2 order-6">
                  <SelectMaxPrice
                    customStyles={customStyles}
                    currentTab={activeTab}
                  />
                </div>

                {/* Status */}
                <div className="col-12 col-sm-6 col-lg-3 order-7">
                  <SelectStatus
                    customStyles={customStyles}
                    currentTab={activeTab}
                  />
                </div>

                {/* Search Button */}
                <div className="col-12 col-lg-1 order-8 order-lg-2">
                  <button
                    className="advance-search-icon ud-btn btn-thm w-100 h-100"
                    onClick={handleSearch}
                    type="button"
                  >
                    <span className="flaticon-search" />
                  </button>
                </div>
              </div>
            </div>
            {/* SHOW ON MOBILE */}
            <div className="d-block d-lg-none">
              <div className="row g-3">
                <div className="col-12">
                  <SearchInput currentTab={activeTab} />
                </div>

                <div className="col-12">
                  <SelectPropertyType
                    customStyles={customStyles}
                    currentTab={activeTab}
                  />
                </div>

                <div className="col-12">
                  <SelectLocations
                    customStyles={customStyles}
                    currentTab={activeTab}
                  />
                </div>
              </div>

              {showMore && (
                <div className="row g-3 mt-1">
                  <div className="col-12">
                    <SelectBedrooms
                      customStyles={customStyles}
                      currentTab={activeTab}
                    />
                  </div>

                  <div className="col-12">
                    <SelectMinPrice
                      customStyles={customStyles}
                      currentTab={activeTab}
                    />
                  </div>

                  <div className="col-12">
                    <SelectMaxPrice
                      customStyles={customStyles}
                      currentTab={activeTab}
                    />
                  </div>

                  <div className="col-12">
                    <SelectStatus
                      customStyles={customStyles}
                      currentTab={activeTab}
                    />
                  </div>
                </div>
              )}

              <div className="mt-3">
                <button
                  className="btn btn-link p-0"
                  onClick={() => setShowMore(!showMore)}
                >
                  {showMore ? "Less Filters" : "More Filters"}
                </button>
              </div>

              <div className="mt-4">
                <button
                  className="advance-search-icon ud-btn btn-thm w-100"
                  type="button"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchPanel;
