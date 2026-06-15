import { PROPERTY_CATEGORIES } from "@/data/filterOptions";
import properties from "@/data/properties.json";

type Filters = {
  category?: string;
  type?: string;
  search?: string;
  location?: string;
  bhk?: number;
  min_price?: number;
  max_price?: number;
  status?: string;
  developer?: string;
};



export async function getProperties() {
  return properties;
}

// export async function getFeaturedProperties() {
//   return properties.filter((p) =>
//     p.tags.includes("featured")
//   );
// }

export async function getFeaturedProperties(limit?: number) {
  const featured = properties.filter((p) => p.tags.includes("featured"));

  return limit ? featured.slice(0, limit) : featured;
}

export async function getFilteredProperties(filters: Filters) {
  return properties.filter((property) => {
    // category
if (
  filters.category &&
  // filters.category !== PROPERTY_CATEGORIES.ALL &&
  property.category !== filters.category
) {
  return false;
}

    // type
    if (filters.type && property.type !== filters.type) {
      return false;
    }

    // search
    if (
      filters.search &&
      !property.title.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }

    // location
    if (
      filters.location &&
      !property.location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }

    // bhk
    if (
      filters.bhk &&
      !property.configurations.some((config) => config.value === filters.bhk)
    ) {
      return false;
    }

    // min price
    if (filters.min_price && property.price < filters.min_price) {
      return false;
    }

    // max price
    if (filters.max_price && property.price > filters.max_price) {
      return false;
    }

    // status
    if (filters.status && property.status !== filters.status) {
      return false;
    }

    // developer
    if (
      filters.developer &&
      property.developerInfo.name !== filters.developer
    ) {
      return false;
    }

    return true;
  });
}

export async function getPropertyBySlug(slug: string) {
  return properties.find(
    (property) => property.slug === slug
  );
}
/*
- - - - JUST FOR REFERENCE IN FUTURE - - - - -  - 

import prisma from "@/lib/prisma";

export async function getProperties() {
  return prisma.property.findMany();
}

export async function getFeaturedProperties(limit?: number) {
  const featured = properties.filter((p) =>
    p.tags.includes("featured")
  );

  return limit ? featured.slice(0, limit) : featured;
}

await getFeaturedProperties(); // all featured
await getFeaturedProperties(5); // first 5


!Later with Prisma:
export async function getFeaturedProperties({
  limit,
}: {
  limit?: number;
} = {}) {
  return prisma.property.findMany({
    where: {
      tags: {
        has: "featured",
      },
    },
    take: limit,
  });
}

*/
