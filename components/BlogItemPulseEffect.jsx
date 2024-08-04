import React from "react";

const BlogItemPulseEffect = () => {
  return (
    <div className="min-w-[328px]   sm:w-[300px] h-[375px]  bg-white border border-black">
      {" "}
      <div className="animate-pulse ">
        {/* image */}
        <div className=" w-full min-h-[150px] bg-slate-700"></div>
        {/* tag */}
        <div className="m-5 mt-5 px-1 bg-slate-700  h-[20px] text-sm"></div>
        {/* main content */}
        <div className="p-5">
          <div className="mb-2 text-lg bg-slate-700 w-full h-[28px] "></div>
          <div className="mb-3  bg-slate-700 h-[20px]"></div>
          <div className="   bg-slate-700 h-[24px]"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogItemPulseEffect;
