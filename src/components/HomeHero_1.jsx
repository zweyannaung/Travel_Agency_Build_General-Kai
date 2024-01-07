import React from 'react'
import { useSelector } from 'react-redux'
import { Star,PinMap,XOctagon,Wallet,StarFill,StarHalf } from 'react-bootstrap-icons'
import SlideShowOne from './SlideShowOne'

const HomeHero_1 = () => {
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
  return (
    <>
    <div className='bg-green-100 min-h-screen w-screen lg:py-20 DD:py-10 LL:py-0 space-y-5 lg:space-y-6'>
      <div className={`flex flex-col  justify-center items-center text-center  mx-auto w-4/5   ${pageSub === "Myanmar" && 'font-MM py-14 lg:py-16 xl:py-16 DD:py-24 LL:py-36 LL:w-3/5 2xl:w-4/5 space-y-6 md:space-y-8'} ${pageSub === "English" && 'font-EN LL:w-3/6 2xl:w-2/3 py-14 lg:py-16 xl:py-16 DD:py-24 LL:py-36 space-y-2 md:space-y-10'}`}>
          <h1 className={`w-screen px-[1px] font-bold md:font-bold  text-green-700 tracking-wide ${pageSub === "Myanmar" && 'text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-[50px] lg:leading-10'} ${pageSub === "English" && 'leading-[46px] text-4xl LL:text-5xl md:leading-none'}`}>{motherSub?.home_sub_1}</h1>
          <div className={` px-5 md:px-8  w-screen lg:w-screen xl:w-full space-y-2 ${pageSub === "Myanmar" && " text-justify text-lg md:text-xl"} ${pageSub === "English" && "text-justify md:text-center text-lg md:text-xl"}`}>
            <p className={` ${pageSub === 'Myanmar' ? "leading-10": "leading-8"} tracking-wide text-slate-500 whitespace-pre-wrap`}>{motherSub?.home_sub_2}</p>
            <p className={` ${pageSub === 'Myanmar' ? "leading-10": "leading-8"} tracking-wide text-slate-500 whitespace-pre-wrap`}>{motherSub?.home_sub_3}</p>
          </div>
          {/* flex flex-col lg:flex-row space-y-5 md:space-y-0 w-screen md:px-6 items-center justify-center text-base lg:text-[21px] font-semibold text-slate-800 tracking-wider ${pageSub === "Myanmar" && 'space-x-0  md:grid md:grid-cols-2 md:gap-3 lg:space-x-7 lg:flex'} ${pageSub === "English" && 'space-x-0 md:space-x-7'} */}
          <div className={`grid grid-cols-4 w-screen 2xl:flex 2xl:container justify-between items-center px-0 xl:px-10 gap-0 MIN2:gap-y-8 md:gap-y-10 xl:gap-y-0 text-xl space-y-5 MIN2:space-y-0 md:space-y-0 xl:space-y-0 lg:text-[21px] font-medium text-slate-700 tracking-wider ${pageSub === "Myanmar" && 'px-5 space-x-0 2xl:space-x-1 md:text-xl lg:text-xl xl:text-lg'} ${pageSub === "English" && 'py-5 md:py-0 space-x-0 md:space-x-7 md:text-xl lg:text-lg'}`}>
            <div className={`col-span-4 MIN2:col-span-2 md:col-span-2 xl:col-span-1 flex items-center justify-center ${pageSub === "Myanmar" && ''}`}><Star className='text-yellow-500 inline-block me-2' /><span className='text-green-800'>{motherSub?.home_sub_4}</span></div>
            <div className={`col-span-4 MIN2:col-span-2 md:col-span-2 xl:col-span-1 flex items-center justify-center ${pageSub === "Myanmar" && ''}`}><PinMap className='text-blue-600 inline-block me-2' /><span className='text-green-800'>{motherSub?.home_sub_5}</span></div>
            <div className={`col-span-4 MIN2:col-span-2 md:col-span-2 xl:col-span-1 flex items-center justify-center ${pageSub === "Myanmar" && ''}`}><XOctagon className='text-red-500 inline-block me-2' /><span className='text-green-800'>{motherSub?.home_sub_6}</span></div>
            <div className={`col-span-4 MIN2:col-span-2 md:col-span-2 xl:col-span-1 flex items-center justify-center ${pageSub === "Myanmar" && ''}`}><Wallet className='text-slate-600 inline-block me-2' /><span className='text-green-800'>{motherSub?.home_sub_7}</span></div>
          </div>
          <div className='flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-7 items-center'>
            <div className='flex items-end space-x-2'>
              <h1 className='font-bold text-3xl text-green-800'>4.5</h1>
              <div className='flex flex-col items-center space-y-1'>
                <div className='flex justify-center text-yellow-400 space-x-2'>
                <StarFill/><StarFill/><StarFill/><StarFill/><StarHalf/>
                </div>
                <div className='text-sm text-green-800'>
                  Clients Love Us!
                </div>
              </div>
            </div>
            <button className='select-none text-gray-200 bg-slate-800 border-2 outline-1 outline-slate-800 border-slate-800 rounded-2xl tracking-wider text-sm font-bold px-5 py-3 hover:bg-slate-700 transition-all delay-100'>{motherSub?.home_sub_8}</button>
          </div>
      </div>
      <div className={`w-screen px-3 lg:px-14 space-y-10 bg-green-100 ${pageSub === "Myanmar" ? 'font-MM' : "font-EN"}`}>
        <h1 className={` text-center px-[1px] font-bold md:font-bold text-[33px] sm:text-3xl lg:text-4xl xl:text-5xl text-slate-800 tracking-wide leading-[50px] lg:leading-10 ${pageSub === "English" && 'leading-[45px] text-4xl md:leading-none'}`}>{motherSub?.slideShowOne_main_title}</h1>
        <SlideShowOne/>
      </div>
    </div>
    </>
  )
}

export default HomeHero_1