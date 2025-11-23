"use client";
import { DETAILS_SECTION_HERO } from "@/Constant/image";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function ProductDetailsSection() {
  const backGroundRef = useRef();

  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [isWide, setIsWide] = useState(false);
  const [imageAnimationType, setImageAnimationType] = useState("zoom-in");

  const ingredients = [
    {
      id: 1,
      icon: "mdi:layers-outline",
      name: "Montmorillonite Clay",
      description:
        "Adds natural structure and absorbs oil, creating a long-lasting matte finish without dryness.",
    },
    {
      id: 2,
      icon: "mdi:bee",
      name: "Beeswax",
      description:
        "Provides flexible strength and natural protection to help styles hold without buildup.",
    },
    {
      id: 3,
      icon: "mdi:bottle-tonic-outline",
      name: "Carnauba Wax",
      description:
        "Boosts hold and texture for a smooth, non-sticky feel and adds lightweight volume.",
    },
    {
      id: 4,
      icon: "mdi:water-drop",
      name: "Vitamin E",
      description:
        "Protects hair and scalp, promoting overall hair health and resilience.",
    },
  ];

  useEffect(() => {
    if (backGroundRef.current) {
      setCurrentWidth(backGroundRef.current.offsetWidth);
      setCurrentHeight(backGroundRef.current.offsetHeight);
      // console.log(backGroundRef.current.offsetHeight, backGroundRef.current.offsetWidth)
    }
    if (window.innerWidth >= 769) {
      setIsWide(true);
    }
    // Set animation type based on screen size
    if (window.innerWidth >= 1024) {
      setImageAnimationType("fade-right");
    } else {
      setImageAnimationType("zoom-in");
    }
  }, []);

  return (
    <section className="bg-[linear-gradient(to_right,black_0,black_50%,white_50%,white_100%)]">
      <div
        ref={backGroundRef}
        className="custom-container relative bg-white py-5 sm:py-10 md:py-20"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black"
          style={
            isWide && window.innerWidth >= 769
              ? {
                  clipPath: `path("M 0 0 L ${(currentWidth / 100) * 30} 0 L ${
                    (currentWidth / 100) * 30
                  } ${currentHeight} L 0 ${currentHeight} Z")`,
                }
              : {
                  clipPath: `path("M 0 0 L ${currentWidth} 0 L ${currentWidth} ${
                    (currentHeight / 100) * 30
                  } L 0 ${(currentHeight / 100) * 30} Z")`,
                }
          }
        />
        <div className="relative z-10 flex md:flex-row flex-col items-center justify-between">
          <div
            data-aos={imageAnimationType}
            data-aos-duration="500"
            className="w-2/3 md:w-4/10"
          >
            <Image
              src={DETAILS_SECTION_HERO}
              alt="details section hero"
              width={400}
              height={600}
              className="w-full h-full object-cover rounded-md sm:rounded-xl md:rounded-2xl"
            />
          </div>
          <div className="w-full md:w-6/12 flex flex-col gap-5">
            <h3
              data-aos="fade-down"
              data-aos-duration="500"
              className="font-varsity text-primary mt-5"
            >
              What's Inside Matters
            </h3>
            <p
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-delay="200"
              className="font-extralight md:text-[20px]"
            >
              We blend science and nature to create performance-driven grooming.
              Every jar of MR ZEYTOUN Matte Clay nourishes while it styles,
              giving you texture, control, and care in one.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-3">
              {ingredients.map((ingredient) => (
                <div
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  key={ingredient.id}
                  className="bg-white rounded-lg border-2 border-gray-200 p-3 md:p-5 hover:border-black transition-colors duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-1">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon
                        icon={ingredient.icon}
                        className="w-6 h-6 text-black"
                      />
                    </div>

                    {/* Name */}
                    <h6 className="font-semibold text-base md:text-lg">
                      {ingredient.name}
                    </h6>

                    {/* Description */}
                    <p className="font-light text-gray-600 leading-relaxed">
                      {ingredient.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
