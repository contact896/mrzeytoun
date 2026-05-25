"use client";

import { HERO_SECTION_IMAGE, HERO_SECTION_IMAGE2 } from "@/Constant/image";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import AOS from "aos";

const products = [
  {
    id: "matte-clay",
    image: HERO_SECTION_IMAGE,
    name: "MR ZEYTOUN HIGH PERFORMANCE MATTE CLAY",
    description:
      "Crafted for the modern man who demands strength, style, and authenticity without compromise. A water-based formula that delivers a strong yet flexible hold with a natural matte finish.",
    features: [
      "Strong flexible hold",
      "Natural matte finish",
      "Non-greasy formula",
      "Easy to wash out",
    ],
    badge1: "Matte Clay",
    badge2: "Strong Hold",
    paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK,
  },
  {
    id: "sea-salt-spray",
    image: HERO_SECTION_IMAGE2,
    name: "MR ZEYTOUN TEXTURE SEA SALT SPRAY",
    description:
      "Designed for the modern man who wants effortless texture, natural volume, and a lightweight, beach-inspired style without the heaviness or sticky residue.",
    features: [
      "Effortless texture",
      "Natural volume",
      "Lightweight hold",
      "Beach-inspired style",
    ],
    badge1: "Sea Salt Spray",
    badge2: "Lightweight",
    paymentLink: process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK2,
  },
];

export default function CatalogPage() {
  const router = useRouter();

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero / Title Section */}
      <section className="relative bg-linear-to-r from-gray-900 via-[#261717] to-[#4a1f1f] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/footer-banner.png')] bg-cover bg-center opacity-20" />
        <div className="custom-container relative z-10 pt-[30%] sm:pt-[20%] md:pt-[18%] xl:pt-[14%] 2xl:pt-[10%] pb-10 md:pb-20">
          <div className="text-center">
            <h1
              data-aos="fade-down"
              data-aos-duration="600"
              className="text-white font-varsity"
            >
              Our Collection
            </h1>
            <p
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-delay="200"
              className="font-extralight max-w-2xl mx-auto mt-4 text-gray-300"
            >
              Discover the perfect grooming essential for your style. Each product
              is crafted with premium ingredients for the modern man.
            </p>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <section>
        {products.map((product, index) => (
          <div key={product.id}>
            {/* First product: image left, second: image right */}
            <div
              className={`${
                index === 0
                  ? "md:bg-[linear-gradient(to_right,black_0,black_30%,white_30%,white_100%)]"
                  : "md:bg-[linear-gradient(to_left,black_0,black_50%,white_50%,white_100%)]"
              } bg-white`}
            >
              <div className="custom-container relative py-10 md:py-20">
                <div
                  className={`absolute top-0 left-0 w-full ${
                    index === 0 ? "md:w-[30%]" : "md:w-[80%]"
                  } md:h-full h-[25%] ${index === 0 ? "bg-black" : "bg-white"}`}
                />
                <div
                  className={`relative z-10 flex flex-col ${
                    index === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center justify-between gap-8 md:gap-12`}
                >
                  {/* Product Image */}
                  <div
                    data-aos={index === 0 ? "fade-right" : "fade-left"}
                    data-aos-duration="600"
                    className="w-2/3 md:w-4/10"
                  >
                    <div className="relative w-full">
                      <img
                        className="w-full bg-white p-5 rounded-full aspect-square object-contain"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="absolute -top-[5%] -left-[5%] h-[110%] w-[110%] rounded-full border-2 border-dashed border-gray-400" />
                      <span className="absolute px-4 py-1.5 rounded-full bg-white border border-gray-500 font-medium text-sm -top-2 -right-4">
                        {product.badge1}
                      </span>
                      <span className="absolute px-4 py-1.5 rounded-full bg-white font-medium text-sm -bottom-2 -left-2">
                        {product.badge2}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div
                    data-aos={index === 0 ? "fade-left" : "fade-right"}
                    data-aos-duration="600"
                    className="w-full md:w-6/12 flex flex-col gap-5"
                  >
                    <h3
                      data-aos="fade-down"
                      data-aos-duration="500"
                      className={`font-varsity ${
                        index === 0 ? "text-primary" : "text-primary"
                      }`}
                    >
                      {product.name}
                    </h3>
                    <p
                      data-aos="fade-down"
                      data-aos-duration="500"
                      data-aos-delay="200"
                      className={`font-extralight md:text-[20px] ${
                        index === 0 ? "text-black" : "text-black"
                      }`}
                    >
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {product.features.map((feature) => (
                        <div
                          key={feature}
                          data-aos="zoom-out"
                          data-aos-duration="500"
                          className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-colors duration-300 ${
                            index === 0
                              ? "border-gray-200 bg-white hover:border-black"
                              : "border-gray-200 bg-white hover:border-black"
                          }`}
                        >
                          <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                            <Icon
                              icon="mdi:check"
                              className="w-4 h-4 text-black"
                            />
                          </div>
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Shop Now Button */}
                    <div className="mt-4">
                      <button
                        className={`rounded-full px-8 py-3 font-semibold text-sm cursor-pointer transition-colors duration-300 shadow-lg ${
                          index === 0
                            ? "bg-white text-black hover:bg-gray-100"
                            : "bg-black text-white hover:bg-gray-800"
                        }`}
                        type="button"
                        onClick={() => router.push(product.paymentLink)}
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
