import React, { useEffect, useRef, useState } from 'react'
import {initFlowbite} from 'flowbite'
import { useDispatch, useSelector } from 'react-redux'
import { change_English_sub, change_Myanmar_sub, start_language } from '../DataSharing/DataCenter'
import { ChevronDown, GraphUpArrow, PersonCircle, XLg } from 'react-bootstrap-icons'
import NavOne from './NavOne'
import NavTwo from './NavTwo'
import SideBar from './SideBar'
import 'animate.css';
import './themeMode.css';
import { SiYourtraveldottv } from "react-icons/si";
import { useParams } from 'react-router-dom'


const NavForPlaces = () => {
    const {destinationName} = useParams()
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
    const Destination_Of_Myanmar_Images = useSelector((state) =>state.dataCenter.Destination_Of_Myanmar_Images[destinationName])
    const Destination_Of_Myanmar = useSelector((state) =>state.dataCenter.Destination_Of_Myanmar[destinationName])

    const gettingIdOne = useRef()
    const gettingIdTwo = useRef()
    const [isTrue , setIsTrue] = useState(false) 
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(start_language(pageSub))
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
    <div className={` ${pageSub === "Myanmar" && 'font-MM'} ${pageSub === "English" && 'font-EN'}`}>
        {/* +++++ Nab Bar +++++ */}
        <nav className="LL:w-full relative mx-auto shadow-2xl myShadow">
            <div className=' LL:h-[800px] bg-gradient-to-tr from-slate-600 to-slate-600 shadow-lg shadow-slate-700'>
                <img src={Destination_Of_Myanmar_Images?.image_1} className='w-full h-full mix-blend-overlay object-none xl:object-cover object-center'/>       
                <div className='border-2 w-[865px] h-[510px] absolute top-[18%] left-[20%] flex items-center justify-center text-[180px] font-semibold text-slate-50 border-slate-100'>
                    {Destination_Of_Myanmar?.text_1}
                </div>
                {/* <img src="https://i.pinimg.com/736x/2a/38/04/2a3804cb1b06f8a8c2f922191ea5c674.jpg" className='block w-full h-full lg:hidden object-cover object-center MIN1:object-top  mix-blend-overlay'/>        */}
            </div>
            <div className="container absolute top-0 bg-transparent flex mx-auto items-center justify-between p-4">
               
                {/*+++++ Language Change +++++*/}
                
                {/* ===== Nav DropDown ===== */}
                <div id='navSideBar' className='fixed overflow-hidden hidden animate__animated animate__faster transition-all top-0 left-0 w-screen h-screen bg-gray-50 py-6 px-3'>
                    <div>
                        <div onClick={changeSideBar} className='flex justify-end text-3xl'><XLg className='w-12 h-12 p-2 rounded-xl bg-transparent active:bg-sky-300 '/></div>
                        <div className='w-full h-[1px] my-3 bg-slate-300'></div>
                    </div>
                    <SideBar/>
                </div> 
                <div className="hidden lg:hidden mx-auto items-center justify-between w-full xl:flex md:w-auto md:order-1" id="navbar-default">
                    <ul className="flex flex-col  md:p-0 mt-4 border  border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 xl:space-x-14 2xl:space-x-16 md:mt-0 md:border-0 md:bg-transparent lg:space-x-3 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li  className=''>
                        <button onMouseOver={showDropOne} onMouseOut={hideDropOne} className=' flex items-center font-semibold  tracking-wider text-base lg:text-sm xl:text-base py-5 transition-all rounded text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>{motherSub?.nav_sub_1}<ChevronDown className='ms-2'/></button>
                        {/* ==========  drop down one   ==========   */}
                        <div className='w-full absolute left-0 z-10'>
                            <div className=' px-20 2xl:px-52 LL:px-32 '>
                                <div ref={gettingIdOne} onMouseOver={thisIsDropOne} onMouseOut={thisIsDropOne} id="dropdownHover1" className= 'animate__animated animate__faster transition-all duration-300 hidden'>
                                    <NavOne/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li  className=''>
                        <button onMouseOver={showDropTwo} onMouseOut={hideDropTwo} className=' flex items-center font-semibold  tracking-wider text-base py-5 transition-all rounded text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-800'>{motherSub?.nav_sub_2}<ChevronDown className='ms-2'/></button>
                        {/* ==========  drop down two  ========== */}
                        <div className='w-full absolute left-0'>
                            <div className='container mx-auto px-20 2xl:px-52 LL:px-12 '>
                                <div ref={gettingIdTwo} onMouseOver={thisIsDropTwo} onMouseOut={thisIsDropTwo} id="dropdownHover2" className='animate__animated animate__faster transition-all  duration-300  hidden'>
                                    <NavTwo/>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" className='flex items-center font-semibold  tracking-wider text-base py-5 transition-all delay-100 rounded text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>{motherSub?.nav_sub_3}</a>
                    </li>
                    <li>
                        {/* ============ drop down three ============= */}
                        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-offset-distance="1" data-dropdown-trigger="hover" className='flex items-center font-semibold  tracking-wider text-base py-5 transition-all delay-100 rounded text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700' type="button">
                            {motherSub?.nav_sub_4}<ChevronDown className='ms-2'/>
                        </button>

                        <div id="dropdownHover" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700">
                            <ul className="py-2 space-y-2 text-lg text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            <li>
                                <div className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><PersonCircle className=' text-2xl'/><span>Sing In</span> </div>
                            </li>
                            <li>
                            <div className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"><GraphUpArrow className=' text-2xl'/><span>Dashboard</span> </div>
                            </li>
                            <li>
                            <div className='py-2'>
                            <label htmlFor="toggle">
                                <input type="checkbox" id="toggle"/>
                                <div className="switch me-3">
                                    <span className="knob"></span>
                                    <span className="moon"></span>
                                    <span className="sun"></span>
                                </div>
                                <h2 className="label" data-dark="Dark mode" data-light="Light mode">Dark mode</h2>
                                {/* <div className="overlay"></div> */}
                            </label>
                            </div>
                            </li>
                            
                            </ul>
                        </div>

                    </li>
                    
                    </ul>
                </div>
            </div>
        
        <div className='LL:w-[550px] LL:h-[350px] absolute -bottom-[20%] left-[5%] rounded-lg border-2 shadow-lg shadow-slate-700 overflow-hidden border-slate-600 bg-gray-500'>
            <img className='w-full h-full object-center object-cover' src={Destination_Of_Myanmar_Images?.image_2} alt="" />
        </div>
        </nav>
    </div>
    </>
  )
}

export default NavForPlaces
