const chunkArray = (array: any[], chunkSize: number) => {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const Amenities = ({ data, selected, onChange }) => {
  const columns = 3;

  // divide items per column
  const itemsPerColumn = Math.ceil(data.length / columns);

  const chunkedAmenities = chunkArray(data, itemsPerColumn);

  return (
    <>
      {chunkedAmenities.map((column, columnIndex) => (
        <div className="col-sm-4" key={columnIndex}>
          <div className="widget-wrapper mb20">
            <div className="checkbox-style1">
              {column.map((amenity, index) => (
                <label className="custom_checkbox" key={index}>
                  {amenity.label}
                  <input
                    type="checkbox"
                    checked={selected.includes(amenity.value)}
                    onChange={() => {
                      if (selected.includes(amenity.value)) {
                        onChange(selected.filter((a) => a !== amenity.value));
                      } else {
                        onChange([...selected, amenity.value]);
                      }
                    }}
                  />
                  <span className="checkmark" />
                </label>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
