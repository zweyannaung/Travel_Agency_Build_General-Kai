import React, { useEffect, useRef, useState } from 'react'
import {initFlowbite} from 'flowbite'
import { useDispatch, useSelector } from 'react-redux'
import { change_English_sub, change_Myanmar_sub, start_language } from '../DataSharing/DataCenter'
import { ChevronDown, XLg } from 'react-bootstrap-icons'
import NavOne from './NavOne'
import NavTwo from './NavTwo'
import SideBar from './SideBar'
import 'animate.css';
import { SiYourtraveldottv } from "react-icons/si";

const Nav = () => {
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
    const gettingIdOne = useRef()
    const gettingIdTwo = useRef()
    const [isTrue , setIsTrue] = useState(false) 
    const dispatch = useDispatch()
 
    useEffect(()=>{
        dispatch(start_language())
    },[])

    const changeEngSub = (e) =>{
        e.preventDefault()
        dispatch(change_English_sub())
    }
    const changeMMSub = (e) =>{
        e.preventDefault()
        dispatch(change_Myanmar_sub())
    }

    const showDropOne = () => {
        const DropOne = gettingIdOne.current
        DropOne.classList.toggle("hidden")
        DropOne.classList.add('animate__fadeIn')
    }
    const hideDropOne = () => {
        const DropOne = gettingIdOne.current
        DropOne.classList.remove('animate__fadeIn')
        DropOne.classList.add("hidden")
      
    } 
    const thisIsDropOne = () => {
        const DropOne = gettingIdOne.current
        DropOne.classList.toggle('hidden')
    }  

    // =======================================================
    // =================================================

    const showDropTwo = () => {
        const DropTwo = gettingIdTwo.current
        DropTwo.classList.toggle("hidden")
        DropTwo.classList.add('animate__fadeIn')
      
    }
    const hideDropTwo = () => {
        const DropTwo = gettingIdTwo.current
        DropTwo.classList.remove('animate__fadeIn')
        DropTwo.classList.add('hidden')
    }
    const thisIsDropTwo = () => {
        const DropTwo = gettingIdTwo.current
        DropTwo.classList.toggle('hidden')
    }
    // =====================================================   
    const changeSideBar = () => {
        const getSideId = document.getElementById('navSideBar')
        const check = getSideId.classList.contains('hidden')
        if (check) {
            getSideId.classList.add("animate__fadeInRight")
            getSideId.classList.remove("animate__fadeOutRightBig")
            getSideId.classList.remove("hidden")

            // ======== PAGE MOUSE SCOLL OFF WHEN SIDE BAR IS ON ===========

            document.body.style.overflowY = "hidden";
            // window.document.body.scroll = 'no';
            // this.windowOffset = window.scrollY
            // document.body.setAttribute('style',`position:fixed; top: -${this.windowOffset}px; left:0; right:0;`)
          
        }else{
            getSideId.classList.add("animate__fadeOutRightBig")
            getSideId.classList.remove("animate__fadeInRight")
            setTimeout(()=>getSideId.classList.add("hidden"),300)

            // ======== PAGE MOUSE SCOLL OFF WHEN SIDE BAR IS ON ===========

            document.body.style.overflowY = 'unset';
  
        }
    }
    
  
  return (
    <>
    <div className={`h-[545px] MIN1:h-[550px] MIN2:h-[580px] md:h-[600px] lg:h-screen xl:h-screen LL:h-[960px] relative shadow-2xl shadow-[#4A2D14] ${pageSub === "Myanmar" && 'font-MM'} ${pageSub === "English" && 'font-EN'}`}>
        {/* +++++ heroLanding image +++++ */}
        <div className=' w-full absolute h-full  lg:top-0 bg-gradient-to-tr from-gray-900 to-orange-500 md:bg-transparent'>
            <img src="https://r4.wallpaperflare.com/wallpaper/276/889/111/man-made-bagan-hot-air-balloon-myanmar-wallpaper-e4064e4202dec0d5576f29b044e46894.jpg?timestamp=1699275877250" className='hidden w-full h-full lg:block object-none xl:object-cover object-center'/>       
            <img src="https://i.pinimg.com/736x/2a/38/04/2a3804cb1b06f8a8c2f922191ea5c674.jpg" className='block w-full h-full lg:hidden object-cover object-center MIN1:object-top  mix-blend-overlay'/>       
        </div>
        {/* +++++ Nab Bar +++++ */}
        <nav className="w-screen bg-transparent  dark:bg-gray-900 absolute top-0 px-0 md:px-5 py-5 z-40">
            <div className="container flex mx-auto items-center justify-between p-4">
                {/* +++++ Logo +++++ */}
                <a href="#" className="flex items-center space-x-1 md:space-x-2">
                <SiYourtraveldottv className='text-blue-900 md:text-blue-800 text-5xl'/>
                    <span className='test-sm md:text-2xl hidden md:block text-blue-700 md:text-blue-900 lg:text-blue-700 font-black md:font-semibold lg:font-bold tracking-wide'  style={{textShadow:"2px 2px violet"}}>Travel Agency</span>
                </a>
                {/*+++++ Language Change +++++*/}
                <div className="flex items-center md:order-2 space-x-2 gap-0 md:gap-3 md:space-x-0 rtl:space-x-reverse">
                    <button type="button" data-dropdown-toggle="language-dropdown-menu" className="text-sm select-none inline-flex items-center w-20 md:w-24  justify-center md:px-3 md:py-2 px-1 py-1 md:text-base font-semibold lg:font-bold text-gray-100 xl:text-green-50 dark:text-white border border-gray-500 xl:border-green-50 rounded-lg cursor-pointer  dark:hover:bg-gray-700 dark:hover:text-white hover:font-extrabold hover:border-2 focus:font-extrabold focus:border-2">
                        {pageSub}
                    </button>
                    
                    <div className="z-50 hidden  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
                        <ul className="py-2 font-medium" role="none">
                        <li onClick={changeMMSub}>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div className="inline-flex items-center">
                                Burmese (Myanmar)
                            </div>
                            </a>
                        </li>
                        <li onClick={changeEngSub}>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                            <div className="inline-flex items-center">
                                English (US)
                            </div>
                            </a>
                        </li>
                        
                        </ul>
                    </div>
                    <button onClick={changeSideBar} type="button" className="lg:block inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-xl bg-transparent active:bg-sky-600  xl:hidden " aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div> 
                {/* ===== Nav DropDown ===== */}
                <div id='navSideBar' className='fixed overflow-hidden hidden animate__animated animate__faster transition-all top-0 left-0 w-screen h-screen bg-gray-50 py-6 px-3'>
                    <div>
                        <div onClick={changeSideBar} className='flex justify-end text-3xl'><XLg className='w-12 h-12 p-2 rounded-xl bg-transparent active:bg-sky-300 '/></div>
                        <div className='w-full h-[1px] my-3 bg-slate-300'></div>
                    </div>
                    <SideBar/>
                </div> 
                <div className="hidden lg:hidden mx-auto items-center justify-between w-full xl:flex md:w-auto md:order-1" id="navbar-default">
                    <ul className="flex flex-col  font-medium  md:p-0 mt-4 border  border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 xl:space-x-14 2xl:space-x-16 md:mt-0 md:border-0 md:bg-transparent lg:space-x-3 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li  className=''>
                        <button onMouseOver={showDropOne} onMouseOut={hideDropOne} className=' flex items-center font-semibold  tracking-wider text-base lg:text-sm xl:text-base py-5 transition-all rounded text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>{motherSub?.nav_sub_1}<ChevronDown className='ms-2'/></button>
                        {/* ==========  drop down one   ==========   */}
                        <div className='w-screen absolute left-0'>
                            <div className='container mx-auto px-20 2xl:px-52 LL:px-72 '>
                                <div ref={gettingIdOne} onMouseOver={thisIsDropOne} onMouseOut={thisIsDropOne} id="dropdownHover1" className= 'animate__animated animate__faster transition-all duration-300 hidden'>
                                    <NavOne/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li  className=''>
                        <button onMouseOver={showDropTwo} onMouseOut={hideDropTwo} className=' flex items-center font-semibold  tracking-wider text-base py-5 transition-all rounded text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-800'>{motherSub?.nav_sub_2}<ChevronDown className='ms-2'/></button>
                        {/* ==========  drop down two  ========== */}
                        <div className='w-screen absolute left-0'>
                            <div className='container mx-auto px-20 2xl:px-52 LL:px-72 '>
                                <div ref={gettingIdTwo} onMouseOver={thisIsDropTwo} onMouseOut={thisIsDropTwo} id="dropdownHover2" className='animate__animated animate__faster transition-all  duration-300  hidden'>
                                    <NavTwo/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className='flex items-center font-semibold  tracking-wider text-base py-5 transition-all delay-100text-gray-100 rounded text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>{motherSub?.nav_sub_3}</a>
                    </li>
                    <li>
                        <a href="#" className='flex items-center font-semibold  tracking-wider text-base py-5 transition-all delay-100text-gray-100 rounded text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>Admin Page</a>
                    </li>
                    
                    </ul>
                </div>
            </div>
        </nav>
        {/* ===== hero landing text ======== */}
        <div className={`absolute top-[6%]  w-full h-full font-bold text-sky-200 lg:text-sky-50 flex items-center text-center flex-col justify-center ${pageSub === "Myanmar" ? 'text-3xl md:text-4xl lg:text-5xl xl:text-6xl space-y-3 md:space-y-5 lg:space-y-7 xl:space-y-12' : 'space-y-5 2xl:space-y-8 text-5xl md:text-6xl lg:text-7xl xl:text-8xl'} `} >
            <div className={`font-bold tracking-wide ${pageSub === "Myanmar" ? 'leading-[55px]' : 'leading-[60px]'}`}><span>{motherSub?.heroLand_sub_1}</span> <span className=' md:hidden'>{motherSub?.heroLand_sub_2}</span></div>
            <h1 className={`font-bold tracking-wide hidden md:block ${pageSub === "Myanmar" ? 'leading-[60px]' : ''}`}>{motherSub?.heroLand_sub_2}</h1>
            <h6 className='text-green-100 px-3 lg:text-gray-50 text-xl md:text-2xl font-bold tracking-wide leading-[30px] md:leading-10'>{motherSub?.heroLand_sub_3}</h6>
            <button className='select-none text-gray-200 bg-orange-500 lg:bg-slate-900 border-2 outline-1 border-orange-500 lg:border-slate-900 rounded-2xl tracking-wider text-base font-bold px-5 py-2 lg:py-3 hover:bg-slate-800 transition-all delay-100'>{motherSub?.heroLand_sub_4}</button>
        </div>
    </div>
    </>
  )
}

export default Nav
