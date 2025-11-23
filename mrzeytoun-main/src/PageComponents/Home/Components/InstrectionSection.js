'use client';

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  HOW_TO_USE_GUIDE1,
  HOW_TO_USE_GUIDE2,
  HOW_TO_USE_GUIDE3,
} from "@/Constant/image";
import Image from "next/image";

export default function InstrectionSection() {
  const steps = [
    {
      id: 1,
      icon: HOW_TO_USE_GUIDE1,
      title: "Scoop",
      description: "Take a small amount, about the size of a fingertip.",
      note: "Start with less; you can always add more for stronger hold.",
    },
    {
      id: 2,
      icon: HOW_TO_USE_GUIDE2,
      title: "Rub",
      description: "Warm it up between your palms until smooth and creamy.",
      note: "This activates the clay for even distribution and effortless styling.",
    },
    {
      id: 3,
      icon: HOW_TO_USE_GUIDE3,
      title: "Style",
      description: "Work through dry or slightly damp hair from roots to tips.",
      note: "Shape with your fingers for a natural texture or use a comb for definition.",
    },
  ];
  const [animationType, setAnimationType] = useState("fade-right");

  useEffect(() => {
    // Initialize AOS animations
    if (window.innerWidth >= 1024) {
      setAnimationType("fade-right");
    } else {
      setAnimationType("fade-up");
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white custom-container">
      <div className="">
        {/* Title */}
        <div className="text-center mb-4">
          <h2
            data-aos="fade-down"
            data-aos-duration="500"
            className="text-primary uppercase tracking-wider font-bold font-varsity"
          >
            How To Use
          </h2>
          <p
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="100"
            className="text-gray-600 font-light"
          >
            The perfect hairstyle doesn't need effort, just the right steps.
            <br />
            Here's how to get the best out of your MR ZEYTOUN Matte Clay.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 justify-between gap-2.5 md:gap-6 mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Step Card */}
              <div
                data-aos={animationType}
                data-aos-duration="500"
                data-aos-delay={index * 200}
                className="flex flex-col items-center"
              >
                {/* Icon Circle */}
                <div className="w-40 h-40 rounded-full flex items-center justify-center mb-6">
                  <Image
                    alt="step icon"
                    height={100}
                    width={100}
                    src={step.icon}
                    className="w-full h-full text-black"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-center font-light text-gray-500 max-w-xs">
                  {step.description}
                </p>

                {/* Note */}
                <p className="text-center font-light text-gray-500 max-w-xs mt-2">
                  {step.note}
                </p>
              </div>

              {/* Arrow between steps (not after last step) */}
              {index < steps.length - 1 && (
                <div
                  data-aos="fade-right"
                  data-aos-duration="500"
                  data-aos-delay={(index + 1) * 200}
                  className="flex items-start justify-center py-5 md:pt-16 md:rotate-0 rotate-90"
                >
                  <svg
                    className="w-15 text-gray-400"
                    width="100"
                    height="17"
                    viewBox="0 0 100 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M99.4917 8.3125L85.1 0V6.8875L0 8.3125L85.1 9.7375V16.625L99.4917 8.3125Z"
                      fill="black"
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Tip */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm md:text-base text-gray-600 font-medium">
            For extra volume, use a blow dryer before applying the clay. It
            helps lock in shape and lift without stiffness.
          </p>
        </div>
      </div>
    </section>
  );
}
