export interface Property {
  id: number;
  title: string;
  slug: string;
  category: string;
  type: string;
  // status: "RTMI" | "Under Construction";
  status: string;

  images: string[];

  location: string;
  address: string;
  map: string;

  configurations: Configuration[];
  configurationUnit: string;

  price: number;
  possession: string;
  area: string;
  rera: string;
  developerInfo: Developer;
  // developerId: number; // <-- relation

  tags: string[];
  amenities: string[];
  highlights: string[];

  description: string;

  parking: string;
  year_built: string;

  location_features: string[];
}

export interface Configuration {
  id: number;

  value: number;
  price: number;

  area: {
    value: number;
    label: string;
  };

  images: string[];
}

export interface Developer {
  // id: number;
  // slug: string;

  name: string;
  logo: string;
  description: string;
}
