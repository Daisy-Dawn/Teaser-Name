import React from 'react'
import { ai, api, base } from '../assets'
import Button from './Button'

const FAQ = () => {
  return (
    <div id='faq' className='flex justify-center items-center flex-col xl:px-32 lg:px-0 px-3 mb-[50px] font-inter'>
      <div className='flex items-center justify-between gap-2 px-2 lg:px-[15px] py-2 lg:py-[3px] text-[12px] lg:text-[14px] rounded-full border-[#404040] border-[1px]'>
        <p>Knowledge Base</p>
        <span> <img className='w-[20px] h-[20px]' src={base} alt="" /> </span>
      </div>

      <h2 className='head-text mt-7 mb-4 text-[25px] md:text-[30px] lg:text-[40px] font-bold leading-7 md:leading-9 lg:leading-10 w-[70%] xl:w-[50%] text-center '>FAQ & Documentation</h2>
      <p className='xl:w-[50%] w-[70%] text-center text-[14px] text-[#737373] mb-8'>Teaser name provides customers complete entry to knowledge base API and documentation.</p>

      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-4'>
      <div className='flex items-center justify-center rounded-[24px] border-[#404040] border-[1px]'>
          <img className='w-full rounded-[24px] h-full ' src={ai} alt="" />
        </div>

        <div className='flex flex-col gap-1 lg:py-8 py-4 md:py-6 lg:px-8 md:px-6 px-4 rounded-[24px] bg-[#0A0A0A] border-[#404040] border-[1px]'>
          <span className='lg:mb-[10px] mb-1'> <img className='lg:w-[40px] lg:h-[40px] md:w-[30px] md:h-[30px] w-[20px] h-[20px] ' src={api} alt="" /> </span>
          <h2 className='lg:text-[18px] md:text-[17px] text-[16px] hover:text-pink-500 cursor-pointer text-[#F5F5F5] font-bold lg:leading[30px] leading-5 lg:mb-[20px] mb-[15px] '>Full API Access</h2>
          <p className='text-[#D4D4D4] lg:text-[15px] md:text-[14px] text-[13px] lg:leading-[20px] leading-4 mb-[15px] ' >Sign up and access our intuitive platform. Upload your data effortlessly, then customize preferences. Our robust tools analyze and generate insights promptly. Collaborate seamlessly with team members using integrated communication features. Watch your operations optimize as our app streamlines workflows and drives efficiency for your success.</p>
          <div className='w-[50%]'>
          <Button text="Learn More" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ