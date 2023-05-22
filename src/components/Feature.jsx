import React from "react";

const Feature = ({ feature }) => {
  return (
    <div
      className={` max-w-4xl  md:mx-auto flex-col md:flex-row flex items-center md:my-20 my-10 py-10  md:gap-20 text-center md:text-left gap-6  mx-4  ${
        feature.id % 2 !== 0 && "md:flex-row-reverse "
      }`}
    >
      <section className="md:w-[350px] w-[250px] shadow-lg">
        <img src={feature.image} className="w-full h-full object-cover" />
      </section>
      <section className="justify-center  md:w-1/2 flex flex-col md:gap-4 ">
        <h1 className="text-xl md:text-3xl text-[#1B3660] font-bold">
          {feature.title}
        </h1>
        <p className="md:leading-7 leading-6 text-sm md:text-lg  mx-8 md:mx-0 ">
          {feature.description}
        </p>
      </section>
    </div>
  );
};

export default Feature;
