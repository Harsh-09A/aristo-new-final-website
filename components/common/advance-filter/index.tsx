"use client";
import Select from "react-select";
import { useRouter } from "next/navigation";
import PriceRange from "./PriceRange";
import { useEffect, useState } from "react";
import Amenities from "./Amenities";
import {
  bhkOptions,
  locationOptions,
  propertyStatus,
  propertyTypes,
} from "@/data/filterOptions";
import Bedroom from "./Bedroom";
import { StylesConfig } from "react-select";
import { Option } from "@/types/filter";

type Filters = {
  price: [number, number];
  propertyType: string | null;
  bhk: string | null;
  status: string | null;
  location: string | null;
  developer: string | null;
  amenities: string[];
  rera: string;
};

const defaultFilters: Filters = {
  price: [100000, 8000000],
  propertyType: null,
  bhk: null,
  status: null,
  location: null,
  developer: null,
  amenities: [],
  rera: "",
};

// const customStyless = {
//   option: (styles, { isFocused, isSelected, isHovered }) => {
//     return {
//       ...styles,
//       backgroundColor: isSelected
//         ? "#eb6753"
//         : isHovered
//           ? "#eb675312"
//           : isFocused
//             ? "#eb675312"
//             : undefined,
//     };
//   },
// };

export const customStyles: StylesConfig<Option, false> = {
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#da251c"
      : state.isFocused
      ? "#eb675312"
      : "white",
    color: "#000",
    cursor: "pointer",
  }),

  control: (base, state) => ({
    ...base,
    boxShadow: "none", // ❗ removes blue outline
    borderColor: state.isFocused ? "#da251c" : base.borderColor,
    "&:hover": {
      borderColor: "#da251c",
    },
   
  }),
};

type Props = {
  amenities: Option[];
  developers: Option[];
};
const AdvanceFilterModal = ({ amenities, developers }: Props) => {
  const [showSelect, setShowSelect] = useState(false);
  useEffect(() => {
    setShowSelect(true);
  }, []);
  const router = useRouter();
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const handleReset = () => {
    setFilters(defaultFilters);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (filters.propertyType) params.set("type", filters.propertyType);
    // if (filters.bhk !== "any") params.set("bhk", filters.bhk);
    if (filters.bhk) params.set("bhk", filters.bhk.toString());
    if (filters.location) params.set("location", filters.location);
    if (filters.status) params.set("status", filters.status);
    if (filters.developer) params.set("developer", filters.developer);
    if (filters.rera) params.set("rera", filters.rera);

    params.set("minPrice", filters.price[0].toString());
    params.set("maxPrice", filters.price[1].toString());

    if (filters.amenities.length) {
      params.set("amenities", filters.amenities.join(","));
    }

    router.push(`/search?${params.toString()}`);
  };

  return (
    <>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header pl30 pr30">
            <h5 className="modal-title" id="exampleModalLabel">
              More Filter
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          {/* End modal-header */}

          <div className="modal-body pb-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="widget-wrapper">
                  <h6 className="list-title mb20">Price Range</h6>
                  <div className="range-slider-style modal-version">
                    <PriceRange
                      value={filters.price}
                      onChange={(val) => setFilters({ ...filters, price: val })}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* End .row (1) */}

            <div className="row">
              <div className="col-sm-6">
                <div className="widget-wrapper">
                  <h6 className="list-title">Property Type</h6>
                  <div className="form-style2 input-group">
                    {showSelect && (
                      <Select
                        value={
                          filters.propertyType
                            ? propertyTypes.find(
                                (o) => o.value === filters.propertyType,
                              )
                            : null
                        }
                        onChange={(val) =>
                          setFilters({
                            ...filters,
                            propertyType: val?.value || null,
                          })
                        }
                        options={propertyTypes}
                        name="propertyTypes"
                        styles={customStyles}
                        className="select-custom"
                        classNamePrefix="select"
                        required
                        placeholder={"Select Property Type"}
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* End .col-6 */}

              <div className="col-sm-6">
                <div className="widget-wrapper">
                  <h6 className="list-title">RERA ID</h6>
                  <div className="form-style2">
                    <input
                      type="text"
                      value={filters.rera}
                      onChange={(e) =>
                        setFilters({ ...filters, rera: e.target.value })
                      }
                      className="form-control"
                      placeholder="PR04949213"
                    />
                  </div>
                </div>
              </div>
              {/* End .col-6 */}
            </div>
            {/* End .row (2)*/}

            <div className="row">
              <div className="col-sm-6">
                <div className="widget-wrapper">
                  <h6 className="list-title">BHK</h6>
                  <div className="d-flex">
                    <Bedroom
                      data={bhkOptions}
                      value={filters.bhk}
                      onChange={(val) => setFilters({ ...filters, bhk: val })}
                    />
                  </div>
                </div>
              </div>
              {/* End .col-md-6 */}

              <div className="col-sm-6">
                <div className="widget-wrapper">
                  <h6 className="list-title">Construction Status</h6>
                  <div className="form-style2 input-group">
                    {showSelect && (
                      <Select
                        // value={propertyStatus.find(
                        //   (o) => o.value === filters.status,
                        // )}
                        value={
                          filters.status
                            ? propertyStatus.find(
                                (o) => o.value === filters.status,
                              )
                            : null
                        }
                        name="propertyStatus"
                        onChange={(val) =>
                          setFilters({ ...filters, status: val?.value || null })
                        }
                        options={propertyStatus}
                        styles={customStyles}
                        className="select-custom"
                        classNamePrefix="select"
                        required
                        placeholder={"Select Property Status"}
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* End .col-md-6 */}
            </div>
            {/* End .row (3) */}

            <div className="row">
              <div className="col-sm-6">
                <div className="widget-wrapper">
                  <h6 className="list-title">Location</h6>
                  <div className="form-style2 input-group">
                    {showSelect && (
                      <Select
                        value={
                          filters.location
                            ? locationOptions.find(
                                (o) => o.value === filters.location,
                              )
                            : null
                        }
                        onChange={(val) =>
                          setFilters({
                            ...filters,
                            location: val?.value || null,
                          })
                        }
                        options={locationOptions}
                        name="locations"
                        styles={customStyles}
                        className="select-custom"
                        classNamePrefix="select"
                        required
                        placeholder={"Select Location"}
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* End .col-md-6 */}

              <div className="col-sm-6">
                <div className="widget-wrapper">
                  <h6 className="list-title">Developers</h6>
                  <div className="form-style2 input-group">
                    {showSelect && (
                      <Select
                        value={
                          filters.developer
                            ? developers.find(
                                (o) => o.value === filters.developer,
                              )
                            : null
                        }
                        onChange={(val) =>
                          setFilters({
                            ...filters,
                            developer: val?.value || null,
                          })
                        }
                        options={developers}
                        name="developers"
                        styles={customStyles}
                        className="select-custom"
                        classNamePrefix="select"
                        required
                        placeholder={"Select Developer"}
                      />
                    )}
                  </div>
                </div>
              </div>
              {/* End .col-md-6 */}
            </div>
            {/* End .row (4)*/}

            <div className="row">
              <div className="col-lg-12">
                <div className="widget-wrapper mb0">
                  <h6 className="list-title mb10">Amenities</h6>
                </div>
              </div>
              <Amenities
                data={amenities}
                selected={filters.amenities}
                onChange={(value) =>
                  setFilters((prev) => ({
                    ...prev,
                    amenities: value,
                  }))
                }
              />
            </div>
          </div>
          {/* End modal body */}

          <div className="modal-footer justify-content-between">
            <button className="reset-button" onClick={handleReset}>
              <span className="flaticon-turn-back" />
              <u>Reset all filters</u>
            </button>
            <div className="btn-area">
              <button
                data-bs-dismiss="modal"
                type="submit"
                className="ud-btn btn-thm"
                // onClick={() => router.push("/search")}
                onClick={handleSearch}
              >
                <span className="flaticon-search align-text-top pr10" />
                Search
              </button>
            </div>
          </div>
          {/* End modal-footer */}
        </div>
      </div>
    </>
  );
};

export default AdvanceFilterModal;
