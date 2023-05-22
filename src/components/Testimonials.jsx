import React from "react";
import { testimonials } from "../constants/testimonials";
import Testimonial from "./Testimonial";
const Testimonials = () => {
  return (
    <div className="  bg-neutral-200 py-20 md:py-40">
      <h1 className="md:text-4xl text-2xl text-center text-[#1B3660] font-bold md:pb-20 pb-10">
        Hear What Our Customers Love About&nbsp;
        <span className="text-[#EC6605]">Elevate</span>
      </h1>
      <section className="flex flex-col items-center md:flex-row justify-center gap-10  md:gap-0">
        {testimonials.map((test) => (
          <Testimonial test={test} />
        ))}
      </section>
    </div>
  );
};

export default Testimonials;
