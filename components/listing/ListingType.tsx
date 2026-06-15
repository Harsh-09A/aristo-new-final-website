import { commercialOptions, residentialOptions } from "@/data/filterOptions";

const ListingType = ({ category, filters, setFilters }) => {
  // const options = residentialOptions;
  const options =
    category === "residential" ? residentialOptions : commercialOptions;

  return (
    <>
      {/* All */}
      <div className="form-check d-flex align-items-center mb10">
        <input
          className="form-check-input"
          type="radio"
          name="type"
          id="all-types"
          checked={!filters.type}
          onChange={() =>
            setFilters((prev) => ({
              ...prev,
              type: null,
            }))
          }
        />

        <label className="form-check-label" htmlFor="all-types">
          All
        </label>
      </div>

      {options.map((option) => (
        <div
          className="form-check d-flex align-items-center mb10"
          key={option.value}
        >
          <input
            className="form-check-input"
            type="radio"
            name="type"
            id={option.value}
            checked={filters.type === option.value}
            onChange={() =>
              setFilters((prev) => ({
                ...prev,
                type: option.value,
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

export default ListingType;
