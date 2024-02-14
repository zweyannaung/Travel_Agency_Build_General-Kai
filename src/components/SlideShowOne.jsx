
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
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import {useSelector} from "react-redux";

const SlideShowOne = (swiperSlide1 = swiperSlide) => {
  const motherSub = useSelector((state) => state.dataCenter.mother_sub)
  const pageSub = useSelector((state) => state.dataCenter.page_sub)

  return (
    <div className=' w-full mx-auto overflow-hidden rounded-2xl select-none'>
      <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween:30,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          speed= {600}
          navigation={{
            nextEl: '.next_slide',
            prevEl: '.pre_slide'
          }}
          modules={[Navigation,Autoplay]}
          className="mySwiper relative"
      >
        {<SwiperSlide>
          <div className="menu cursor-pointer relative w-full bg-transparent bg-gradient-to-t from-black border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px] '>
              <img className="rounded-2xl mix-blend-overlay" src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_650/v1623088422/Shwedagon-Pagoda-Guide-Sunset/Shwedagon-Pagoda-Guide-Sunset.jpg" alt="" />
              </div>
                <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
                  <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_29}</h1>
                  <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_1}</p>
                <div className='flex items-center space-x-2'><span className='text-[15px]'>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>}
        <SwiperSlide>
          <div className="menu cursor-pointer relative w-full bg-transparent bg-gradient-to-t from-black border border-gray-300 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px]'>
              <img className="rounded-2xl mix-blend-overlay" src="https://www.alluringworld.com/wp-content/uploads/2016/12/2-Mandalay-Palace.jpg" alt=""/>
            </div>
            <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
              <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_30}</h1>
              <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_2}</p>
                <div className='flex items-center space-x-2'><span>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
              className="menu cursor-pointer relative w-full bg-transparent bg-gradient-to-t from-black border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px]'>
              <img className="rounded-2xl object-right mix-blend-overlay"
                   src="https://r4.wallpaperflare.com/wallpaper/512/95/755/road-the-sky-dust-dry-wallpaper-76a9f4b9b9cb76bdd6144776913d9c4d.jpg?timestamp=1702469178769"
                   alt=""/>
            </div>
            <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
              <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_33}</h1>
              <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_3}</p>
                <div className='flex items-center space-x-2'><span>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
              className="menu cursor-pointer relative w-full bg-gradient-to-t from-black border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px]'>
              <img className="rounded-2xl mix-blend-overlay"
                   src="https://r4.wallpaperflare.com/wallpaper/711/618/565/nature-landscape-beach-tropical-wallpaper-e239d1e5473ad17015df5ba5223972e0.jpg?timestamp=1702468565121"
                   alt=""/>
            </div>
            <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
              <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_31}</h1>
              <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_4}</p>
                <div className='flex items-center space-x-2'><span>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
              className="menu cursor-pointer relative w-full bg-transparent bg-gradient-to-t from-black border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px]'>
              <img className="rounded-2xl object-center mix-blend-overlay"
                   src="https://www.indochinavoyages.com/wp-content/uploads/2019/12/u_bein_bridge_2.jpg" alt=""/>
            </div>
            <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
              <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_35}</h1>
              <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_5}</p>
                <div className='flex items-center space-x-2'><span>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
              className="menu cursor-pointer relative w-full bg-gradient-to-t from-black border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px]'>
              <img className="rounded-2xl object-right mix-blend-overlay"
                   src="https://i.pinimg.com/736x/2a/17/2d/2a172dc105026d92ed9f23e480c7e202.jpg" alt=""/>
            </div>
            <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
              <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_37}</h1>
              <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_6}</p>
                <div className='flex items-center space-x-2'><span>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
              className="menu cursor-pointer relative w-full bg-transparent bg-gradient-to-t from-black border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px]'>
              <img className="rounded-2xl mix-blend-overlay"
                   src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/3b/90/57/caption.jpg?w=1200&h=-1&s=1"
                   alt=""/>
            </div>
            <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
              <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_34}</h1>
              <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_7}</p>
                <div className='flex items-center space-x-2'><span>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
              className="menu cursor-pointer relative w-full bg-transparent bg-gradient-to-t from-black border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px]'>
              <img className="rounded-2xl mix-blend-overlay"
                   src="https://trekking-myanmar.com/wp-content/uploads/2018/09/myanmar-trekking-peaks-mountaineering-1497.jpg"
                   alt=""/>
            </div>
            <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
              <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_40}</h1>
              <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_8}</p>
                <div className='flex items-center space-x-2'><span>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
              className="menu cursor-pointer relative w-full bg-transparent bg-gradient-to-t from-black border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px]'>
              <img className="rounded-2xl mix-blend-overlay"
                   src="https://thutatravel.com/wp-content/uploads/2018/01/343.jpg" alt=""/>
            </div>
            <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
              <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_36}</h1>
              <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_9}</p>
                <div className='flex items-center space-x-2'><span>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
              className="menu cursor-pointer relative w-full bg-transparent bg-gradient-to-t from-black border border-gray-300 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-[410px] MIN:h-[440px] MIN2:h-[350px] md:h-[475px] lg:h-[380px] xl:h-[380px] DD:h-[410px] 2xl:h-[450px] LL:h-[580px]'>
              <img className="rounded-2xl mix-blend-overlay"
                   src="https://news-eleven.com/sites/news-eleven.com/files/styles/news_detail_image/public/news-images/y1.jpg?itok=Ql1pyAIq"
                   alt=""/>
            </div>
            <div className={`handleUp transition-all ${pageSub === "Myanmar" && 'space-y-2 md:space-y-3 '} ${pageSub === "English" && 'space-y-2'} duration-300 p-5 absolute bottom-0 text-start text-white`}>
              <h1 className={` ${pageSub === "Myanmar" && 'text-2xl MIN2:text-xl 2xl:text-3xl font-black'} ${pageSub === "English" && 'text-2xl MIN2:text-xl md:text-2xl lg:text-3xl 2xl:text-3xl font-black tracking-wide lg:tracking-normal'}`}>{motherSub?.navDrop_sub_38}</h1>
              <p className={` ${pageSub === "Myanmar" && 'text-justify text-xs MIN2:text-xs md:text-sm leading-[25px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[25px] -tracking-tighter'} ${pageSub === "English" && ' text-sm MIN2:text-xs md:text-sm leading-[21px] MIN2:leading-[21px] md:leading-[28px] lg:leading-[23px] -tracking-tighter'}`}>{motherSub?.slideShowOne_sub_10}</p>
                <div className='flex items-center space-x-2'><span>{motherSub?.slideShowOne_sub_11}</span><ArrowRight className='text-xl'/> </div>
            </div>
          </div>
        </SwiperSlide>
        <div
            className='pre_slide absolute top-[46.1%] z-10 left-3 grid rounded-full backdrop-blur-sm hover:backdrop-blur-[1px] bg-black/30 w-12 h-12 place-items-center transition-all text-white text-lg'>
          <ArrowLeft/></div>
        <div
            className='next_slide absolute top-[46.1%] z-10 right-3 grid rounded-full backdrop-blur-sm hover:backdrop-blur-[1px] bg-black/30 w-12 h-12 place-items-center transition-all text-white text-lg'>
          <ArrowRight/></div>
      </Swiper>
    </div>
  )
}

export default SlideShowOne


