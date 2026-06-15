"use client";
import testimonialData from "@/data/testimonials.json";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <>
      <Swiper
        className="overflow-hidden"
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".testimonial_next__active",
          prevEl: ".testimonial_prev__active",
        }}
        pagination={{
          el: ".testimonial_pagination__active",
          clickable: true,
        }}
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
        {testimonialData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial= {testimonial} />

          </SwiperSlide>
        ))}
      </Swiper>

            <div className="row align-items-center justify-content-center mt-4">
        <div className="col-auto">
          <button className="testimonial_prev__active swiper_button reels-nav-btn">
            <i className="far fa-arrow-left-long" />
          </button>
        </div>
        {/* End prev */}

        <div className="col-auto">
          <div className="pagination swiper--pagination testimonial_pagination__active" />
        </div>
        {/* End pagination */}

        <div className="col-auto">
          <button className="testimonial_next__active swiper_button reels-nav-btn">
            <i className="far fa-arrow-right-long" />
          </button>
        </div>
        {/* End Next */}
      </div>
      {/* End .col for navigation and pagination */}
    </>
  );
};

export default Testimonial;

