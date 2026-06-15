"use client";
import SearchBox from "./SearchBox";
import ListingCategory from "./ListingCategory";
import ListingType from "./ListingType";
import ListingLocation from "./ListingLocation";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getFiltersFromSearchParams } from "@/utils/filter";
import { Filters, defaultFilters } from "@/types/filter";
import ListingBHK from "./ListingBHK";
import ListingStatus from "./ListingStatus";
import ListingMinPrice from "./ListingMinPrice";
import ListingMaxPrice from "./ListingMaxPrice";

// const initialFilters: Filters = {
//   category: "",
//   type: "",
//   search: "",
//   location: "",
//   bhk: "",
//   min_price: null,
//   max_price: null,
//   status: "",
//   developer: "",
// };

const initialFilters: Filters = defaultFilters;

const ListingSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<Filters>(
    getFiltersFromSearchParams(searchParams),
  );

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (filters.category) params.set("category", filters.category);
    if (filters.type) params.set("type", filters.type);
    if (filters.search) params.set("search", filters.search);
    if (filters.location) params.set("location", filters.location);
    if (filters.bhk) params.set("bhk", filters.bhk.toString());
    if (filters.min_price)
      params.set("min_price", filters.min_price.toString());
    if (filters.max_price)
      params.set("max_price", filters.max_price.toString());
    if (filters.status) params.set("status", filters.status);
    if (filters.developer) params.set("developer", filters.developer);

    // router.push(`/listings?${params.toString()}`);
    // router.push(`/testpage?${params.toString()}`);
    router.push(`${pathname}?${params.toString()}`);
  };

  const handleReset = () => {
    setFilters(initialFilters);

    // remove all query params
    router.push(pathname);
  };

  useEffect(() => {
    setFilters(getFiltersFromSearchParams(searchParams));
  }, [searchParams]);

  return (
    <>
      <div className="list-sidebar-style1">
        <div className="widget-wrapper">
          <h6 className="list-title">Find your home</h6>
          <SearchBox filters={filters} setFilters={setFilters} />
        </div>
        {/* End .widget-wrapper */}

        <div className="widget-wrapper">
          <h6 className="list-title">Listing Category</h6>
          <div className="radio-element">
            <ListingCategory filters={filters} setFilters={setFilters} />
          </div>
        </div>
        {/* End .widget-wrapper */}

        <div className="widget-wrapper">
          <h6 className="list-title">Property Type</h6>
          <div className="radio-element">
            <ListingType
              category={filters.category}
              filters={filters}
              setFilters={setFilters}
            />
          </div>
        </div>

        {/* End .widget-wrapper */}

        <div className="widget-wrapper advance-feature-modal">
          <h6 className="list-title">Location</h6>
          <div className="form-style2 input-group">
            <ListingLocation filters={filters} setFilters={setFilters} />
          </div>
        </div>
        {/* End .widget-wrapper */}

        {/* <div className="widget-wrapper">
          <h6 className="list-title">Price Range</h6>
         // Range Slider Desktop Version
          <div className="range-slider-style1">
            <PriceSlider filterFunctions={filterFunctions} />
          </div>
        </div> */}
        {/* End .widget-wrapper */}

        <div className="widget-wrapper">
          <h6 className="list-title">Min Price</h6>
          <div className="d-flex">
            <ListingMinPrice filters={filters} setFilters={setFilters} />
          </div>
        </div>
        {/* End .widget-wrapper */}

        <div className="widget-wrapper">
          <h6 className="list-title">Max Price</h6>
          <div className="d-flex">
            <ListingMaxPrice filters={filters} setFilters={setFilters} />
          </div>
        </div>
        {/* End .widget-wrapper */}

        {filters.category !== "commercial" && (
          <div className="widget-wrapper">
            <h6 className="list-title">BHK</h6>
            <div className="d-flex">
              <ListingBHK filters={filters} setFilters={setFilters} />
            </div>
          </div>
        )}

        {/* End .widget-wrapper */}

        <div className="widget-wrapper">
          <h6 className="list-title">Status</h6>
          <div className="d-flex">
            <ListingStatus filters={filters} setFilters={setFilters} />
          </div>
        </div>
        {/* End .widget-wrapper */}

        <div className="widget-wrapper mb20">
          <div className="btn-area d-grid align-items-center">
            <button className="ud-btn btn-thm" onClick={handleSearch}>
              <span className="flaticon-search align-text-top pr10" />
              Search
            </button>
          </div>
        </div>
        {/* End .widget-wrapper */}

        <div className="reset-area d-flex align-items-center justify-content-between">
          <div onClick={handleReset} className="reset-button cursor">
            <span className="flaticon-turn-back" />
            <u>Reset all filters</u>
          </div>
          {/* <a className="reset-button" href="#">
          <span className="flaticon-favourite" />
          <u>Save Search</u>
        </a> */}
        </div>
      </div>
    </>
  );
};

export default ListingSidebar;
