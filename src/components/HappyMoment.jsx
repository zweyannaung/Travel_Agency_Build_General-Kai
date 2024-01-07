import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight, CheckLg, Fullscreen, Quote, StarFill, StarHalf } from 'react-bootstrap-icons';
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { FaRegThumbsUp, FaStar } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import "./HM.css"

const HappyMoment = () => {
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
    
  return (
    <div className='bg-green-50'>
      <div className={`space-y-5 MIN2:space-y-7 xl:space-y-10 DD:space-y-6 w-screen ${pageSub === "Myanmar" && "font-MM"} ${pageSub === "English" && "font-EN"}`}>
        <div>
            <h1 className={`px-5 text-2xl lg:text-5xl text-center font-black`}>Some Of Our Happy Moments</h1>
        </div>
        <div className='flex flex-col xl:flex-row space-y-5 MIN2:space-y-7 xl:space-y-0 xl:space-x-6 xl:px-10 items-end'>
            <div className='w-screen xl:w-[860px] DD:w-[1030px] 2xl:w-[1060px] LL:w-[1350px] h-[170px] MIN1:h-[210px] MIN2:h-[320px] md:h-[400px] lg:h-[515px] xl:h-[265px] DD:h-[300px] 2xl:h-[320px] LL:h-[420px] px-3 xl:px-0'>
                <img className='w-full h-full object-cover object-center rounded-2xl z-40' src="https://booking.webestica.com/assets/images/category/hotel/resort/05.jpg" alt="" />
            </div>
            <div className={`h-[600px] w-screen px-3 xl:px-0`}>
                <div className=' h-full w-full rounded-2xl overflow-hidden relative'>
                    <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1571633419289-5baea827afd3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className='absolute bottom-[1.5%] MIN2:bottom-[4.5%] md:bottom-[4.2%] LL:bottom-[3%] w-[94%] MIN2:w-[59%] lg:w-[57%] xl:w-[60%] DD:w-[45%] start-[3%] MIN2:start-[4.7%] md:start-[3.5%] lg:start-[2.6%] xl:start-[3.7%] LL:start-[2%] rounded-lg h-[250px] MIN1:h-[225px] md:h-[180px] MIN3:h-[190px] lg:h-[180px] xl:h-[250px] DD:h-[270px] 2xl:h-[250px] LL:h-[220px] '>
                    <div className='flex absolute -top-7 left-7 items-center justify-center rounded-full w-14 h-14 bg-blue-700 z-50'><Quote className='text-white text-lg'/></div>
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
                    navigation={{
                    nextEl:'.next_slide',
                    prevEl:'.pre_slide'
                    }}
                    modules={[Navigation,Autoplay]}
                    className="mySwiper bg-green-50 rounded-xl relative select-none group gap-0 "
                >
                <SwiperSlide>
                <div className="">
                    <div className='px-7 py-7 space-y-5 md:space-y-3 md:px-12 md:py-7 absolute h-full w-full bottom-0  start-0 bg-green-50 z-10'>
                    <p className='text-base font-semibold leading-6 text-start'>I spent 6 days in Myanmar with the help of Travel Agency. I loved the country and was very happy with the service of Travel Agency. </p>
                    <div className='flex flex-col space-y-1 MIN2:space-y-0 MIN2:flex-row MIN2:justify-between MIN2:items-center justify-start'>
                    <div className='flex items-center justify-start space-x-3'>
                       <div className='w-9 h-9'> <img src="https://media.cnn.com/api/v1/images/stellar/prod/2023-11-30t135953z-879534570-rc2on4amk5bn-rtrmadp-3-twitter-musk.jpg?c=16x9&q=h_833,w_1480,c_fill" className='rounded-full' alt="" /></div>
                        <span className='text-sm font-semibold'>Elon Musk</span>
                    </div>
                    <div className='flex text-sm justify-start text-yellow-400 space-x-2'>
                    <StarFill/><StarFill/><StarFill/><StarFill/><StarHalf/>
                    </div>

                    </div>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="">
                    <div className='px-7 py-7 space-y-5 md:space-y-3 md:px-12 md:py-7 absolute h-full w-full bottom-0  start-0 bg-green-50 z-10'>
                    <p className='text-base font-semibold leading-6 text-start'>I took a private tour 1 day Inle lake, one day Mount Popa, 5 days Mandalay, 1 day Yangon with Travel Agency and it was an EXCELLENT experience. </p>
                    <div className='flex flex-col space-y-1 MIN2:space-y-0 MIN2:flex-row MIN2:justify-between MIN2:items-center justify-start'>
                    <div className='flex items-center justify-start space-x-3'>
                       <div className='w-9 h-9'> <img src="https://m.media-amazon.com/images/M/MV5BZGM0YjhkZmEtNGYxYy00OTk0LThlNDgtNGQzM2YwNjU0NDQzXkEyXkFqcGdeQXVyMTU3ODQxNDYz._V1_.jpg" className='rounded-full object-top' alt="" /></div>
                        <span className='text-sm font-semibold'>Taylor Swift</span>
                    </div>
                    <div className='flex text-sm justify-start text-yellow-400 space-x-2'>
                    <StarFill/><StarFill/><StarFill/><StarFill/><StarHalf/>
                    </div>

                    </div>
                    </div>
                </div>
                </SwiperSlide>
                
                <div className='pre_slide MEIMIN:hidden MIN2:flex items-center justify-center absolute top-[40%] z-10 -left-12 group-hover:left-3 rounded-full backdrop-blur-sm hover:backdrop-blur-[1px] bg-black/30 w-12 h-12 transition-all ease-in-out duration-300 text-white text-lg'><ArrowLeft/></div>
                <div className='next_slide MEIMIN:hidden MIN2:flex items-center justify-center absolute top-[40%] z-10 -right-12 group-hover:right-3 rounded-full backdrop-blur-sm hover:backdrop-blur-[1px] bg-black/30 w-12 h-12 place-items-center transition-all ease-in-out duration-300 text-white text-lg'><ArrowRight/></div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div> 
        <div className='flex flex-col DD:flex-row DD:items-start space-y-12 MIN1:space-y-10'>
            <PhotoProvider>
           <div className='w-screen DD:w-3/5 px-3 xl:px-10 foo'>
           <Swiper
                    slidesPerView={1}
                    spaceBetween={35}
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
                    navigation={{
                    nextEl:'.next_slide',
                    prevEl:'.pre_slide'
                    }}
                    modules={[Navigation]}
                    className="mySwiper bg-green-50 relative select-none group rounded-2xl overflow-hidden "
                >
                <SwiperSlide>
                <PhotoView src="https://booking.webestica.com/assets/images/category/hotel/resort/05.jpg">
                <div className="cursor-pointer opset border  bg-black h-[170px] MIN1:h-[210px] MIN2:h-[320px] md:h-[400px] lg:h-[515px] xl:h-[655px] DD:h-[500px] 2xl:h-[500px] LL:h-[520px] w-full">
                    <img className=' opacity-100 transition-all duration-500 ease-in-out  object-none object-center' src="https://booking.webestica.com/assets/images/category/hotel/resort/05.jpg" alt="" />
                    <div className='opacity-0 items-center justify-center absolute top-[42%] md:top-[43.5%] lg:top-[45%] xl:top-[46.1%] DD:top-[45.2%] imgFocus group-hover:opacity-100 flex z-10 left-[45.7%] md:left-[46.7%] MIN3:left-[46.7%] lg:left-[47.5%] xl:left-[48%] DD:left-[47.2%] 2xl:left-[47.8%] rounded-full backdrop-blur-sm hover:backdrop-blur-[1px] bg-black/30 w-12 h-12 transition-all ease-in-out duration-500 text-white text-lg'><Fullscreen/></div>
                </div>
                </PhotoView>
                </SwiperSlide>
                {/* ====================== */}
                <SwiperSlide>
                <PhotoView src="https://images.unsplash.com/photo-1571633419289-5baea827afd3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className="cursor-pointer opset bg-black border h-[170px] MIN1:h-[210px] MIN2:h-[320px] md:h-[400px] lg:h-[515px] xl:h-[655px] DD:h-[500px] 2xl:h-[500px] LL:h-[520px] w-full">
                    <img className=' w-full opacity-100 transition-all duration-500 ease-in-out object-none object-center ' src="https://images.unsplash.com/photo-1571633419289-5baea827afd3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className='opacity-0 items-center justify-center absolute top-[42%] md:top-[43.5%] lg:top-[45%] xl:top-[46.1%] DD:top-[45.2%] imgFocus group-hover:opacity-100 flex z-10 left-[45.7%] md:left-[46.7%] MIN3:left-[46.7%] lg:left-[47.5%] xl:left-[48%] DD:left-[47.2%] 2xl:left-[47.8%] rounded-full backdrop-blur-sm hover:backdrop-blur-[1px] bg-black/30 w-12 h-12 transition-all ease-in-out duration-500 text-white text-lg'><Fullscreen/></div>
                </div>
                </PhotoView>
                </SwiperSlide>
                
                <div className='pre_slide cursor-pointer MEIMIN:hidden MIN2:flex items-center justify-center absolute top-[42%] md:top-[43%] MIN3:top-[43.9%] lg:top-[44.8%] xl:top-[46.3%] DD:top-[45%] z-10 -left-12 group-hover:left-3 rounded-full backdrop-blur-sm hover:bg-blue-700 w-12 h-12 transition-all ease-in-out duration-300 text-white text-lg'><ArrowLeft/></div>
                <div className='next_slide cursor-pointer MEIMIN:hidden MIN2:flex items-center justify-center absolute top-[42%] md:top-[43%] MIN3:top-[43.9%] lg:top-[44.8%] xl:top-[46.3%] DD:top-[45%] z-10 -right-12 group-hover:right-3 rounded-full backdrop-blur-sm hover:bg-blue-700 w-12 h-12 place-items-center transition-all ease-in-out duration-300 text-white text-lg'><ArrowRight/></div>
            </Swiper>
           </div>
            </PhotoProvider>
           <div className={`flex flex-col space-y-3 justify-center`}>
            <h1 className={`px-10 text-start  ${pageSub === "Myanmar" ? "" : "text-[28px] md:text-[32px] leading-8 font-bold"}`}>{motherSub?.HappyMoment_sub_1}</h1>
            <p className='px-10 tracking-normal text-slate-600 text-[15px] leading-6'>{motherSub?.HappyMoment_sub_2}</p>
            <div className='flex flex-col space-y-7 md:space-y-4 py-2 px-10'>
                <div className=' flex justify-between MIN2:justify-start space-x-4 MIN2:space-x-5'>
                    <div className='w-1/3 MIN2:w-14'>
                         <div className=' h-14 w-14 rounded-full flex items-center justify-center bg-gray-300'><FaRegThumbsUp className='text-xl text-blue-800'/></div>
                    </div>
                    <div className='space-y-2 py-2'>
                        <h1 className='text-[21px] leading-7 font-bold'>{motherSub?.HappyMoment_sub_3}</h1>
                        <p className='leading-6 text-[15px] text-slate-600 '>{motherSub?.HappyMoment_sub_6}</p>
                    </div>
                </div>
                <div className=' flex justify-between MIN2:justify-start space-x-4 MIN2:space-x-5 '>
                    <div className='w-1/3 MIN2:w-14'>
                        <div className=' h-14 w-14 rounded-full flex items-center justify-center bg-green-200'><FaStar className='text-xl text-yellow-500'/></div>
                    </div>
                    <div className='space-y-2 py-2'>
                        <h1 className='text-[21px] leading-7 font-bold'>{motherSub?.HappyMoment_sub_4}</h1>
                        <p className='leading-6 text-[15px] text-slate-600 '>{motherSub?.HappyMoment_sub_7}</p>
                    </div>
                </div>
                <div className=' flex justify-between MIN2:justify-start space-x-4 MIN2:space-x-5 '>
                    <div className='w-1/3 MIN2:w-14'>
                        <div className=' h-14 w-14 rounded-full flex items-center justify-center bg-gray-300'><BsHeadset className='text-xl text-red-800'/></div>
                    </div>
                    <div className='space-y-2 py-2'>
                        <h1 className='text-[21px] leading-7 font-bold'>{motherSub?.HappyMoment_sub_5}</h1>
                        <p className='leading-6 text-[15px] text-slate-600 '>{motherSub?.HappyMoment_sub_8}</p>
                    </div>
                    sadas
                </div>
            </div>
           </div>
        </div>
      </div>
    </div>
  )
}

export default HappyMoment
