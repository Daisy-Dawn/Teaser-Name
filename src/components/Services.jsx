import React from 'react'
import { service1, service2, code } from '../assets';
import { cloud } from '../assets';
import { settings } from '../assets';

const Services = () => {
  return (
    <section id='services' className='flex justify-center items-center flex-col xl:px-32 lg:px-0 px-3 mb-[50px] font-inter'>
      <div className='flex items-center justify-between gap-2 px-2 lg:px-[15px] py-2 lg:py-[3px] text-[12px] lg:text-[14px] rounded-full border-[#404040] border-[1px]'>
        <p>Our Services</p>
        <span> <img className='w-[20px] h-[20px] ' src={settings} alt="" /> </span>
      </div>

      <h2 className='head-text mt-7 mb-4 text-[25px] md:text-[30px] lg:text-[40px] font-bold leading-7 md:leading-9 lg:leading-10 w-[70%] xl:w-[50%] text-center '>Transform your tech business with tailored services</h2>
      <p className='xl:w-[50%] w-[70%] text-center text-[14px] text-[#737373] mb-8'>Websites / Applications / Web3 / Blockchain</p>

      <div className='grid lg:grid-cols-3 grid-cols-2 mx-auto justify-center lg:gap-5 gap-3'>
        <div className='flex flex-col col-span-2 lg:col-span-1  py-5 px-6 lg:py-5 lg:px-8  rounded-[24px] border-[#404040] border-[1px]'>
          <span className='mb-[10px]'> <img className='lg:w-[30px] w-[20px] h-[20px] lg:h-[30px]' src={cloud} alt="" /> </span>
          <h2 className='lg:text-[18px] text-[16px] hover:text-pink-500 cursor-pointer text-[#F5F5F5] font-bold leading[30px] mb-[5px] '>Lorem Ipsum</h2>
          <p className='lg:text-[13px] text-[12px] text-[#D4D4D4] leading-[18px] mb-[20px] '>Create Fast And Simple</p>
          <p className='text-[#A3A3A3] lg:text-[15px] text-[13px] leading-[20px]  ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, eos voluptatem quo laborum perferendis eligendi voluptas nam dignissimos hic dolorem inventore…</p>
        </div>

        <div className='flex items-center justify-center col-span-2 lg:col-span-2 rounded-[24px] border-[#404040] border-[1px]'>
          <img className='w-full rounded-[24px] h-full object-cover' src={service1} alt="" />
        </div>

        <div className='flex items-center justify-center rounded-[24px] border-[#404040] border-[1px]'>
          <img className='w-full rounded-[24px] h-full object-cover' src={service2} alt="" />
        </div>

        <div className='flex flex-col py-3 px-3 lg:py-5 lg:px-8 justify-center lg:justify-start  bg-[#0A0A0A] rounded-[24px] border-[#404040] border-[1px]'>
          <span className='mb-[10px]'> <img className='lg:w-[30px] w-[20px] h-[20px] lg:h-[30px]' src={code} alt="" /> </span>
          <h2 className='lg:text-[18px] text-[16px] text-[#F5F5F5] font-bold leading[30px] mb-[5px] cursor-pointer hover:text-pink-500 '>Custom Web Development</h2>
          <p className='lg:text-[13px] text-[12px] text-[#D4D4D4] leading-[18px] mb-[20px] '>SPA / MPAe</p>
          <p className='text-[#A3A3A3] lg:text-[15px] text-[13px] leading-[20px]  ' >Tailored website solutions to meet specific business needs and goals.</p>
        </div>

        <div className='flex flex-col py-5 col-span-2 lg:col-span-1 px-6 lg:py-5 lg:px-8 gradient-bg rounded-[24px] border-[#404040] border-[1px]'>
          <span className='mb-[10px]'> <img className='lg:w-[30px] w-[20px] h-[20px] lg:h-[30px]' src={code} alt="" /> </span>
          <h2 className='lg:text-[18px] text-[16px] text-[#F5F5F5] font-bold leading[30px] mb-[5px] cursor-pointer hover:text-pink-500 '>Custom Web Development</h2>
          <p className='lg:text-[13px] text-[12px] text-[#D4D4D4] leading-[18px] mb-[20px] '>SPA / MPAe</p>
          <p className='text-[#A3A3A3] lg:text-[15px] text-[13px] leading-[20px]  ' >Tailored website solutions to meet specific business needs and goals.</p>
        </div>
      </div>
    </section>
  )
}

export default Services