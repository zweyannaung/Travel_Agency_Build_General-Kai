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
            <div className='lg:h-[635px] xl2:h-[675px] DD:h-[620px] LL:h-[780px] bg-gradient-to-tr from-slate-600 to-slate-600 shadow-lg shadow-slate-700'>
                <img src={Destination_Of_Myanmar_Images?.image_1} className='w-full h-full mix-blend-overlay object-none lg:object-cover xl:object-cover object-center'/>       
                <div className={`border-2 lg:w-[700px] lg:h-[404px] xl:w-[810px] xl:h-[450px] xl2:w-[870px] xl2:h-[500px] DD:w-[800px] DD:h-[430px] LL:w-[1000px] LL:h-[595px] absolute lg:top-[15%] lg:left-[15%] DD:top-[15%]  DD:left-[15%] LL:top-[12%] LL:left-[15%] flex items-center justify-center text-[100px] lg:text-[150px] DD:text-[160px] LL:text-[180px] ${Destination_Of_Myanmar?.text_1 === "Mandalay" && "text-[160px] lg:text-[120px] xl:text-[140px] xl2:text-[150px] DD:text-[140px]"} ${Destination_Of_Myanmar?.text_1 === "Pyin Oo Lwin" && "text-[60px] lg:text-[100px] xl:text-[120px] DD:text-[120px] LL:text-[150px] "} ${Destination_Of_Myanmar?.text_1 === "Taung Gyi" && "text-[60px] lg:text-[130px] DD:text-[130px] "} ${Destination_Of_Myanmar?.text_1 === "MawlamyIne" && "text-[60px] lg:text-[100px] xl:text-[110px] xl2:text-[120px] DD:text-[110px] LL:text-[140px] "} ${Destination_Of_Myanmar?.text_1 === "Indaw Gyi" && "text-[50px] lg:text-[120px] xl2:text-[150px] DD:text-[130px] "}  font-semibold text-slate-50 border-slate-100`}>
                    {Destination_Of_Myanmar?.text_1}
                </div>
            </div>
            <div className="container absolute top-0 bg-transparent flex mx-auto items-center justify-between p-4">
                {/*+++++ Language Change +++++*/}
                <div className=" absolute top-5 right-10">
                    <button onClick={changeSideBar} type="button" className="lg:block inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-xl bg-transparent active:bg-sky-600  xl:hidden " aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div> 
               
                {/* ===== Nav DropDown ===== */}
                <div id='navSideBar' className='fixed overflow-hidden hidden animate__animated animate__faster transition-all top-0 left-0 w-screen h-screen bg-gray-50 py-6 px-3 z-50'>
                    <div>
                        <div onClick={changeSideBar} className='flex justify-end mr-4 text-3xl'><XLg className='w-12 h-12 p-2 rounded-xl bg-transparent active:bg-sky-300 '/></div>
                        <div className='w-full h-[1px] my-3 bg-slate-300'></div>
                    </div>
                    <SideBar/>
                </div> 
                <div className="hidden lg:hidden mx-auto items-center justify-between w-full xl:flex md:w-auto md:order-1" id="navbar-default">
                    <ul className="flex flex-col  md:p-0 mt-4 border  border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 xl:space-x-14 2xl:space-x-16 md:mt-0 md:border-0 md:bg-transparent lg:space-x-3 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li  className=''>
                        <button onMouseOver={showDropOne} onMouseOut={hideDropOne} className=' flex items-center font-semibold  tracking-wider text-base lg:text-sm xl:text-base py-5 transition-all rounded text-gray-100 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'>{motherSub?.nav_sub_1}<ChevronDown className='ms-2'/></button>
                        {/* ==========  drop down one   ==========   */}
                        <div className='w-full absolute left-0 z-20'>
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
                        <div className='w-full absolute left-0 z-20'>
                            <div className='container mx-auto px-20 2xl:px-52 LL:px-12 '>
                                <div ref={gettingIdTwo} onMouseOver={thisIsDropTwo} onMouseOut={thisIsDropTwo} id="dropdownHover2" className='animate__animated animate__faster transition-all  duration-300 hidden'>
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
        
        <div className='lg:w-[430px] lg:h-[260px] xl:w-[480px] xl:h-[300px] DD:w-[480px] DD:h-[280px] 2xl:w-[490px] 2xl:h-[290px] LL:w-[600px] LL:h-[375px] absolute -bottom-[23%] LL:-bottom-[24%] left-[5%] lg:left-[5.5%] rounded-lg border-2 shadow-lg shadow-slate-700 overflow-hidden border-slate-600 bg-gray-500'>
            <img className='w-full h-full object-center object-cover' src={Destination_Of_Myanmar_Images?.image_2} alt="" />
        </div>
        </nav>
    </div>
    </>
  )
}

export default NavForPlaces
