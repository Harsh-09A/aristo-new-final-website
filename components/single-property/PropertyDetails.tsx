import { Property } from "@/types/property";
import React from "react";
interface Props {
  data: Property;
}

const PropertyDetails = ({ data }: Props) => {
  const getConfigData = (data: Property) => {
    // Residential
    if (data.category === "residential") {
      return (
        data.configurations.map((config) => config.value).join(", ") +
        ` ${data.configurationUnit}`
      );
    }

    // Commercial
    const values = data.configurations.map((config) => config.value);

    const min = Math.min(...values);
    const max = Math.max(...values);

    return `${min} - ${max} ${data.configurationUnit}`;
  };

  const propertyDetailsData = [
    {
      label: "RERA ID",
      value: data.rera,
    },
    {
      label: "Category",
      value: data.category,
    },
    {
      label: "Type",
      value: data.type,
    },
    {
      label: "Configuration",
      value: getConfigData(data),
    },
    {
      label: "Possession",
      value: data.possession,
    },
    {
      label: "Status",
      value: data.status,
    },
  ];
  return (
    <>
      <div className="grid grid-cols-2 gap-x-10 ">
        {propertyDetailsData.map((item, index) => (
          <div key={index} className="d-flex gap-2  ">
            <div className="pd-list">
              <p className="fw600 mb10 ff-heading dark-color">
                {item.label} :{" "}
              </p>
            </div>
            <div className="pd-list">
              <p className="text mb10 text-capitalize">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PropertyDetails;
