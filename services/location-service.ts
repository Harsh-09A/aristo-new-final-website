import locations from "@/data/locations.json";



export async function getLocations(limit?: number) {
  return limit ? locations.slice(0, limit) : locations;
}

