import Image from "next/image";
import { Property } from "@/types/property";
import { formatIndianPrice } from "@/utils/format-price";
import Link from "next/link";

type Props = {
  listing: Property;
};

const PropertyCardTop = ({ listing }: Props) => {
  return (
    <>
      <div className="item">
        <div className="listing-style1">
          <div className="list-thumb ">
            {/* <Image
              width={382}
              height={248}
              className="w-100 h-100 cover"
              src={listing.images[0]}
              alt="listings"
            /> */}

            <div className="position-relative overflow-hidden rounded">
              <div
                style={{
                  width: "250px",
                  height: "250px",
                }}
              >
                <Image
                  src={listing.images[0]}
                  alt="image"
                  fill
                  sizes="250px"
                  quality={100}
                  className="object-fit-cover"
                />
              </div>
            </div>

            {/* <div className="sale-sticker-wrap">
              {!listing.tags && (
                <div className="list-tag fz12">
                  <span className="flaticon-electricity me-2" />
                  FEATURED
                </div>
              )}
            </div> */}

            <div className="list-price">
              {formatIndianPrice(listing.price)}
              {/* / <span>mo</span> */}
            </div>
          </div>
          <div className="list-content">
            <h6 className="list-title property-title">
              <Link href={`/single-v1/${listing.id}`}>{listing.title}</Link>
            </h6>
            <p className="list-text color-primary">
              <span className="location-icon">📍</span>
              {listing.location}
            </p>

            {/* <!-- Specs --> */}
            {/* <div className="list-meta d-flex align-items-center">
              <a href="#">
                <span className="flaticon-bed" />{" "}
                {listing.configurations
                  .map((config) => config.value)
                  .join(", ")}{" "}
                {listing.configurationUnit}
              </a>

              <a href="#" className="text-capitalize">
                <span className="flaticon-home" /> {listing.type}
              </a>
            </div> */}
            {/*  */}
            <div className="top-specs-grid">
              <div className="top-specs-item">
                <div className="top-specs-value">
                  <span className="flaticon-bed top-specs-icon" />{" "}
                  {listing.configurations
                    .map((config) => config.value)
                    .join(", ")}{" "}
                  {listing.configurationUnit}
                </div>
              </div>
              <div className="top-specs-item">
                <div className="top-specs-value text-capitalize">
                  <span className="flaticon-home top-specs-icon" />{" "}
                  {listing.type}
                </div>
              </div>
              <div className="top-specs-item">
                <div className="top-specs-value">
                  <span className="flaticon-protection top-specs-icon" />{" "}
                  {listing.rera}
                </div>
              </div>
              <div className="top-specs-item">
                <div className="top-specs-value">
                  <span className="flaticon-event top-specs-icon" />{" "}
                  {listing.possession}
                </div>
              </div>
            </div>

            {/* <!-- Developer --> */}

            {/* <hr className="mt-2 mb-2" /> */}
            {/* <div className="list-meta2 d-flex  align-items-center">
              <Image
                src={listing.developerInfo.logo}
                width={80}
                height={80}
                alt="Logo"
              />
              <span className="for-what fw-bold">
                {listing?.developerInfo.name}
              </span>
            </div> */}
            <div className="developer-row">
              <div className="developer-logo">
                {/* <!-- Placeholder logo using initials --> */}
                <Image
                  width={40}
                  height={40}
                  src={listing.developerInfo.logo}
                  alt={listing.title}
                />
              </div>
              <div>
                <div className="developer-name">
                  {listing.developerInfo.name}
                </div>
                <div className="developer-tag">Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCardTop;
