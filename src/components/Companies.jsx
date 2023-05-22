import React from "react";
import companies from "../assets/companies.svg";
const Companies = () => {
  return (
    <div className="items-center  justify-center flex flex-col md:my-20 cursor-pointer py-4 md:py-8 px-4 ">
      <p className="text-description ">Powered by</p>
      <img src={companies} />
    </div>
  );
};

export default Companies;
