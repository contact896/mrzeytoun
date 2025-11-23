import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  LOGO,
  TIKTOK_ICON,
  X_ICON,
  YOUTUBE_ICON,
} from "@/Constant/image";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Catalog", href: "/catalog" },
    { name: "Contact Us", href: "/contact" },
  ];
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com",
      icon: INSTAGRAM_ICON,
    },
    { name: "Facebook", href: "https://www.facebook.com", icon: FACEBOOK_ICON },
    { name: "X", href: "https://www.x.com", icon: X_ICON },
    { name: "YouTube", href: "https://www.youtube.com", icon: YOUTUBE_ICON },
    { name: "TikTok", href: "https://www.tiktok.com", icon: TIKTOK_ICON },
  ];
  const contactDetails = [
    { type: "Phone", value: "+12 34 56 78 900", icon: "material-symbols:call" },
    { type: "Web", value: "mrzeytounofficial.com", icon: "mdi:internet" },
    {
      type: "Address",
      value: "99 Lorem Ipsum. Dolor Sit ",
      icon: "material-symbols:location-on",
    },
  ];
  return (
    <footer className="bg-white">
      <div className="custom-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 md:pt-12 lg:pt-[50px] pb-6 lg:pb-[15px]">
        {/* Info  */}
        <div className="flex flex-col items-start md:items-start lg:items-start justify-center gap-4 lg:gap-[20px] order-1 md:col-span-2 lg:col-span-1">
          <h4 className="font-bold font-varsity text-center md:text-left lg:text-right">
            MR ZEYTOUN
          </h4>
          {/* <div className="flex flex-col sm:flex-row w-full max-w-md lg:max-w-none">
            <div className="flex border-[1px] border-black rounded-[80px] overflow-hidden w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="focus:outline-none text-sm sm:text-base py-3 px-4 lg:px-[20px] flex-1 min-w-0"
              />
              <button className="flex items-center justify-center bg-black text-white px-4 sm:px-[1.5vw] xl:px-[24px] py-3 xl:py-[12px] rounded-full cursor-pointer hover:scale-105 transition-all duration-300 m-1 whitespace-nowrap">
                <span className="inline md:inline lg:hidden xl:inline">
                  Subscribe
                </span>
                <Icon
                  icon="fluent:arrow-up-16-filled"
                  width="24"
                  height="24"
                  className="rotate-45"
                />
              </button>
            </div>
          </div> */}
          <p className=" text-center md:text-left lg:text-left">
            Premium grooming essentials crafted with Middle Eastern heritage and
            modern excellence.
          </p>
        </div>

        {/* Logo & Social Media Icons  */}
        <div className="flex flex-col gap-4 md:gap-[15px] order-1 md:order-2 md:col-span-2 lg:col-span-1">
          <div className="w-[150px] h-[144px] sm:w-[180px] sm:h-[173px] lg:w-[200px] lg:h-[192px] lg:mx-auto">
            <Image
              src={LOGO}
              alt="Logo"
              width={200}
              height={194}
              className="w-full h-full object-contain"
            />
          </div>
          {/* <div className="w-full flex flex-col lg:flex-row items-start lg:items-center justify-center sm:justify-between py-4 lg:py-[20px] gap-4 sm:gap-6 lg:gap-[30px]">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm sm:text-base hover:text-gray-600 transition-colors duration-200 text-nowrap"
              >
                {item.name}
              </Link>
            ))}
          </div> */}
          {/* Social Media Icons  */}
          <div className="flex items-center justify-start lg:justify-center gap-4 sm:gap-6 lg:gap-[30px] flex-wrap">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Details  */}
        <div className="flex flex-col gap-4 lg:items-end justify-center order-2 md:order-3">
          {contactDetails.map((contact) => (
            <div key={contact.type} className="flex items-center gap-2">
              <Icon
                icon={contact.icon}
                width="20"
                height="20"
                className="sm:w-6 sm:h-6"
              />
              <span className="text-sm sm:text-base break-words">
                {contact.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copy right Section */}
      <div className="custom-container border-t-[1px] py-6 lg:py-[30px] flex flex-row items-center justify-between gap-4">
        <span className="text-xs sm:text-sm font-medium text-center sm:text-left">
          &copy; All Rights Reserved/MR ZEYTOUN.
        </span>
        <span className="text-xs sm:text-sm font-medium hover:text-gray-600 transition-colors duration-200 cursor-pointer">
          Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
