"use client";
import { getFeaturedProperties } from "@/services/property-service";
// import listings from "@/data/listings";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Property } from "@/types/property";
import PropertyCardTop from "../cards/PropertyCardTop";



const TopListings = () => {
  const [topProperties, setTopProperties] = useState<Property[]>([]);

  useEffect(() => {
    async function loadProperties() {
      const data:any = await getFeaturedProperties(5);
      setTopProperties(data);
    }

    loadProperties();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".top-next__active",
          prevEl: ".top-prev__active",
        }}
        pagination={{
          el: ".top-pagination__active",
          clickable: true,
        }}
        slidesPerView={1}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {topProperties.map((listing) => (
          <SwiperSlide key={listing.id}>
            <PropertyCardTop listing={listing} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-auto">
          <button className="top-prev__active swiper_button reels-nav-btn">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination top-pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="top-next__active swiper_button reels-nav-btn">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>
      {/* End .col for navigation and pagination */}
    </>
  );
};

export default TopListings;
