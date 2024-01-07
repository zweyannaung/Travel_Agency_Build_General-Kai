import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const Subscribe = () => { 
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
  return (
    <div className='bg-green-50 w-screen px-5 md:px-10 DD:px-32 LL:px-0 LL:w-8/12 mx-auto py-12 LL:pt-32'>
      <div className={`relative overflow-hidden flex flex-col justify-between h-[370px] MIN:h-[320px] MIN1:h-[310px] MIN2:h-[290px] md:h-[370px] rounded-2xl  p-7 md:py-12 md:px-40 bg-gray-200 ${pageSub === "Myanmar" ? "font-MM": "font-EN"}`} >
        <img className='absolute top-7 left-2 h-20 md:top-14 lg:top-12 md:left-5 lg:left-28 2xl:left-40 md:md:h-32 lg:h-40 mix-blend-darken hidden MIN2:block ' src="https://www.clipartmax.com/png/middle/33-338688_most-popular-categories-lecturer-cartoon-png.png" alt="" />
        <img className='absolute top-8 right-3 h-16 md:-top-5 lg:-top-8 md:-right-8 lg:-right-10 md:h-40 lg:h-48 mix-blend-darken hidden MIN2:block ' src="https://clipart-library.com/images/XdT47gyie.png" alt="" />
        <img className='absolute -bottom-6 md:-bottom-8 lg:-bottom-10 -right-4 md:-right-7 lg:-right-9 h-36 md:h-52 lg:h-60 mix-blend-darken hidden MIN2:block ' src="https://www.pinclipart.com/picdir/middle/499-4999470_palm-tree-clip-art-free.png" alt="" />
        <img className='absolute -bottom-2 lg:-bottom-5 -left-10 lg:-left-5 h-36 md:h-44 lg:h-56 mix-blend-darken hidden MIN2:block ' src="https://www.pngitem.com/pimgs/m/171-1712198_cartoon-coconut-tree-png-transparent-png-png-download.png" alt="" />
        <h1 className={`text-[30px] md:text-[40px] xl:text-[50px] lg:w-[450px] xl:w-[680px] mx-auto font-bold  text-center leading-9 md:leading-[50px] xl:leading-[60px]`}>Subscribe & Get Special Discount!</h1>
        <p className=' text-center text-sm lg:w-[500px] xl:w-[650px] mx-auto leading-6 MIN2:text-base text-slate-600'>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. </p>
        <div className=' relative lg:w-[500px] xl:w-[650px] mx-auto '>
            {/* <input className='w-full border-none focus:border-slate-900 text-slate-700 bg-green-50 px-3 xl:px-4 py-4 xl:py-5 rounded-xl text-sm xl:text-base shadow-lg' type="email" placeholder='Enter your email' /> */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
              </div>
              <input type="text" id="input-group-1" className="bg-green-50 border-none text-slate-700 focus:ring-0 focus:border-none block w-full px-3 xl:px-10 py-4 xl:py-5 rounded-xl text-sm xl:text-base shadow-lg  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-blue-500" placeholder="Enter your email"/>
            </div>
            <a href='#' className='absolute top-[12%] xl:top-[18%] right-[2%] w-10 h-10 flex items-center justify-center rounded-full bg-[#0B0A12] '><ArrowRight className='text-lg text-white'/></a>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
