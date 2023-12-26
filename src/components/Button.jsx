import React from 'react'

const Button = ({text}) => {
  return (
    <button className='lg:py-[12px] py-[6px] px-[20px] lg:px-[30px] rounded-lg flex justify-center items-center hover:bg-gray-950 hover:text-pink-500 bg-[#171717] text-[#F5F5F5] text-center text-[13px] leading-5 gap-1 ' type='button'> {text} </button>
  )
}

export default Button