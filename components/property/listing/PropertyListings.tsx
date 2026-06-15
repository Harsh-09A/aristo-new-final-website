import { Property } from "@/types/property";
import PropertyCardListings from "../cards/PropertyCardListings";
type Props = {
  listings: Property[];
};

const PropertyListings = ({ listings }: Props) => {
  return (
    <>
      {listings.map((listing) => (
        <div className="row mt15" key={listing.id}>
          <PropertyCardListings listing={listing} />
        </div>
      ))}
    </>
  );
};

export default PropertyListings;
