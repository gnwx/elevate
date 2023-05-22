import React from "react";

const Testimonial = ({ test }) => {
  return (
    <div className="  mx-10 w-[340px] max-w-md flex flex-col   hover:scale-105 duration-200 cursor-pointer shadow-lg">
      <section className="bg-gray-300 py-8 px-4 rounded-t-md ">
        <p>{test.comment}</p>
      </section>
      <section className="flex items-center gap-5 py-4 px-2 bg-gray-200 rounded-b-md">
        <div className="w-14 ">
          <img
            src={test.image}
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-bold ">{test.author}</h1>
          <p className="text-gray-500 text-sm">{test.authorRole}</p>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
