import React from "react";
import hero from "../assets/Laptop.png";

const Hero = () => {
  return (
    <div className="  items-center flex flex-col text-[#1B3660] gap-8 bg-[#FAFAFA] py-20 px-8 shadow-md">
      <section className="text-center flex flex-col gap-2">
        <h1 className="font-bold text-lg  md:text-5xl">
          Embrace Your Sass,
          <span className="text-[#EC6605]"> Elevate&nbsp; </span>Your Style!
        </h1>
        <p className="text-sm md:text-lg">
          Discover the Perfect Fusion of Fashion and Sass - Elevate Style Co.
        </p>
      </section>
      <section className="text-center cursor-pointer hover:scale-105  duration-300">
        <img src={hero} />
      </section>
    </div>
  );
};

export default Hero;
