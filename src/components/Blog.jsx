import React from "react";
import { blog, news } from "../assets";
import Button from "./Button";

const Blog = () => {
  return (
    <div
      id="blog"
      className="flex justify-center items-center flex-col xl:px-32 lg:px-0 px-3 mb-[50px] font-inter"
    >
      <div className="flex items-center justify-between gap-2 px-2 lg:px-[15px] py-2 lg:py-[3px] text-[12px] lg:text-[14px] rounded-full border-[#404040] border-[1px]">
        <p>Tech News</p>
        <span>
          {" "}
          <img className="lg:w-[20px] lg:h-[20px] w-[15px] h-[15px] " src={news} alt="" />{" "}
        </span>
      </div>

      <h2 className="head-text mt-7 mb-4 text-[25px] md:text-[30px] lg:text-[40px] font-bold leading-7 md:leading-9 lg:leading-10 xl:leading-[60px] w-[70%] xl:w-[50%] text-center ">
        Our Blog & News
      </h2>
      <p className="xl:w-[50%] w-[70%] text-center text-[14px] text-[#737373] mb-8">
        We share essential insights from the technology sector, AI, and the
        world of software development.
      </p>

      <div className="grid md:grid-cols-3 grid-cols-1 bg-[#0A0A0A] border-[#404040] border-[1px] rounded-[24px]">
        <div className="lg:py-8 md:py-5 py-4 lg:px-8 md:px-5 px-4 ">
          <h2 className="lg:text-[18px] text-[16px] hover:text-pink-500 cursor-pointer text-[#F5F5F5] font-bold lg:leading[30px] leading-6 lg:mb-[20px] mb-[12px] ">
            Unveiling the Art of Web Design: A Step-by-Step Guide
          </h2>
          <p className="text-[#D4D4D4] lg:text-[15px] text-[13px] leading-[20px] mb-[15px] ">
            In the ever-evolving digital landscape, a visually appealing
            anduser-friendly website is crucial for success. Whether you're
            aseasoned designer or a novice looking to dip your toes into the
            world of web design, this step-by- step guide will help you create a
            stunning and effective…
          </p>
          <div className="w-[50%]">
            <Button text="Learn More" />
          </div>
        </div>

        <div className="flex items-center md:col-span-2 justify-center">
          <img
            className="w-full rounded-[24px] h-full "
            src={blog}
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Blog;
