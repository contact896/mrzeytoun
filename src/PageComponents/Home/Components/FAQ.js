import Accordion from "@/Components/Accordion/Accordion";
import React from "react";

const FAQ = () => {
  return (
    <section>
      <div className="custom-container py-[50px] space-y-[25px]">
        <h2 data-aos="fade-up" data-aos-duration="500" className="font-varsity font-bold text-center">
          Frequently Asked Questions (FAQ)?
        </h2>

        {/* Faqs  */}
        <Accordion />
      </div>
    </section>
  );
};

export default FAQ;
