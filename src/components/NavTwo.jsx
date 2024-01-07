import React from 'react'
import { PinMapFill,ListTask,Grid3x3Gap, Facebook } from 'react-bootstrap-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach,faCity,faClipboard,faMountainSun,faGopuram,faBookmark } from '@fortawesome/free-solid-svg-icons'
import { PatchCheckFill } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const NavTwo = () => {
  const pageSub = useSelector((state) => state.dataCenter.page_sub)
  const motherSub = useSelector((state) => state.dataCenter.mother_sub)
  return (
    <div className=''>
        <div className= {` px-10 py-14 rounded-2xl bg-gray-50  space-y-5 ${pageSub === "Myanmar" && 'font-MM'} ${pageSub === "English" && 'font-EN'}`}>
        <div className='grid grid-cols-4 gap-10'>
        <div>
            <div className='flex items-center space-x-2 text-base font-extrabold text-slate-700'><Grid3x3Gap className='text-blue-600 text-lg'/><h1>{motherSub?.navDrop_title_sub_3}</h1></div>
            <div className='my-3 bg-slate-300 h-[1px]'></div>
            <div>
                <ul className=' bg-transparent text-base lg:text-sm DD:text-base font-semibold text-slate-500'>
                        <li className='ps-5 py-4 rounded-lg border-b'>
                            <div className='flex items-center space-x-2 '><FontAwesomeIcon icon={faCity} /><div>{motherSub?.navDrop_sub_19}</div></div>
                        </li>
                        <li className='ps-5 py-4 rounded-lg border-b'>
                            <div className='flex items-center space-x-2 '><FontAwesomeIcon icon={faUmbrellaBeach} /><div>{motherSub?.navDrop_sub_18}</div></div>
                        </li>
                        <li className='ps-5 py-4 rounded-lg border-b'>
                            <div className='flex items-center space-x-2 '><FontAwesomeIcon icon={faGopuram} /><div>{motherSub?.navDrop_sub_23}</div></div>
                        </li>
                        <li className='ps-5 py-7'>
                        </li>
                        <li className='ps-5 py-4 rounded-lg border-b'>
                            <div className='flex items-center space-x-2 '><FontAwesomeIcon icon={faMountainSun} /><div>{motherSub?.navDrop_sub_21}</div></div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-span-2'>
                <div className='flex items-center space-x-2 text-base font-extrabold text-slate-700'><FontAwesomeIcon icon={faClipboard} className='text-blue-500 text-lg'/> <h1>{motherSub?.navDrop_title_sub_4}</h1></div>
                <div className='my-3 bg-slate-300 h-[1px]'></div>
                <div className='grid grid-cols-2 gap-5'>
                    <ul className=' bg-transparent text-base lg:text-sm LL:text-base font-semibold text-slate-500'>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                        <img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_650/v1623088422/Shwedagon-Pagoda-Guide-Sunset/Shwedagon-Pagoda-Guide-Sunset.jpg" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400' alt="" /> <a href="#">{motherSub?.navDrop_sub_29}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://myanmarbeaches.files.wordpress.com/2010/04/chaungtha7.jpg" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400' alt="" /><a href="#">{motherSub?.navDrop_sub_32}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://www.ancient-origins.net/sites/default/files/field/image/Temples-of-Bagan-Restoration.jpg" alt="" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_33}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://www.indochinavoyages.com/wp-content/uploads/2019/12/u_bein_bridge_2.jpg" alt="" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_35}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://indawgyilake.com/files/uploads/ecotourism-indawgyi-600x377.jpg" alt="" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_37}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://www.ygnzoo.com/wp-content/uploads/2018/11/white-tiger.jpg" alt="" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_39}</a>
                        </li>
                    </ul>
                    <ul className=' bg-transparent text-base lg:text-sm LL:text-base font-semibold text-slate-500'>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://www.gomyanmartours.com/wp-content/uploads/2016/03/Mandalay-Palace3.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400' /><a href="#">{motherSub?.navDrop_sub_30}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/89253742.jpg?k=3b002c7c6530836ef32a0a08327c4e603ff53345640851d04c1ebbbe585e15a2&o=&hp=1" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_31}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://eazy2go.files.wordpress.com/2018/10/facebook_15388454404161254603763.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_34}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://blog.ict.com.mm/wp-content/uploads/2013/10/kyite-htee-yoe.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_36}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://germanbackpacker.com/wp-content/uploads/2019/03/Things-to-do-in-inle-lake-myanmar.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_38}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://trekking-myanmar.com/wp-content/uploads/2018/09/myanmar-trekking-peaks-mountaineering-1497.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_40}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='flex items-center space-x-2 text-base font-extrabold text-slate-700'><FontAwesomeIcon icon={faBookmark} className='text-blue-500 text-lg'/><h1>{motherSub?.navDrop_title_sub_5}</h1></div>
                <div className='my-3 bg-slate-300 h-[1px]'></div>
                <div>
                <ul className=' bg-transparent text-base lg:text-sm LL:text-base  font-semibold text-slate-500'>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://myanmarmix.com/sites/myanmarmix.com/files/news-images/lead_2.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_41}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://i.pinimg.com/originals/2a/37/a0/2a37a06e9aca46c6d0d34c42ed74da1b.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_42}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://images.squarespace-cdn.com/content/v1/5005c43024ac90096800ff2d/1504875850109-M6EHI6ZY743YAAYCOKIO/fire-balloon-launching-in-taunggyi-myanmar" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#" >{motherSub?.navDrop_sub_43}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://tourism.gov.mm/wp-content/uploads/2019/03/3-3.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_44}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://thumbs.dreamstime.com/b/beauty-woman-shan-tai-yai-ethnic-group-living-parts-myanmar-thailand-tribal-dress-new-year-thoet-thai-chiang-rai-210872412.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_45}</a>
                        </li>
                        <li className='cursor-pointer flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-200 hover:text-blue-500'>
                            <img src="https://myanmarhandicrafts.files.wordpress.com/2015/09/phaungdawoo03.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_46}</a>
                        </li>
                    
                    </ul>
                </div>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default NavTwo