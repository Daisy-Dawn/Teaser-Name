import React, {useState} from 'react'
import { MdLightMode, MdMenuOpen, MdClose } from "react-icons/md";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [active, setActive] = useState("Home")

    const navLinks = [
        {
            id: 'home',
            title: "Home"
        },
        {
            id: 'services',
            title: "Services"
        },
        {
            id: 'solution',
            title: "Solution"
        },
        {
            id: 'faq',
            title: "FAQ"
        },
        {
            id: 'about',
            title: "About"
        },
        {
            id: 'blog',
            title: "Blog"
        },
    ]
  return (
    <nav className='px-0 lg:px-16 w-full font-inter flex items-center justify-between py-6'>
        <h2 className='text-[16px] flex items-center justify-start md:basis-1/4  basis-2/4 md:text-[17px] lg:text-[20px] font-bold md:mr-3 lg:mr-0'>Teaser Name</h2>

        <ul className='hidden list-none text-[16px] md:text-[14px] lg:text-[16px] cursor-pointer gap-6 md:gap-3 md:flex basis-2/4 items-center justify-center'>
            {navLinks.map((navLink, index) => (
                <li key={navLink.id} className={`hover:text-pink-500 hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${active === navLink.title ? "text-zinc-600" : "text-white"}`}
                onClick={() => setActive(navLink.title)}
                >
                    <a href={`#${navLink.id}`}> {navLink.title} </a>
                </li>
            ))}
        </ul>

        <div className='hidden text-[14px] basis-1/4  md:flex gap-2 lg:gap-5 justify-end items-center'>
            <button className=' hover:text-pink-500 cursor-pointer py-2 px-3 lg:px-4 rounded-full bg-[#171717]'><MdLightMode /></button>
            <button className='hover:text-pink-500 flex items-center justify-center py-2 px-4 lg:px-8 rounded-full bg-[#171717] cursor-pointer' type='button'>Sign Up</button>
        </div>

        <div className='flex md:hidden flex-1 justify-end items-center'>
        <span onClick={() => setToggle(!toggle)}> {toggle ? <MdClose className='cursor-pointer' size={28} /> : <MdMenuOpen className='cursor-pointer' size={28} />} </span>

        <div className={`${!toggle ? "hidden" : "flex" }  px-8 flex-col py-6 absolute top-20 bg-slate-300 right-0 mx-8 my-2 min-w-[40%] rounded-xl sidebar`}>

        <ul className='list-none text-[14px] cursor-pointer gap-4 flex flex-col flex-1 items-start justify-end'>
            {navLinks.map((navLink, index) => (
                <li key={navLink.id + index} className={`hover:text-pink-500 font-medium hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${active === navLink.title ? "text-zinc-600" : "text-black"}`}
                onClick={() => setActive(navLink.title)}
                >
                    <a href={`#${navLink.id}`}> {navLink.title} </a>
                </li>
            ))}
        </ul>

        <div className='flex flex-col text-[14px] flex-1 gap-5 justify-end items-start'>
            <button className='mt-4 hover:text-pink-500 cursor-pointer py-1 px-2 rounded-full bg-[#171717]'><MdLightMode /></button>
            <button className='hover:text-pink-500 flex text-[14px] items-center justify-center py-1 px-4 rounded-full bg-[#171717] cursor-pointer' type='button'>Sign Up</button>
        </div>

        </div>
        </div>
    </nav>
  )
}

export default Navbar