import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/property";
import PropertyActions from "./single-property-hero/PropertyActions";

interface Props {
  data: Property;
}

const PropertyDeveloper = ({ data }: Props) => {
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center pb25">
        <div className="single-img mb30-sm">
          <Image
            width={90}
            height={90}
            className="w90"
            src={data.developerInfo.logo}
            alt="avatar"
          />
        </div>
        <div className="single-contant ml20 ml0-xs">
          <h6 className="title mb-1">{data.developerInfo.name}</h6>
          {/* <div className="agent-meta mb10 d-md-flex align-items-center">
            <a className="text fz15" href="#">
              <i className="flaticon-call pe-1" />
              +91 0123456789
            </a>
          </div> */}
          <Link
            href="/"
            className="text-decoration-underline fw600"
          >
            View Listings
          </Link>
        </div>
      </div>
      {/* End agent-single */}

      <div>
        <p>
         {data.developerInfo.description}
        </p>
      </div>
      <PropertyActions/>


    </>
  );
};

export default PropertyDeveloper;
