import React from 'react'
import { icon } from '../assets';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='font-inter xl:px-32 lg:px-0 px-3 justify-center flex flex-col'>
      <div className='lg:mb-[150px] mb-[40px] grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:justify-items-center justify-items-start '>
      <div className="flex flex-col items-start gap-3 mb-4 md:mb-6 lg:mb-0 ">
        <h2 className='lg:text-[18px] text-[15px] lg:leading-[30px] leading-5 font-bold mb-1 cursor-pointer hover:text-pink-500 '>Explore</h2>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>About Teaser Name</p>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>Our Solutions</p>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>Our Blog</p>
      </div>

      <div className="flex flex-col items-start gap-3 mb-4 md:mb-6 lg:mb-0">
        <h2 className='lg:text-[18px] text-[15px] lg:leading-[30px] leading-5 font-bold mb-1 cursor-pointer hover:text-pink-500 '>Expertise</h2>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>Cloud Integration Solutions</p>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>Custom Web Development</p>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>Data Analytics and Insights</p>
      </div>

      <div className="flex flex-col items-start gap-3 mb-4 lg:mb-0">
        <h2 className='lg:text-[18px] text-[15px] lg:leading-[30px] leading-5 font-bold mb-1 cursor-pointer hover:text-pink-500 '>Services</h2>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>Cybersecurity & Compliance</p>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>AI-Powered Automation</p>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>User Experience Design</p>
      </div>

      <div className="flex flex-col items-start gap-3 mb-4 lg:mb-0">
        <h2 className='lg:text-[18px] text-[15px] lg:leading-[30px] leading-5 font-bold mb-1 cursor-pointer hover:text-pink-500 '>Info</h2>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>FAQ</p>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>Documentation</p>
        <p className='text-[#737373] lg:text-[14px] text-[13px] lg:leading-[20px] leading-4 cursor-pointer hover:text-pink-500'>Get in touch</p>
      </div>
    </div>

    <div className="flex flex-col pb-[30px] gap-3 items-start justify-center">
      <div className="flex items-center w-full justify-center gap-3 mb-3">
        <img className='w-[22ppx] h-[22px] cursor-pointer hover:text-pink-500' src={icon} alt="" />
        <FaTwitter className='cursor-pointer hover:text-pink-500' size={22} />
        <FaLinkedin className='cursor-pointer hover:text-pink-500' size={22} />
        <BsDiscord className='cursor-pointer hover:text-pink-500' size={22} />
      </div>

      <div className='justify-center w-full items-center flex'>
            <p className='md:text-[13px] text-[11px]  '>© 2023 Teaser Name. All Rights Reserved. <br />
      Developed by <span className='font-bold hover:text-pink-500 cursor-pointer'>Daisy Dawn (agboella@gmail.com)</span> using <span className='font-bold'>React and Tailwind CSS</span></p>
      </div>
    </div>
    </div>
  )
}

export default Footer