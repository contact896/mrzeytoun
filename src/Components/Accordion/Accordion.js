"use client";
import { Icon } from "@iconify/react";
// import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How strong is the hold?",
      answer:
        "It provides a firm yet flexible hold that lasts all day. You can restyle anytime without stiffness or flaking.",
    },
    {
      question: "Is it suitable for all hair types?",
      answer:
        "Yes, our matte clay works well with all hair types, including straight, wavy, curly, and coily hair.",
    },
    {
      question: "Does it leave residue or buildup?",
      answer:
        "No, our matte clay is designed to leave no residue or buildup, ensuring your hair feels clean and natural.",
    },
    {
      question: "Can I use it daily?",
      answer:
        "Yes, our matte clay is gentle enough for daily use, helping you maintain your style without causing buildup or damage.",
    },
    {
      question: "Is it cruelty-free?",
      answer:
        "Absolutely! Our matte clay is cruelty-free and not tested on animals.",
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-[20px] w-full">
      {faqs.map((faq, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay={index * 200}
          className="bg-white rounded-xl py-[16px] px-[30px] border-[1px] border-gray-300 flex flex-col justify-center items-stretch space-y-[2rem] h-full"
        >
          {/* Trigger */}
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full text-left cursor-pointer"
          >
            <h6 className="font-varsity font-bold">{faq.question}</h6>

            <Icon
              icon="iconoir:maps-arrow"
              width="24"
              height="24"
              style={{ color: "#000" }}
              className={`transform transition-transform duration-300 ease-in-out flex-shrink-0 ${
                openIndex === index ? "rotate-180" : "rotate-90"
              }`}
              fill='black'
            />
          </button>

          {/* Content */}
          {openIndex === index && (
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out border-t-[0.1rem] border-t-gray-300 ${
                openIndex === index
                  ? "max-h-[500px] opacity-100 py-[16px]"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 font-normal">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
