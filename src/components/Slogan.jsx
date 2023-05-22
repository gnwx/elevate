import React from "react";

const Slogan = () => {
  return (
    <div className=" mx-auto flex flex-col gap-4   text-center py-20 md:px-60 px-8 md:gap-10  bg-orange-400">
      <h1 className="text-2xl md:text-4xl text-white font-bold">
        Experience the <span className="text-[#1B3660]">Elevate</span>
      </h1>
      <p className="md:font-semibold md:leading-7 text-sm  md:text-xl">
        Step into the world of Elevate with our interactive demo. Try out
        different looks, mix and match outfits, and explore our collections
        before making your fashion-forward choices.
      </p>
      <button className="rounded-full shadow-white shadow-md bg-[#1B3660] w-36 py-2  md:w-40 self-center text-white md:py-3 hover:scale-105 duration-200 ">
        Try the Demo
      </button>
    </div>
  );
};

export default Slogan;
