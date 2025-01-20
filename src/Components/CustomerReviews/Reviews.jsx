import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper styles
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "./Reviews.css";

const CustomerReviews = () => {
  const reviews = [
    {
      text: "Mediadunes did an incredible job under very tight timelines. The re-design of the product received very positive reviews and is now in use by more than 200,000 users. The design is durable, sleek and was completed in record time. I would highly recommend working with Mediadunes for any project.",
      name: "Brandon Busito",
      title: "CEO, CoVerified",
    },
    {
      text: "Mediadunes exceeded expectations in delivering a high-quality product on time. The team was incredibly responsive and their designs received widespread praise from our users.",
      name: "Sarah Johnson",
      title: "Founder, TechStart",
    },
    {
      text: "Mediadunes did an incredible job under very tight timelines. The re-design of the product received very positive reviews and is now in use by more than 200,000 users. The design is durable, sleek and was completed in record time. I would highly recommend working with Mediadunes for any project.",
      name: "Sarah Johnson",
      title: "Founder, TechStart",
    },
  ];

  return (
    <section className="reviews-section">
      <h2>Our Customer Reviews</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0} // No extra spacing between slides to avoid clipping
        slidesPerView={1} // Ensure only one card is shown at a time
        navigation={window.innerWidth > 768} // Show navigation only for large screens
        pagination={{ clickable: true }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <blockquote>
                <p>{review.text}</p>
                <div className="review-info">
                  <div className="avatar-placeholder">
                    <img
                      src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small_2x/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg"
                      width="50px"
                      height="50px"
                      alt=""
                    />
                  </div>
                  <h4>{review.name}</h4>
                  <p>{review.title}</p>
                </div>
              </blockquote>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerReviews;
