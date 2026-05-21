"use client";

import { HERO_SECTION_IMAGE, HERO_SECTION_IMAGE2 } from "@/Constant/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import AOS from "aos";

const SLIDE_DURATION = 5000;

const slides = [
  {
    image: HERO_SECTION_IMAGE,
    title: "MR ZEYTOUN HIGH PERFORMANCE MATTE CLAY",
    tags: ["Effortless hold", "Natural finish", "Non-greasy"],
    description:
      "Crafted for the modern man who demands strength, style, and authenticity without compromise.",
    badge1: "Non-greasy",
    badge2: "Matte Clay",
  },
  {
    image: HERO_SECTION_IMAGE2,
    title: "MR ZEYTOUN TEXTURE SEA SALT SPRAY",
    tags: ["Effortless texture", "Natural Volume", "Lightweight hold"],
    description:
      "Crafted for the modern man who wants movement, definition,and a relaxed, beach-inspired style without heaviness.",
    badge1: "Sea Salt Spray",
    badge2: "Lightweight",
  },
];

export default function HeroSection() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    AOS.refresh();
    const id = setInterval(() => {
      setActiveSlide((prev) => (prev === 0 ? 1 : 0));
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeSlide]);

  const handleBuyNowClick = () => {
    router.push(process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK);
  };

  return (
    <div className="relative custom-container">
      <div className="overflow-hidden pt-[30%] sm:pt-[20%] md:pt-[20%] xl:pt-[15%] 2xl:pt-[10%] pb-5 sm:pb-10 md:pb-20">
        <div className="grid grid-cols-1">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`col-start-1 row-start-1 w-full flex md:flex-row flex-col transition-opacity duration-700 ease-in-out ${
                index === activeSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="w-full md:w-6/10 flex flex-col gap-3 order-2 md:order-1">
                <h2
                  data-aos="fade-left"
                  className="masked-text font-varsity text-primary py-10 md:py-0"
                >
                  {slide.title}
                </h2>
                <span
                  data-aos="fade-left"
                  data-aos-delay="200"
                  className="flex items-center font-semibold text-lg md:text-xl flex-wrap"
                >
                  {slide.tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      {idx > 0 && (
                        <Icon width={20} icon="icon-park-outline:dot" />
                      )}
                      {tag}
                    </React.Fragment>
                  ))}
                </span>
                <p
                  data-aos="fade-left"
                  data-aos-delay="400"
                  className="font-extralight"
                >
                  {slide.description}
                </p>
                <div className="flex gap-3 mt-5">
                  <button
                    className="rounded-full px-4 py-2 text-white bg-black cursor-pointer"
                    type="button"
                    onClick={handleBuyNowClick}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
              <div className="w-full md:w-3/10 order-1 md:order-2 flex md:block justify-center">
                <div className="relative w-2/4 md:w-full">
                  <img
                    className="w-full bg-white p-5 rounded-full aspect-square object-contain transition-opacity duration-700"
                    src={slide.image}
                    alt="hero section image"
                  />
                  <div className="absolute -top-[5%] -left-[5%] h-[110%] w-[110%] rounded-full border-2 border-dashed border-gray-400" />
                  <span className="absolute px-3 py-1 rounded-full bg-white border border-gray-500 font-medium">
                    {slide.badge1}
                  </span>
                  <span className="absolute px-3 py-1 rounded-full bg-white font-medium top-0 -right-[13%]">
                    {slide.badge2}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
