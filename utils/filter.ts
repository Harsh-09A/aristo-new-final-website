import { Filters, defaultFilters } from "@/types/filter";

export const getFiltersFromSearchParams = (
  params: URLSearchParams
): Filters => {
  return {
    category: params.get("category") || "residential",
    type: params.get("type"),
    search: params.get("search"),
    location: params.get("location"),
    bhk: params.get("bhk"),
    min_price: params.get("min_price")
      ? Number(params.get("min_price"))
      : null,
    max_price: params.get("max_price")
      ? Number(params.get("max_price"))
      : null,
    status: params.get("status"),
    developer: params.get("developer"),
  };
};