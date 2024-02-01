import React, { useEffect, useRef } from 'react'
import '../CSS/navPlace.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FooterOne from './FooterOne'
import { ArrowBarUp, ArrowLeft, ArrowRight, ArrowRightShort, ArrowUpCircleFill } from 'react-bootstrap-icons'
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
    if(document.documentElement.scrollTop > 800){
      pageUp.classList.remove('hidden')
    }else{
      pageUp.classList.add('hidden')
    }
  }
  const pageUpHandaler = () => {
    window.scroll({top:0})
  }
  window.onscroll = () => {
    scrollHandle()
  }

  // #######  Unfinish Alert #######
  const modalAlert = () => {
    Swal.fire("This Part Is't Finish Yet!");
  }
  
  return (
    <div onScroll={scrollHandle} className='myShadow bg-white'>
      <div className=' grid grid-cols-2 '>
          <div className='relative'>
              <div className='bg-transparent w-full h-[400px]'>
                <div className={`h-[240px] w-[200px] overflow-hidden rounded-lg absolute top-[480px] left-[110px] select-none border  shadow-lg border-slate-400 shadow-slate-700 z-20`}>
                  <img className='w-full h-full object-fill object-center' src={Destination_Of_Myanmar_Images?.image_3} alt="" />
                </div>
                  <img className='h-[500px] object-cover object-right absolute top-72 left-72 z-10' src="https://media.istockphoto.com/id/1354849732/vector/black-map-of-myanmar-inside-the-gray-map-of-southeast-region-of-asia.jpg?s=612x612&w=0&k=20&c=73UxfP8N8yUvcmvZJWODQ-O2SQozpNQgC9Cc9VWg28Q=" alt="" />
              </div>
          </div>
        <div className='px-3 py-10 space-y-5 z-50'>
          <div className={`w-3/5 text-7xl font-bold select-none text-slate-800 `}>
          <h1>{Destination_Of_Myanmar?.text_2}</h1>
          <h1 className={`text-end `}>{Destination_Of_Myanmar?.text_1}</h1>
          </div>
          <p className={`text-lg text-slate-700 tracking-wide w-5/6`}>Formerly known as Rangoon, Yangon is a historical city and one of the most well-known cities in the country.
              Yangon was Myanmar’s administrative capital before Nay Pyi Taw was named as the capital city. Yangon is the
                country’s most prominent commercial centre as well as the largest city of the country with a population of more than 7 million people.
                The name ‘Yangon’ is a combination of the Burmese words ‘Yan’ meaning ‘enemies’ and ‘Koun’ meaning ‘run out of’. The combination of words
                  commonly translates as ‘End of Strife’. During the colonial era, Yangon was called ‘Rangoon’. Till the mid-1990s, Yangon mostly
                  had a traditional setting. As people started moving in, a necessity to expand the area of the city was felt. The city grew rapidly 
                  towards the north where the Yangon International Airport is located now.</p>
        </div>
      </div>
      {/* second floor */}
      <div className='relative my-24'>
       <div className='h-[510px] w-full overflow-hidden border-b border-slate-300' >
        <img className='w-full' src="https://i.etsystatic.com/12631761/r/il/f25fec/5580365201/il_794xN.5580365201_ihfs.jpg" alt="" />
        <div className='absolute top-0 grid grid-cols-5 h-full'>
          <div className='col-span-2 space-y-8  pt-28 ps-16'>
            <div className={`w-[88%] text-6xl font-bold select-none space-y-1 text-slate-800 `}>
              <h1>{Destination_Of_Myanmar?.text_3}</h1>
              <h1  className={`text-end `}>{Destination_Of_Myanmar?.text_4} </h1>
            </div>
            <p className='text-lg font-semibold text-black tracking-wide'>The local people in the city are very friendly and hospitable. They will understand you even if you don’t have a common language to communicate.The streets of Yangon are dotted with street food vendors selling fresh and yummy local cuisine. Don’t miss trying everything!</p>
          </div>
          <div className='LL:w-[550px] LL:h-[320px] absolute -bottom-[60px] right-[5%] border-t-0 border-2  shadow-lg rounded border-slate-600 shadow-slate-700 overflow-hidden'>
            <img className='w-full h-full' src={Destination_Of_Myanmar_Images?.image_4} alt="" />
          </div>
        </div>
       </div>
      </div>
      {/* thirt floor */}
      <div className={`grid grid-cols-2 pt-28 relative`}>
        <div className='z-10'>
          <img className=' h-[800px]  w-[610px] border-2  shadow-lg rounded border-slate-400 shadow-slate-700' src={Destination_Of_Myanmar_Images?.image_5} alt="" />
        </div>
        <div className='relative z-10'>
        <div className='px-3 space-y-5'>
          <div className={`w-3/5 text-6xl space-y-4 font-bold select-none text-slate-800 `}>
          <h1>{Destination_Of_Myanmar?.text_5}</h1>
          <h1 className={`text-end `}>{Destination_Of_Myanmar?.text_1}</h1>
          </div>
          <p className={`text-lg text-slate-900 tracking-wide w-5/6 myShadowTwo bg-white bg-opacity-90`}>Yangon has a rich history behind it which dates back to the 11th century when the Mons who lived in Lower Burma the city and named it Dagon. It was a small fishing village centred around the Shwedagon Pagoda. When King Alaungpaya took over Dagon in 1755, he changed the name to Yangon. The British conquered Yangon after the First Anglo-Burmese War (1824-1826) but returned Yangon back to Burmese administration as the war ended. They seized Yangon and lower Burma moved to after the Second Anglo-Burmese War in 1852. Yangon was the epicentre of Myanmar’s struggle for independence. When Myanmar gained independence in 1948, Yangon was made the capital of the country.</p>
        </div>
          <div   style={{
            backgroundImage: `url(${Destination_Of_Myanmar_Images?.image_6})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '360px',
            width: '500px'
          }} className='absolute right-0 -bottom-[80px] border-2  shadow-lg rounded border-slate-500 shadow-slate-700'></div>
        </div>
        <div className='absolute right-[450px] top-[400px]'>
          <img className=' h-[800px]  w-[610px] opacity-70' src="https://img.pikbest.com/origin/09/33/92/50KpIkbEsThaD.jpg!sw800" alt="" />
        </div>
      </div>
      {/* fourth floor */}
      <div className='space-y-7 mt-[150px] flex flex-col justify-between items-center'>
        <div className={`w-2/5 text-start text-6xl space-y-4 font-bold select-none text-slate-800 z-30`}>
          <h1 className=''>{Destination_Of_Myanmar?.text_6}</h1>
          <h1 className={`text-end `}>{Destination_Of_Myanmar?.text_7}</h1>
        </div>
        <div className=' w-full mx-auto overflow-hidden rounded-2xl select-none px-8 '>
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
              <div className="max-w-sm hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg hover:rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/bogyoke-aung-san-market_01-300x201.jpg" alt="" />
                </a>
                <div className="p-5 h-[280px]  flex flex-col justify-between items-center">
                  <a href="#">
                    <h5 className="w-full mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bogyoke Aung San Market,Yangon</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more aa
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
                </div>
              </div>

            </SwiperSlide>}
            <SwiperSlide>
            <div className="max-w-sm hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/Saint-Marys-Cathedral-at-Yangon_01-300x200.jpg" alt="" />
                </a>
                <div className="p-5 h-[280px] flex flex-col justify-between items-center">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">St. Mary’s Cathedral,Yangon</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="max-w-sm hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/Sule-01-300x200.jpg" alt="" />
                </a>
                <div className="p-5 h-[280px] flex flex-col justify-between items-center">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sule Pagoda,Yangon</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="max-w-sm hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/thaukkyanwarcemetry_01-300x200.jpg" alt="" />
                </a>
                <div className="p-5 h-[280px] flex flex-col justify-between items-center">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Taukkyan War Cemetry,Yangon</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
                  </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="max-w-sm hover:shadow-2xl duration-300 hover:shadow-slate-700 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className="rounded-t-lg" src="https://tourisminmyanmar.com.mm/wp-content/uploads/2020/04/yangon-wall-01-300x200.jpg" alt="" />
                </a>
                <div className="p-5 h-[280px]  flex flex-col justify-between items-center">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Yangon Walls,Yangon</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <button onClick={modalAlert} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </button>
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
      <div id='pageUp' onClick={pageUpHandaler} className='hidden opacity-60 hover:opacity-100 duration-300 fixed bottom-20 right-80 w-16 h-16 overflow-hidden items-center justify-center rounded-full  z-50'>
        <button><ArrowUpCircleFill className='w-16 h-16  bg-white text-blue-600'/></button>
      </div>
    </div>
  )
}

export default Places
