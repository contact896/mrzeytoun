"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_BANNER_IMAGE } from "@/Constant/image";
import { useRouter } from "next/navigation";

export default function FooterBanner() {
  const router = useRouter();
  const handleBuyNowClick = () => {
    router.push(process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK);
  };

  return (
    <section className="relative bg-linear-to-r from-gray-900 via-[#261717] to-[#4a1f1f] text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('/images/footer-banner.png')] bg-cover bg-center opacity-30"></div>

      <div className="custom-container relative z-10">
        <div className="flex">
          {/* Left Content */}
          <div className="w-full lg:w-7/10 py-3 sm:py-6 md:py-12 flex flex-col gap-2 sm:gap-4 md:gap-6">
            <h2 className="text-white uppercase font-varsity">
              Upgrade Your Grooming Game
            </h2>

            <p className="text-lg md:text-xl font-semibold">
              No more greasy, heavy clays. No more trial and error.
            </p>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              Experience effortless style, natural texture, and all-day
              confidence. Just a clean, matte finish and a formula that works as
              hard as you do. Join thousands of men who've made MR ZEYTOUN their
              daily essential.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                className="px-8 py-3 bg-white text-black rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-300 shadow-lg cursor-pointer"
                onClick={handleBuyNowClick}
              >
                Shop Now
              </button>
              {/* <button
                className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300"
              >
                Learn More
              </button> */}
            </div>
          </div>

          {/* Right Image - Hidden on mobile */}
          <div className="hidden w-4/10 lg:flex justify-center">
            <Image
              height={600}
              width={500}
              src={FOOTER_BANNER_IMAGE}
              alt="Grooming Model"
              className="h-full w-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
