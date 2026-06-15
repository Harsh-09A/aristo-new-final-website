import React from "react";
import { getFilteredProperties } from "@/services/property-service";
type Props = {
  searchParams: Promise<{
    category?: string;
    type?: string;
    search?: string;
    location?: string;
    bhk?: string;
    min_price?: string;
    max_price?: string;
    status?: string;
    developer?: string;
  }>;
};

const TestPage = async ({ searchParams }: Props) => {
  const params = await searchParams;
  const properties = await getFilteredProperties({
    category: params.category,
    type: params.type,
    search: params.search,
    location: params.location,
    bhk: params.bhk,
    min_price: params.min_price ? Number(params.min_price) : undefined,
    max_price: params.max_price ? Number(params.max_price) : undefined,
    status: params.status,
    developer: params.developer,
  });

  console.log(params);
  return (
    <>
      <h1>Test Page</h1>
      <div className="container">
        <h1>{properties.length} Properties Found</h1>

        <div className="row">
          {properties.map((property) => (
            <div key={property.id}>{property.title}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TestPage;
