export interface Option<T = string> {
  label: string;
  value: T;
}

// Static filters
export type PropertyType = Option<string>;
export type Location = Option<string>;
export type PropertyStatus = Option<string>;

// Dynamic filters (from DB)
export type Amenity = Option<string>;
export type Developer = Option<string>;

// BHK
export interface BHKOption extends Option<number> {
  id: string;
}

// Filters state
export interface Filters {
  price: [number, number];
  propertyType: string | null;
  bhk: number | null;
  status: string | null;
  location: string | null;
  developer: string | null;
  amenities: string[];
  rera: string;
}