import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slide.css';

// import required modules
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, CheckLg } from 'react-bootstrap-icons';
import { useSelector } from 'react-redux'
import OfferInSlideTwo from './OfferInSlideTwo';

const SlideShowTwo = () => {
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
  return (
    <div className={`bg-green-50 w-screen  ${pageSub === "Myanmar" ? "font-MM" : "font-EN"}`}>
        <div className='min-h-screen mx-auto w-full flex flex-col justify-center px-3 py-10 MIN1:py-12 md:py-32 lg:py-14 LL:py-0 LL:pt-16 LL:pb-5 lg:px-9 space-y-8'>
            <div className='flex flex-col MIN2:flex-row md:flex-row MIN1:justify-between MIN2:px-3 lg:px-0 xl:justify-around'>
                <h1 className={` text-center px-[1px] font-extrabold md:font-extrabold text-3xl sm:text-3xl lg:text-4xl xl:text-5xl text-slate-800 tracking-normal leading-[50px] lg:leading-10 ${pageSub === "English" && 'leading-[45px] text-3xl md:leading-none'}`}>{motherSub?.SlideShowTwo_title_sub}</h1>
                <button className='select-none text-gray-200 bg-slate-800 border-2 outline-1 outline-slate-800 border-slate-800 rounded-lg tracking-wider text-sm font-extrabold px-3 py-2 hover:bg-slate-700 transition-all delay-100'>See all rooms</button>
            </div>
            <div className=''>
            <Swiper
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            }}
            autoplay={{
            delay: 5000,
            
            disableOnInteraction: false,
            }}
            loop={true}
            speed= {600}
            navigation={{
            nextEl:'.next_slide',
            prevEl:'.pre_slide'
            }}
            modules={[Navigation,Autoplay]}
            className="mySwiper relative select-none group rounded-3xl gap-0"
        >
        <SwiperSlide>
          <div className=" h-[592px] MIN:h-[602px] xl:h-[609px] w-full">
              <img className=" w-full h-full object-cover object-center  border border-gray-300" src="https://r1.wallpaperflare.com/path/808/897/237/interior-hotel-rendering-visualization-5698da3eee925522bce39ea1571de182.jpg?timestamp=1702396893548" alt="" />
              {/*  h-[370px] MIN2:h-[280px] md:h-[360px] lg:h-[330px] DD:h-[480px] */}
            <div className={`absolute px-4 md:px-12 DD:px-10 py-6 md:py-10 space-y-3 MIN2:space-y-2 DD:space-y-5 flex flex-col items-start justify-center rounded-2xl md:rounded-lg bottom-[12px] MIN2:bottom-3 md:bottom-2 lg:bottom-14 start-[3%] MIN2:start-[2%]  md:right-[1.4%] MIN3:right-[1%] lg:right-14 md:start-auto bg-green-50 MIN2:w-[96%] w-[94%] md:w-[62%] lg:w-[56%] xl:w-[40%] DD:w-[24%] 2xl:w-[25%] LL:w-[27%] z-10 ${pageSub === "Myanmar" && " h-[450px] MIN2:h-[280px] md:h-[360px] lg:h-[330px] DD:h-[480px]"}`}>
                <div className=''><h1 className={`text-2xl text-start font-bold text-slate-900 ${pageSub === "English" ? "" : ""}`}>{motherSub?.SlideShowTwo_subTitle_1}</h1></div>
                <div className={`text-sm MIN2:text-base font-extralight text-start text-slate-900 tracking-widest ${pageSub === "Myanmar" && "text-sm"}`}>{motherSub?.SlideShowTwo_sub_1_1}</div>
                <div><p className={`text-base text-start text-slate-600 ${pageSub === "Myanmar" && "text-sm leading-[25px]"}`}>{motherSub?.SlideShowTwo_sub_1_2}</p></div>
                <div className='flex flex-wrap w-full justify-start'>
                  <div className='flex space-x-1 text-xl font-bold me-4 py-0 MIN:py-1'><CheckLg className='text-green-800'/><span className='text-base'>{motherSub?.SlideShowTwo_sub_1_3}</span></div>
                  <div className='flex space-x-1 text-xl font-bold me-4 py-0 MIN:py-1'><CheckLg className='text-green-800'/><span className='text-base'>{motherSub?.SlideShowTwo_sub_1_4}</span></div>
                  <div className='flex space-x-1 text-xl font-bold me-4 py-0 MIN:py-1'><CheckLg className='text-green-800'/><span className='text-base'>{motherSub?.SlideShowTwo_sub_1_5}</span></div>
                </div>
                <div>
                  <button className='select-none text-gray-200 bg-sky-600 border-2 outline-1 rounded-xl tracking-wider text-lg font-extrabold px-4 py-1 hover:bg-sky-800 transition-all delay-100 flex space-x-1 items-center'><span>{motherSub?.SlideShowTwo_bottom_sub}</span><ArrowRight/></button>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[592px] MIN:h-[602px] xl:h-[609px] w-full">
              <img className=" w-full h-full object-cover object-center border border-gray-300" src="https://r4.wallpaperflare.com/wallpaper/98/392/938/pool-ocean-tourism-resort-wallpaper-fb48327f71e48116e704188232a654d7.jpg?timestamp=1702568714903" alt="" />
              {/*  h-[370px] MIN2:h-[280px] md:h-[360px] lg:h-[330px] DD:h-[480px] */}
            <div className='absolute px-4 md:px-12 DD:px-10 py-6 md:py-10 space-y-3 DD:space-y-5 flex flex-col items-start justify-center rounded-2xl md:rounded-lg bottom-[12px] MIN2:bottom-3 md:bottom-2 lg:bottom-14 start-[3%] MIN2:start-[2%]  md:right-[1.4%] MIN3:right-[1%] lg:right-14 md:start-auto bg-green-50 MIN2:w-[96%] w-[94%] md:w-[62%] lg:w-[56%] xl:w-[40%] DD:w-[24%] 2xl:w-[25%] LL:w-[27%] z-10'>
                <div className=''><h1 className={`text-2xl text-start font-bold text-slate-900 ${pageSub === "English" ? "" : ""}`}>{motherSub?.SlideShowTwo_subTitle_2}</h1></div>
                <div className={`text-sm font-extralight text-start text-slate-900 tracking-widest ${pageSub === "Myanmar" && "text-sm"}`}>{motherSub?.SlideShowTwo_sub_2_1}</div>
                <div><p className={`text-base text-start text-slate-600 ${pageSub === "Myanmar" && "text-sm leading-[25px]"}`}>{motherSub?.SlideShowTwo_sub_2_2}</p></div>
                <div className='flex items-center flex-wrap w-full justify-start '>
                  <div className='flex space-x-1 text-xl font-bold my-0 MIN:my-1 me-4 xl:me-3 DD:me-4'><CheckLg className='text-green-800'/><span className='text-base'>{motherSub?.SlideShowTwo_sub_2_3}</span></div>
                  <div className='flex space-x-1 text-xl font-bold my-0 MIN:my-1 me-4 xl:me-3 DD:me-4'><CheckLg className='text-green-800'/><span className='text-base'>{motherSub?.SlideShowTwo_sub_2_4}</span></div>
                  <div className='flex space-x-1 text-xl font-bold my-0 MIN:my-1 me-4 xl:me-3 DD:me-4'><CheckLg className='text-green-800'/><span className='text-base'>{motherSub?.SlideShowTwo_sub_2_5}</span></div>
                </div>
                <div>
                  <button className='select-none text-gray-200 bg-sky-600 border-2 outline-1 rounded-xl tracking-wider text-lg font-extrabold px-4 py-1 hover:bg-sky-800 transition-all delay-100 flex space-x-1 items-center'><span>{motherSub?.SlideShowTwo_bottom_sub}</span><ArrowRight/></button>
                </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[592px] MIN:h-[602px] xl:h-[609px] w-full">
              <img className=" w-full h-full object-cover object-center border border-gray-300" src="https://r4.wallpaperflare.com/wallpaper/686/52/945/luxurious-hotel-room-wallpaper-9fac72df8da9e54847bd124424135010.jpg?timestamp=1702570493361" alt="" />
              {/* h-[420px] MIN2:h-[290px] md:h-[360px] lg:h-[330px] DD:h-[510px] */}
            <div className='absolute px-4 md:px-12 DD:px-8 py-7 md:py-10 space-y-3 DD:space-y-2 2xl:space-y-5 flex flex-col items-start justify-center rounded-2xl md:rounded-lg bottom-[12px] MIN2:bottom-3 md:bottom-2 lg:bottom-14 start-[3%] MIN2:start-[2%] md:right-[1.4%] MIN3:right-[1%] lg:right-14 md:start-auto bg-green-50 MIN2:w-[96%] w-[94%] md:w-[62%] lg:w-[56%] xl:w-[40%] DD:w-[24%] 2xl:w-[25%] LL:w-[27%]  z-10'>
                <div className=''><h1 className={`text-2xl text-start font-bold text-slate-900 ${pageSub === "English" ? "" : ""}`}>{motherSub?.SlideShowTwo_subTitle_3}</h1></div>
                <div className={`text-sm font-extralight text-start text-slate-900 tracking-widest ${pageSub === "Myanmar" && "text-sm"}`}>{motherSub?.SlideShowTwo_sub_3_1}</div>
                <div><p className={`text-base text-start text-slate-600 ${pageSub === "Myanmar" && "text-sm leading-[25px]"}`}>{motherSub?.SlideShowTwo_sub_3_2}</p></div>
                <div className='flex items-center flex-wrap w-full justify-start'>
                  <div className='flex space-x-1 text-xl font-bold my-0 MIN:my-1 me-4'><CheckLg className='text-green-800'/><span className='text-base'>{motherSub?.SlideShowTwo_sub_3_3}</span></div>
                  <div className='flex space-x-1 text-xl font-bold my-0 MIN:my-1 me-4'><CheckLg className='text-green-800'/><span className='text-base'>{motherSub?.SlideShowTwo_sub_3_4}</span></div>
                  <div className='flex space-x-1 text-xl font-bold my-0 MIN:my-1 me-4'><CheckLg className='text-green-800'/><span className='text-base text-start'>{motherSub?.SlideShowTwo_sub_3_5}</span></div>
                </div>
                <div>
                  <button className='select-none text-gray-200 bg-sky-600 border-2 outline-1 rounded-xl tracking-wider text-lg font-extrabold px-4 py-1 hover:bg-sky-800 transition-all delay-100 flex space-x-1 items-center'><span>{motherSub?.SlideShowTwo_bottom_sub}</span><ArrowRight/></button>
                </div>
            </div>
          </div>
        </SwiperSlide>
          <div className='pre_slide MEIMIN:hidden MIN2:flex items-center justify-center absolute top-[46.1%] z-10 -left-12 group-hover:left-3 rounded-full backdrop-blur-sm hover:backdrop-blur-[1px] bg-black/30 w-12 h-12 transition-all ease-in-out duration-300 text-white text-lg'><ArrowLeft/></div>
          <div className='next_slide MEIMIN:hidden MIN2:flex items-center justify-center absolute top-[46.1%] z-10 -right-12 group-hover:right-3 rounded-full backdrop-blur-sm hover:backdrop-blur-[1px] bg-black/30 w-12 h-12 place-items-center transition-all ease-in-out duration-300 text-white text-lg'><ArrowRight/></div>
        </Swiper>
            </div>
            <div className='py-5 md:py-20 lg:py-24 LL:py-28'>
              <OfferInSlideTwo/>
            </div>
      </div>
    </div>
  )
}

export default SlideShowTwo

