"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function PromiseSection() {
  const backGroundRef = useRef();
  const imageRef = useRef();

  const [currentWidth, setCurrentWidth] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(0);
  const [imageHeight, setImageHeight] = useState(0);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    if (backGroundRef.current) {
      setCurrentWidth(backGroundRef.current.offsetWidth);
      setCurrentHeight(backGroundRef.current.offsetHeight);
      console.log(
        backGroundRef.current.offsetHeight,
        backGroundRef.current.offsetWidth
      );
    }
    if (imageRef.current) {
      setImageHeight(imageRef.current.offsetHeight);
    }
    if (window.innerWidth > 768) {
      setIsWide(true);
    }
  }, []);

  const features = [
    {
      id: 1,
      icon: "mdi:water-outline",
      title: "Water-based formula easy to wash out",
      position: "left",
    },
    {
      id: 2,
      icon: "mdi:hand-okay",
      title: "Strong but flexible hold to hair",
      position: "left",
    },
    {
      id: 3,
      icon: "mdi:leaf",
      title: "Infused with natural ingredients",
      position: "left",
    },
    {
      id: 4,
      icon: "mdi:shimmer",
      title: "Lightweight, matte finish, no shine",
      position: "right",
    },
    {
      id: 5,
      icon: "mdi:palette-outline",
      title: "Designed for modern textured styles",
      position: "right",
    },
    {
      id: 6,
      icon: "mdi:star-outline",
      title: "Middle Eastern excellence crafted with heritage",
      position: "right",
    },
  ];

  const leftFeatures = features.filter((f) => f.position === "left");
  const rightFeatures = features.filter((f) => f.position === "right");

  return (
    <section className="bg-[linear-gradient(to_right,black_0,black_50%,#F7F7F7_50%,#F7F7F7_100%)] overflow-hidden">
      <div
        ref={backGroundRef}
        className="custom-container relative bg-[#F7F7F7] py-5 sm:py-10 md:py-20"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-black"
          style={
            isWide && window.innerWidth > 768
              ? {
                  clipPath: `path("M 0 0 L ${(currentWidth / 100) * 80} 0 L ${
                    (currentWidth / 100) * 30
                  } ${currentHeight + 2} L 0 ${currentHeight + 2} Z")`,
                }
              : {
                  clipPath: `path("M 0 0 L ${currentWidth} 0 L ${currentWidth} ${
                    (currentHeight / 100) * 60
                  } L 0 ${(currentHeight / 100) * 60} Z")`,
                }
          }
        />
        <div className="">
          {/* Title */}
          <h2
            data-aos="fade-down"
            data-aos-duration="500"
            className="text-white uppercase font-varsity relative z-3 text-left pb-5 sm:pb-10 md:pb-20"
          >
            Why Choose Mr Zeytoun
          </h2>

          {/* Main Content */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
              {/* Left Features */}
              <div className="space-y-5 lg:space-y-25 z-2 pr-[10px] md:pr-0">
                {leftFeatures.map((feature, index) => (
                  <div
                    data-aos="fade-right"
                    data-aos-duration="500"
                    style={
                      index !== 1 && isWide && window.innerWidth > 1024
                        ? {
                            transform: "translateX(10%)",
                          }
                        : {}
                    }
                    key={feature.id}
                    className="flex relative text-white items-center gap-4 justify-start lg:justify-end"
                  >
                    <div className="flex-1 border border-gray-300 p-3 rounded-full">
                      <p className="text-sm md:text-base pr-4">
                        {feature.title}
                      </p>
                    </div>
                    <div className="duble-border shrink-0 absolute -right-4 h-12 w-12 aspect-square rounded-full bg-white flex items-center justify-center">
                      <Icon
                        icon={feature.icon}
                        className="w-5 h-5 text-black"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Image with Dashed Circles */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                  {/* Outer Dashed Circle - Black */}
                  <div className="-z hidden lg:block absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[130%] w-[130%] rounded-full border-2 border-dashed border-gray-400"></div>
                  <div
                    className="-z absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-400"
                    style={{
                      height:
                        imageHeight +
                        (isWide && window.innerWidth > 768 ? 30 : 20),
                      width:
                        imageHeight +
                        (isWide && window.innerWidth > 768 ? 30 : 20),
                    }}
                  />
                  {/* Product Image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                      <Image
                        ref={imageRef}
                        src="/images/hero-section.png"
                        alt="Mr Zeytoun Product"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Features */}
              <div className="space-y-5 lg:space-y-25 order-3 pl-[10px] md:pl-0">
                {rightFeatures.map((feature, index) => (
                  <div
                    data-aos="fade-left"
                    data-aos-duration="500"
                    style={
                      index !== 1 && isWide && window.innerWidth > 1024
                        ? {
                            transform: "translateX(-10%)",
                          }
                        : {}
                    }
                    key={feature.id}
                    className="flex relative text-white items-center gap-4 justify-start "
                  >
                    <div className="border-5 border-[#f7f7f7] absolute -left-4 h-12 w-12 aspect-square rounded-full bg-gray-300 flex items-center justify-center">
                      <Icon
                        icon={feature.icon}
                        className="w-5 h-5 text-black"
                      />
                    </div>
                    <div className="flex-1 bg-black p-3 rounded-full">
                      <p className="text-sm lg:text-base pl-6">
                        {feature.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
