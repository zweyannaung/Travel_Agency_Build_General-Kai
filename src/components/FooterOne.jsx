import React from 'react'
import { SiYourtraveldottv } from "react-icons/si";
import { useSelector } from 'react-redux';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const FooterOne = () => {
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
  return (
    <div className={` bg-[#0B0A12] ${pageSub === "Myanmar" ? "font-MM" : "font-EN"}`}>
      <div className='flex flex-col h-[500px] MIN2:h-[400px] px-10 justify-center items-center space-y-8 DD:space-y-6 min-w-full'>
        <div className=''>
            <a href="#" className="flex items-center space-x-1 md:space-x-2">
            <SiYourtraveldottv className='text-blue-700 text-5xl md:text-[58px] ' />
            <span className='text-2xl md:text-3xl  text-blue-700 font-semibold tracking-wide' style={{textShadow:"2px 2px yellow"}}>Travel Agency</span>
            </a>
        </div>
        <p className='text-green-50 text-center leading-6 lg:w-[50%] xl:w-[45%] DD:w-[38%] LL:w-[30%]'>
        Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.
        </p>
        <div className='grid grid-cols-4 MIN2:grid-cols-6 gap-5 MIN2:gap-1 w-full md:w-[90%] lg:w-[55%] xl:w-[45%] DD:w-[38%] LL:w-[28%] text-green-50'>
            <span className='cursor-pointer col-span-1 '>About</span>
            <span className='cursor-pointer col-span-1'>Terms</span>
            <span className='cursor-pointer col-span-1'>Privacy</span>
            <span className='cursor-pointer col-span-1 text-end MIN2:text-start'>Career</span>
            <span className='cursor-pointer col-span-2 MIN2:col-span-1'>Contact us</span>
            <span className='cursor-pointer  col-span-2 MIN2:col-span-1 text-end MIN2:text-center'>Cookies</span>
        </div>
        <div className='flex justify-center items-center space-x-3'>
           <a href="" className='flex justify-center items-center h-9 w-9 rounded-lg duration-300 hover:bg-gray-300 bg-green-50'><FaFacebookF className='text-sm text-blue-700'/></a>
           <a href="" className='flex justify-center items-center h-9 w-9 rounded-lg duration-300 hover:bg-gray-300 bg-green-50'><FaInstagram  className='text-sm text-green-700'/></a>
           <a href="" className='flex justify-center items-center h-9 w-9 rounded-lg duration-300 hover:bg-gray-300 bg-green-50'><FaTwitter  className='text-sm text-blue-500'/></a>
           <a href="" className='flex justify-center items-center h-9 w-9 rounded-lg duration-300 hover:bg-gray-300 bg-green-50'><FaLinkedinIn  className='text-sm text-blue-800'/></a>
        </div>
        <p className=' text-[14px] w-full MIN1:w-4/5 text-center text-slate-400'>Copyrights &copy;2024 Travel-Agency. Build by BlackBush.</p>
      </div>
    </div>
  )
}

export default FooterOne
