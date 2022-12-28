import React from "react";
import Hero from "../hero/Hero";
import Navbar from "../navbars/Navbar";
import OurService from "../ourservice/OurService";
import WhyUs from "../whyus/WhyUs";
import Testimonial from "../testimonial/Testimonial";
import GetStart from "../getstart/GetStart";
import Faq from "../faq/Faq";
import Footer from "../footer/Footer";

function SectionHome() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurService />
      <WhyUs />
      <Testimonial />
      <GetStart />
      <Faq />
      <Footer />
    </div>
  );
}

export default SectionHome;
