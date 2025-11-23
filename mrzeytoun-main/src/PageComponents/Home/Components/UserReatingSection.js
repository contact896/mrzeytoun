"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

export default function UserReatingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [animationType, setAnimationType] = useState("fade-right");

  const testimonials = [
    {
      id: 1,
      quote: "Finally, a clay that actually performs.",
      review:
        "Leaves a natural matte finish, no shine, no stickiness. My hair stays in place all day, and it still feels soft.",
      author: "TONY FADES",
      location: "Sydney, AUS",
      rating: 5,
    },
    {
      id: 2,
      quote: "Strong hold, clean feel.",
      review:
        "Washes out easily and doesn't build up like other clays. The scent is subtle and classy, just how I like it.",
      author: "TONY FADES",
      location: "Sydney, AUS",
      rating: 5,
    },
    {
      id: 3,
      quote: "Texture game on point!",
      review:
        "Gives that effortless, messy look I love without looking overdone.",
      author: "TONY FADES",
      location: "Sydney, AUS",
      rating: 5,
    },
    {
      id: 4,
      quote: "Texture game on point!",
      review:
        "Gives that effortless, messy look I love without looking overdone.",
      author: "TONY FADES",
      location: "Sydney, AUS",
      rating: 5,
    },
  ];

  // Update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (typeof window !== "undefined" && window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    // Set initial value
    handleResize();

    // Set animation type based on screen size
    if (window.innerWidth >= 1024) {
      setAnimationType("fade-right");
    } else {
      setAnimationType("fade-up");
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset currentIndex when itemsPerView changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Icon
          key={`full-${i}`}
          icon="mdi:star"
          className="w-5 h-5 text-orange-400"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Icon
          key="half"
          icon="mdi:star-half-full"
          className="w-5 h-5 text-orange-400"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Icon
          key={`empty-${i}`}
          icon="mdi:star-outline"
          className="w-5 h-5 text-orange-400"
        />
      );
    }

    return stars;
  };

  return (
    <section className="bg-gray-50">
      <div className="custom-container py-5 sm:py-10 md:py-20">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-12">
          <h2
            data-aos={animationType}
            data-aos-duration="500"
            className="text-primary uppercase font-varsity"
          >
            What Our Customers Say
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-10 md:w-15 h-10 md:h-15 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:bg-transparent disabled:hover:text-black cursor-pointer"
              aria-label="Previous testimonials"
            >
              <Icon
                icon="mdi:chevron-left"
                className="w-6 md:w-9 h-6 md:h-9 text-gray-400"
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="w-10 md:w-15 h-10 md:h-15 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-black hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-300 disabled:hover:bg-transparent disabled:hover:text-black cursor-pointer"
              aria-label="Next testimonials"
            >
              <Icon
                icon="mdi:chevron-right"
                className="w-6 md:w-9 h-6 md:h-9 text-gray-400"
              />
            </button>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                data-aos={animationType}
                data-aos-duration="500"
                data-aos-delay={index * 200}
                className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-2"
              >
                <div className="bg-white rounded-3xl border-2 border-black p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Icon
                      icon="mdi:format-quote-open"
                      className="w-8 md:w-14 h-8 md:h-14 text-black"
                    />
                  </div>

                  {/* Quote */}
                  <h4 className="text-lg font-semibold mb-3">
                    "{testimonial.quote}"
                  </h4>

                  {/* Review */}
                  <p className="text-sm text-gray-600 mb-6 grow">
                    {testimonial.review}
                  </p>

                  {/* Author and Rating */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm font-bold text-black uppercase">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
