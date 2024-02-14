import React, { useEffect, useRef } from 'react'
import '../CSS/navPlace.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FooterOne from './FooterOne'
import { ArrowBarUp, ArrowLeft, ArrowLeftSquareFill, ArrowRight, ArrowRightShort, ArrowUpCircleFill } from 'react-bootstrap-icons'
import { Pagination,Navigation,Autoplay } from 'swiper/modules';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectUnfinishModal from './ProjectUnfinishModal';
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux';

const Places = () => {
  const nav = useNavigate()
  const pageSub = useSelector((state) => state.dataCenter.page_sub)
  const {destinationName} = useParams()
  const Destination_Of_Myanmar = useSelector((state) =>state.dataCenter.Destination_Of_Myanmar[destinationName])
  const Destination_Of_Myanmar_Images = useSelector((state) =>state.dataCenter.Destination_Of_Myanmar_Images[destinationName])
  // console.log(Destination_Of_Myanmar);
  // console.log(pageSub);

  //####### page up ########
  const scrollHandle =()=>{
    const pageUp = document.querySelector('#pageUp')
    if(document.documentElement.scrollTop > 500){
      pageUp.classList.remove('hidden')
      pageUp.classList.add('flex')
    }else{
      pageUp.classList.add('hidden')
      pageUp.classList.remove('flex')

    }
  }
  const pageUpHandaler = () => {
    window.scroll({top:0})
  }
  window.onscroll = () => {
    scrollHandle()
  }

  const returnPageHandler = () => {
    nav("/")
  }

  // #######  Unfinish Alert #######
  const modalAlert = () => {
    Swal.fire("This Part Is Unfinish Yet!");
  }
  
  return (
    <div onScroll={scrollHandle} className='myShadow bg-white'>
      <div className=' grid grid-cols-2'>
          <div className='relative'>
              <div className='bg-transparent w-full h-[400px]'>
                <div className={`lg:h-[180px] xl:h-[220px] xl2:h-[250px] DD:h-[210px] 2xl:h-[200px] LL:h-[280px] LL:w-[200px] overflow-hidden rounded-lg absolute lg:top-[360px] xl:top-[430px] DD:top-[420px] 2xl:top-[480px] LL:top-[530px] lg:left-[60px] DD:left-[60px] 2xl:left-[60px]  LL:left-[90px] select-none border  shadow-lg border-slate-400 shadow-slate-700 z-20`}>
                  <img className='w-full h-full object-fill object-center' src={Destination_Of_Myanmar_Images?.image_3} alt="" />
                </div>
                  <img className='h-[480px] lg:h-[430px] xl:h-[500px] DD:h-[470px] 2xl:h-[480px] LL:h-[600px] object-cover object-right absolute top-52 lg:top-52 xl:top-64 2xl:top-72 lg:left-44 xl:left-48 xl2:left-56 DD:left-48 2xl:left-48  LL:left-64 LL:top-80 z-10' src="https://media.istockphoto.com/id/1354849732/vector/black-map-of-myanmar-inside-the-gray-map-of-southeast-region-of-asia.jpg?s=612x612&w=0&k=20&c=73UxfP8N8yUvcmvZJWODQ-O2SQozpNQgC9Cc9VWg28Q=" alt="" />
              </div>
          </div>
        <div className='px-3 py-14 DD:py-10 space-y-5 LL:space-y-10 lg:pe-12 lg:ps-3 LL:pe-20 z-10'>
          <div className={`w-3/5 LL:w-4/6 lg:text-5xl xl:text-6xl DD:text-[55px] 2xl:text-6xl LL:text-7xl font-bold select-none text-slate-800 `}>
          <h1>{Destination_Of_Myanmar?.text_2}</h1>
          <h1 className={`text-end `}>{Destination_Of_Myanmar?.text_1}</h1>
          </div>
          <p className={`lg:text-[15.5px] xl:text-[17px] xl2:text-[19px] DD:text-[18px]  2xl:text-[17px] LL:text-[20px] lg:leading-relaxed text-justify text-slate-700 tracking-wide `}>{Destination_Of_Myanmar?.para_text_1}</p>
        </div>
      </div>
      {/* second floor */}
      <div className='relative my-32 lg:mt-52 2xl:mt-52 LL:mt-80'>
       <div className=' lg:h-[430px] xl:h-[450px] DD:h-[460px] 2xl:h-[510px] w-full overflow-hidden border-b border-slate-300' >
        <img className='w-full' src="https://i.etsystatic.com/12631761/r/il/f25fec/5580365201/il_794xN.5580365201_ihfs.jpg" alt="" />
        <div className='absolute top-0 grid grid-cols-5 lg:grid-cols-6 DD:grid-cols-5 h-full'>
          <div className='col-span-2 lg:col-span-3 DD:col-span-2 space-y-8 lg:pt-9 xl:pt-16 DD:pt-10 2xl:pt-28 LL:pt-14 lg:ps-14 LL:ps-20'>
            <div className={`w-[88%] lg:w-[63%] DD:w-[88%] lg:text-4xl xl:text-5xl xl2:text-[52px] DD:text-5xl LL:text-6xl font-bold select-none space-y-1 text-slate-800 `}>
              <h1>{Destination_Of_Myanmar?.text_3}</h1>
              <h1  className={`text-end `}>{Destination_Of_Myanmar?.text_4} </h1>
            </div>
            <p className='text-lg xl:text-[19px] xl2:text-[21px] DD:text-[19px] 2xl:text-[17px] LL:text-[20px] font-semibold text-black tracking-wide'>The local people in the city are very friendly and hospitable. They will understand you even if you don’t have a common language to communicate.The streets of Yangon are dotted with street food vendors selling fresh and yummy local cuisine. Don’t miss trying everything!</p>
          </div>
          <div className='lg:w-[440px] lg:h-[250px] xl:w-[480px] xl:h-[300px] DD:w-[480px] DD:h-[280px] 2xl:w-[500px] 2xl:h-[270px] LL:w-[550px] LL:h-[320px] absolute lg:-bottom-[45px] xl:-bottom-[60px] DD:-bottom-[55px] 2xl:-bottom-[45px] LL:-bottom-[70px] lg:right-[5.5%] xl:right-[5%] LL:right-[6%]  border-t-0 border-2  shadow-lg rounded border-slate-600 shadow-slate-700 overflow-hidden'>
            <img className='w-full h-full' src={Destination_Of_Myanmar_Images?.image_4} alt="" />
          </div>
        </div>
       </div>
      </div>
      {/* thirt floor */}
      <div className={`grid grid-cols-2 pt-28 relative`}>
        <div className='z-10'>
          <img className=' lg:h-[600px] lg:w-[520px] xl:h-[680px] 2xl:h-[750px] 2xl:w-[560px] LL:h-[800px]  LL:w-[610px] border-2  shadow-lg rounded border-slate-400 shadow-slate-700' src={Destination_Of_Myanmar_Images?.image_5} alt="" />
        </div>
        <div className='relative space-y-10 z-10'>
          <div className='px-3 space-y-5 2xl:ps-14 LL:ps-0'>
            <div className={`w-3/5 lg:text-5xl xl2:text-[52px] 2xl:text-5xl LL:text-6xl space-y-4 font-bold select-none text-slate-800 `}>
            <h1>{Destination_Of_Myanmar?.text_5}</h1>
            <h1 className={`text-end `}>{Destination_Of_Myanmar?.text_1}</h1>
            </div>
            <p className={`text-base xl2:text-[19px] DD:text-[18px] 2xl:text-[17px] LL:text-[20px]  pe-3 lg:leading-relaxed text-slate-900 tracking-wide 2xl:w-11/12 LL:w-full lg:pe-12 2xl:pe-0 LL:pe-20 text-justify  myShadowTwo bg-white bg-opacity-90`}>{Destination_Of_Myanmar?.para_text_3}</p>
          </div>
            <div   style={{
              backgroundImage: `url(${Destination_Of_Myanmar_Images?.image_6})`,
              // backgroundImage: `url(${externalImage})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }} className='absolute lg:w-[400px] lg:h-[250px] xl:w-[440px] xl:h-[290px] 2xl:w-[450px] 2xl:h-[310px] LL:w-[500px] LL:h-[360px] right-0 DD:-bottom-[200px] 2xl:-bottom-[200px] LL:-bottom-[200px] border-2  shadow-lg rounded border-slate-500 shadow-slate-700'></div>
        </div>
        <div className='absolute lg:right-[200px] lg:top-[330px] 2xl:right-[300px] 2xl:top-[450px] LL:right-[360px] LL:top-[400px]'>
          <img className=' h-[800px]  w-[610px] LL:h-[950px] LL:w-[760px] opacity-70' src="https://img.pikbest.com/origin/09/33/92/50KpIkbEsThaD.jpg!sw800" alt="" />
        </div>
      </div>
      {/* fourth floor */}
      <div className='space-y-7 lg:mt-[250px] 2xl:mt-[250px] LL:mt-[300px] flex flex-col justify-between items-center'>
        <div className={`w-2/5 lg:w-[44%] DD:w-2/5 text-start lg:text-5xl xl2:text-[52px] 2xl:text-5xl LL:text-6xl space-y-4 font-bold select-none text-slate-800 z-30`}>
          <h1 className=''>{Destination_Of_Myanmar?.text_6}</h1>
          <h1 className={`text-end `}>{Destination_Of_Myanmar?.text_7}</h1>
        </div>
        <div className='w-[90%] xl:w-[85%] 2xl:w-full mx-auto 2xl:mx-auto 2xl:px-10 rounded-2xl select-none '>
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
                  spaceBetween:10,
                },
                1440: {
                  slidesPerView: 4,
                  spaceBetween:50,
                },
                1536: {
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
              className="mySwiper relative rounded-xl"
          >
            {<SwiperSlide>
              <div className='py-3'>
                <div className="DD:h-auto hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg hover:rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/bogyoke-aung-san-market_01-300x201.jpg" alt="" />
                  </a>
                  <div className="p-5 lg:h-[250px] DD:h-[280px]  flex flex-col justify-between items-center">
                    <a href="#">
                      <h5 className="w-full mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Bogyoke Aung San Market,Yangon</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021</p>
                    <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more 
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>}
            <SwiperSlide>
              <div className='py-3'>
               <div className="DD:h-auto hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/Saint-Marys-Cathedral-at-Yangon_01-300x200.jpg" alt="" />
                  </a>
                  <div className="p-5 lg:h-[250px] DD:h-[280px] flex flex-col justify-between items-center">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">St. Mary’s Cathedral,Yangon</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021</p>
                    <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </button>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='py-3'>
                <div className="DD:h-auto  hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/Sule-01-300x200.jpg" alt="" />
                  </a>
                  <div className="p-5 lg:h-[250px] DD:h-[280px] flex flex-col justify-between items-center">
                    <a href="#">
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Sule Pagoda,Yangon</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021</p>
                    <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                    </button>
                    </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='py-3'>
                <div className="DD:h-auto hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/thaukkyanwarcemetry_01-300x200.jpg" alt="" />
                </a>
                <div className="p-5 lg:h-[250px] DD:h-[280px] flex flex-col justify-between items-center">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Taukkyan War Cemetry,Yangon</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021</p>
                  <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='py-3'>
                <div className="DD:h-auto  hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/yangon-wall-01-300x200.jpg" alt="" />
                </a>
                <div className="p-5 lg:h-[250px] DD:h-[280px]  flex flex-col justify-between items-center">
                  <a href="#">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Yangon Walls,Yangon</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021</p>
                  <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
                  </div>
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
      </div>
      {/* footer */}
      <div className='mt-20'>
        <FooterOne/>
      </div>
      <div id='pageUp' onClick={pageUpHandaler} className='hidden opacity-70 hover:opacity-100 duration-300 fixed rounded-full border lg:bottom-12 DD:bottom-12 2xl:bottom-12 LL:bottom-20 lg:right-14 xl:right-24 DD:right-48 2xl:right-60 LL:right-80 items-center justify-center bg-white z-50'>
        <button className=''><ArrowUpCircleFill className='w-12 h-12 xl:w-14 xl:h-14 DD:w-16 DD:h-16  text-blue-800'/></button>
      </div>
      <div onClick={returnPageHandler} className=' overflow-hidden bg-transparent shadow-xl rounded-lg border border-blue-700 shadow-red-500 absolute flex top-7 left-7 items-center justify-center z-50'>
        <button><ArrowLeftSquareFill className='w-12 h-12 lg:w-9 lg:h-9 xl:w-12 xl:h-12 DD:w-14 DD:h-14 transition-all duration-300 bg-slate-200 hover:bg-white text-blue-600 hover:text-blue-700'/></button>
      </div>
    </div>
  )
}

export default Places
