import React from "react";
import Link from "next/link";

const PlanCard = ({ data }) => {
  return (
    <div className="p-8 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded w-96 h-96 rounded-2xl flex flex-col justify-between">
      <div>
        <h1 className="text-2xl font-[600]">{data.title}</h1>
        <p className="font-[500] mt-4">{data.desc}</p>
      </div>
      <Link
        href={data.url}
        className="py-3 rounded px-6 text-center block bg-[#000000] text-white"
      >
        Try Now
      </Link>
    </div>
  );
};

export default PlanCard;
