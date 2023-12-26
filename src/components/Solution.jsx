import React from 'react'
import { solution1, solution2, solution3, solution4, umbrella } from '../assets'

const Solution = () => {
  return (
    <div id='solution' className='flex justify-center items-center flex-col xl:px-32 lg:px-0 px-3 mb-[50px] font-inter'>
      <div className='flex items-center justify-between gap-2 px-2 lg:px-[15px] py-2 lg:py-[3px] text-[12px] lg:text-[14px] rounded-full border-[#404040] border-[1px]'>
        <p>Our Solution</p>
        <span> <img className='w-[20px] h-[20px]' src={umbrella} alt="" /> </span>
      </div>

      <h2 className='head-text mt-7 mb-4 text-[25px] md:text-[30px] lg:text-[40px] font-bold leading-7 md:leading-9 lg:leading-10 w-[70%] xl:w-[50%] text-center '>Streamlining operations, unleashing seamless digital solutions</h2>
      <p className='xl:w-[50%] w-[70%] text-center text-[14px] text-[#737373] mb-8'>Innovative solutions for seamless digital transformation.</p>

      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-5 gap-4'>
      <div className='flex flex-col rounded-[24px] border-[#404040] border-[1px]'>
          <img className='w-full rounded-tr-[24px] rounded-tl-[24px] h-full object-cover' src={solution1} alt="" />
          <h2 className='px-[25px] py-[5px] text-left text-[16px] mt-[10px] text-[#F5F5F5] font-bold leading[30px] mb-[5px] cursor-pointer hover:text-pink-500'>Teaser Name Solutions</h2>
      <p className='text-[#A3A3A3] px-[25px] mb-[25px] text-[13px] leading-[20px]  '>A comprehensive business service app offering efficient solutions for seamless operations and growth.</p>
        </div>

        <div className='flex flex-col rounded-[24px] border-[#404040] border-[1px]'>
          <img className='w-full rounded-tr-[24px] rounded-tl-[24px] h-full object-cover' src={solution2} alt="" />
          <h2 className='px-[25px] py-[5px] text-left text-[16px] mt-[10px] text-[#F5F5F5] font-bold leading[30px] mb-[5px] cursor-pointer hover:text-pink-500'>Teaser Name Innovate</h2>
      <p className='text-[#A3A3A3] px-[25px] mb-[25px] text-[13px] leading-[20px]  '>A comprehensive business service app offering efficient solutions for seamless operations and growth.</p>
        </div>

        <div className='flex flex-col rounded-[24px] border-[#404040] border-[1px]'>
          <img className='w-full rounded-tr-[24px] rounded-tl-[24px]  h-full object-cover' src={solution3} alt="" />
          <h2 className='px-[25px] py-[5px] text-left text-[16px] mt-[10px] text-[#F5F5F5] font-bold leading[30px] mb-[5px] cursor-pointer hover:text-pink-500'>Teaser Name Connect</h2>
      <p className='text-[#A3A3A3] px-[25px] mb-[25px] text-[13px] leading-[20px]'>A networking app facilitating connections, bridging users, and businesses for enhanced communication and partnerships.</p>
        </div>

        <div className='flex flex-col rounded-[24px] border-[#404040] border-[1px]'>
          <img className='w-full rounded-tr-[24px] rounded-tl-[24px] h-full object-cover' src={solution4} alt="" />
          <h2 className='px-[25px] py-[5px] text-left text-[16px] mt-[10px] text-[#F5F5F5] font-bold leading[30px] mb-[5px] cursor-pointer hover:text-pink-500'>Teaser Name Connect</h2>
      <p className='text-[#A3A3A3] px-[25px] mb-[25px] text-[13px] leading-[20px]'>A networking app facilitating connections, bridging users, and businesses for enhanced communication and partnerships.</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Solution