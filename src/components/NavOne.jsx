import React from 'react'
import { PinMapFill,ListTask,Grid3x3Gap, Facebook } from 'react-bootstrap-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach,faCity,faSpa,faMountainSun,faGolfBallTee,faGopuram } from '@fortawesome/free-solid-svg-icons'
import { PatchCheckFill } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const NavOne = () => {
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
  return (
    <div className=''>
        <div className= {` px-8 py-14 rounded-2xl bg-gray-50 space-y-5 ${pageSub === "Myanmar" && 'font-MM'} ${pageSub === "English" && 'font-EN'}`}>
            <div className='grid grid-cols-4 gap-20'>
            <div className='col-span-2'>
                <div className='flex items-center space-x-2 text-base font-extrabold text-slate-700'><PinMapFill className='text-blue-600 text-lg'/> <h1>{motherSub?.navDrop_title_sub_1}</h1></div>
                <div className='my-3 bg-slate-300 h-[1px]'></div>
                <div className='grid grid-cols-2 gap-5'>
                    <ul className=' bg-transparent text-base font-semibold text-slate-500'>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_1}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_2}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_3}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_4}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_5}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_6}</a>
                        </li>
                    </ul>
                    <ul className=' bg-transparent text-base font-semibold text-slate-500'>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_7}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_8}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_9}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_10}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_11}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='flex items-center space-x-2 text-base font-extrabold text-slate-700'><ListTask className='text-blue-600 text-lg'/><h1>{motherSub?.navDrop_title_sub_2}</h1></div>
                <div className='my-3 bg-slate-300 h-[1px]'></div>
                <div>
                <ul className=' bg-transparent text-base font-semibold text-slate-500'>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_12}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_13}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_14}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_15}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_16}</a>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <a href="#">{motherSub?.navDrop_sub_17}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
            <div className='flex items-center space-x-2 text-base font-extrabold text-slate-700'><Grid3x3Gap className='text-blue-600 text-lg'/><h1>{motherSub?.navDrop_title_sub_3}</h1></div>
            <div className='my-3 bg-slate-300 h-[1px]'></div>
            <div>
                <ul className=' bg-transparent text-base font-semibold text-slate-500'>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faUmbrellaBeach} /><a href="#">{motherSub?.navDrop_sub_18}</a></div>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faCity} /><a href="#">{motherSub?.navDrop_sub_19}</a></div>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faSpa} /><a href="#">{motherSub?.navDrop_sub_20}</a></div>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faMountainSun} /><a href="#">{motherSub?.navDrop_sub_21}</a></div>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faGolfBallTee} /><a href="#">{motherSub?.navDrop_sub_22}</a></div>
                        </li>
                        <li className='cursor-pointer ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faGopuram} /><a href="#">{motherSub?.navDrop_sub_23}</a></div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
            <div className=' col-span-4 relative  border h-28 overflow-hidden rounded-2xl bg-black'>
                <img src="https://r4.wallpaperflare.com/wallpaper/340/812/1015/nature-sun-sunset-sunrise-wallpaper-7950e80da1da6d8b9697588f50a1561d.jpg?timestamp=1700143613063" alt="" className='w-full h-full bg-gradient-to-tr opacity-75  object-cover object-center'/>
                <div className={`absolute top-0 w-full h-full px-5 flex md:flex-col lg:flex-row justify-between items-center text-slate-100 `}>
                    <div className={`flex flex-col items-start ${pageSub === "Myanmar" && 'space-y-5'} ${pageSub === "English" && 'space-y-3'}`}>
                        <h1 className='text-xl font-bold'>{motherSub?.navDrop_sub_24}</h1>
                        <div className='flex flex-wrap items-center gap-3 text-sm font-semibold'>
                            <div className='flex items-center space-x-1  shadow-lg'>
                                <PatchCheckFill className='ms-1'/>
                                <span>{motherSub?.navDrop_sub_25}</span>
                            </div>
                            <div className='flex items-center space-x-1 shadow-lg'>
                                <PatchCheckFill className='ms-1'/>
                                <span>{motherSub?.navDrop_sub_26}</span>
                            </div>
                            <div className='flex items-center space-x-1 shadow-lg'>
                                <PatchCheckFill className='ms-1'/>
                                <span>{motherSub?.navDrop_sub_27}</span>
                            </div>
                        </div>
                    </div>
                    <div className={``}>
                        <button className={`select-none w-full block text-slate-800 bg-gray-50 border-2 outline-1 outline-slate-900 border-slate-900 rounded-2xl hover:bg-slate-200 hover:text-blue-900 transition-all delay-100 ${pageSub === "Myanmar" && 'w-56 xl:w-[200px] py-3 text-base font-bold'} ${pageSub === "English" && 'text-lg font-bold px-5 py-3'}`}>{motherSub?.navDrop_sub_28}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavOne