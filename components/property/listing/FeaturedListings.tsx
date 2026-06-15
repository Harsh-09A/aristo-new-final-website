"use client";
import { getFeaturedProperties } from "@/services/property-service";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertyCardFeatured from "../cards/PropertyCardFeatured";
import { Property } from "@/types/property";

// const featuredProperties = await getFeaturedProperties();

const FeaturedListings = () => {
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);

  useEffect(() => {
    async function loadProperties() {
      const data:any = await getFeaturedProperties(5);
      setFeaturedProperties(data);
    }

    loadProperties();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={20}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".featured-next__active",
          prevEl: ".featured-prev__active",
        }}
        pagination={{
          el: ".featured-pagination__active",
          clickable: true,
        }}
        slidesPerView={1.2}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.2,
          },
          1024: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1.4,
          },
        }}
      >
        {featuredProperties.map((listing) => (
          <SwiperSlide key={listing.id}>
            <PropertyCardFeatured listing={listing} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="row align-items-center justify-content-center mt-4">
        <div className="col-auto">
          <button className="featured-prev__active swiper_button reels-nav-btn">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination featured-pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="featured-next__active swiper_button reels-nav-btn">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>
      {/* End .col for navigation and pagination */}
    </>
  );
};

export default FeaturedListings;
