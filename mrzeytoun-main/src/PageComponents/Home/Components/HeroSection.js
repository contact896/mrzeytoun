"use client";

import {
  HERO_BACKGROUND,
  HERO_BACKGROUND_LAYER,
  HERO_SECTION_IMAGE,
} from "@/Constant/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeroSection() {
  const router = useRouter();
  const handleBuyNowClick = () => {
    router.push(process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK);
  };
  return (
    <div className="relative  custom-container">
      <div className="pt-[30%] sm:pt-[20%] md:pt-[20%] xl:pt-[15%] 2xl:pt-[10%] flex md:flex-row flex-col pb-5 sm:pb-10 md:pb-20">
        <div
          data-aos="zoom-in"
          data-aos-duration="500"
          className="w-full md:w-6/10 flex flex-col gap-3 order-2 md:order-1"
        >
          <h2 className="masked-text font-varsity text-primary py-10 md:py-0">
            MR ZEYTOUN HIGH PERFORMANCE MATTE CLAY
          </h2>
          <span className="flex items-center font-semibold text-lg md:text-xl flex-wrap">
            Effortless hold
            <Icon width={20} icon="icon-park-outline:dot" />
            Natural finish
            <Icon width={20} icon="icon-park-outline:dot" />
            Non-greasy
          </span>
          <p className="font-extralight">
            Crafted for the modern man who demands strength, style, and
            authenticity without compromise.
          </p>
          <div className="flex gap-3 mt-5">
            <button
              className="rounded-full px-4 py-2 text-white bg-black cursor-pointer"
              type="button"
              onClick={handleBuyNowClick}
            >
              Buy Now
            </button>
            {/* <button
              className="rounded-full px-4 py-2 bg-transparent border border-black"
              type="button"
            >
              Learn More
            </button> */}
          </div>
        </div>
        <div className="w-full md:w-3/10  order-1 md:order-2 flex md:block justify-center">
          <div className="relative w-2/4 md:w-full">
            <img
              data-aos="zoom-in"
              data-aos-duration="500"
              className="w-full bg-white p-5 rounded-full"
              src={HERO_SECTION_IMAGE}
              alt="hero section image"
            />
            <div className="absolute -top-[5%] -left-[5%] h-[110%] w-[110%] rounded-full border-2 border-dashed border-gray-400" />
            <span className="absolute px-3 py-1 rounded-full bg-white border border-gray-500 font-medium">
              Non-greasy
            </span>
            <span className="absolute px-3 py-1 rounded-full bg-white font-medium top-0 -right-[13%]">
              Matte Clay
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
