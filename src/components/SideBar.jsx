import { faBookmark, faCity, faGolfBallTee, faGopuram, faMountainSun, faSpa, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Grid3x3Gap, ListTask, PatchCheckFill, PinMapFill, XLg } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const pageSub = useSelector((state) => state.dataCenter.page_sub)
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
    
  return (
    <div className={`px-3 overflow-scroll h-[100vh] ${pageSub === "Myanmar" && 'font-MM'} ${pageSub === "English" && 'font-EN'}`}>
      <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-transparent dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        <h2 id="accordion-flush-heading-1">
          <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b mb-2 border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-1" aria-expanded="false" aria-controls="accordion-flush-body-1">
            <span>{motherSub?.nav_sub_1}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-flush-body-1" className="hidden h-[550px] overflow-scroll" aria-labelledby="accordion-flush-heading-1">
          <div className="py-5 space-y-7 border-b bg-slate-200 rounded-xl px-3 border-gray-200 dark:border-gray-700">
            <div>
            <div className='flex items-center space-x-2 text-base font-extrabold text-slate-700'><PinMapFill className='text-blue-600 text-lg'/> <h1>{motherSub?.navDrop_title_sub_1}</h1></div>
            <div className='my-3 bg-slate-300 h-[1px]'></div>
            <div className='grid grid-cols-2 gap-5'>
              <ul className=' bg-transparent text-base font-bold text-slate-500'>
                <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <a href="#">{motherSub?.navDrop_sub_1}</a>
                </li>
                <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <a href="#">{motherSub?.navDrop_sub_2}</a>
                </li>
                <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <a href="#">{motherSub?.navDrop_sub_3}</a>
                </li>
                <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <a href="#">{motherSub?.navDrop_sub_4}</a>
                </li>
                <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <a href="#">{motherSub?.navDrop_sub_5}</a>
                </li>
                <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <a href="#">{motherSub?.navDrop_sub_6}</a>
                </li>
              </ul>
              <ul className=' bg-transparent text-base font-bold text-slate-500'>
                    <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                        <a href="#">{motherSub?.navDrop_sub_7}</a>
                    </li>
                    <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                        <a href="#">{motherSub?.navDrop_sub_8}</a>
                    </li>
                    <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                        <a href="#">{motherSub?.navDrop_sub_9}</a>
                    </li>
                    <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                        <a href="#">{motherSub?.navDrop_sub_10}</a>
                    </li>
                    <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                        <a href="#">{motherSub?.navDrop_sub_11}</a>
                    </li>
                </ul>
            </div>
            </div>
            <div>
              <div className='flex items-center space-x-2 text-base font-extrabold text-slate-700'><ListTask className='text-blue-600 text-xl'/><h1>{motherSub?.navDrop_title_sub_2}</h1></div>
              <div className='my-3 bg-slate-300 h-[1px]'></div>
              <div>
                <ul className=' bg-transparent text-base font-bold text-slate-500'>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <a href="#">{motherSub?.navDrop_sub_12}</a>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <a href="#">{motherSub?.navDrop_sub_13}</a>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <a href="#">{motherSub?.navDrop_sub_14}</a>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <a href="#">{motherSub?.navDrop_sub_15}</a>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <a href="#">{motherSub?.navDrop_sub_16}</a>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <a href="#">{motherSub?.navDrop_sub_17}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className='flex items-center space-x-2 text-base font-extrabold text-slate-700'><Grid3x3Gap className='text-blue-600 text-lg'/><h1>{motherSub?.navDrop_title_sub_3}</h1></div>
              <div className='my-3 bg-slate-300 h-[1px]'></div>
              <div>
                <ul className=' bg-transparent text-base font-bold text-slate-500'>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faUmbrellaBeach} /><a href="#">{motherSub?.navDrop_sub_18}</a></div>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faCity} /><a href="#">{motherSub?.navDrop_sub_19}</a></div>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faSpa} /><a href="#">{motherSub?.navDrop_sub_20}</a></div>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faMountainSun} /><a href="#">{motherSub?.navDrop_sub_21}</a></div>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faGolfBallTee} /><a href="#">{motherSub?.navDrop_sub_22}</a></div>
                  </li>
                  <li className='ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                      <div className='flex items-center space-x-2'><FontAwesomeIcon icon={faGopuram} /><a href="#">{motherSub?.navDrop_sub_23}</a></div>
                  </li>
                    </ul>
              </div>
            </div>
              <div className='h-80 relative  border overflow-hidden rounded-2xl bg-black'>
                <img src="https://r4.wallpaperflare.com/wallpaper/340/812/1015/nature-sun-sunset-sunrise-wallpaper-7950e80da1da6d8b9697588f50a1561d.jpg?timestamp=1700143613063" alt="" className='w-full h-full bg-gradient-to-tr opacity-75  object-cover object-center'/>
                <div className={`absolute flex flex-col justify-evenly top-0 w-full h-full px-5 items-start text-slate-100 `}>
                  <div className={`flex flex-col items-start ${pageSub === "Myanmar" && 'space-y-5'} ${pageSub === "English" && 'space-y-3'}`}>
                      <h1 className='text-lg font-extrabold leading-[30px]'>{motherSub?.navDrop_sub_24}</h1>
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
                      <button className={`select-none text-slate-800 bg-gray-50 border-2 outline-1 outline-slate-900 border-slate-900 rounded-2xl hover:bg-slate-300 hover:text-blue-900 transition-all delay-100 ${pageSub === "Myanmar" && ' px-2 py-3 text-sm font-bold'} ${pageSub === "English" && 'text-lg font-bold px-5 py-3'}`}>{motherSub?.navDrop_sub_28}</button>
                  </div>
              </div>
              </div>
          </div>
        </div>
        <h2 id="accordion-flush-heading-2">
          <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b mb-2 border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-2" aria-expanded="false" aria-controls="accordion-flush-body-2">
            <span>{motherSub?.nav_sub_2}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-flush-body-2" className="hidden h-[500px] overflow-scroll" aria-labelledby="accordion-flush-heading-2">
          <div className="py-5 space-y-7 border-b bg-slate-200 rounded-xl px-3 border-gray-200 dark:border-gray-700">
            <div >
                <div className='flex items-center space-x-2 text-base font-extrabold text-slate-500'><FontAwesomeIcon icon={faCity} /><h1>{motherSub?.navDrop_sub_19}</h1></div>
                <div className='my-3 bg-slate-300 h-[1px]'></div>
                <div>
                  <ul className=' bg-transparent text-base font-bold text-slate-500'>
                    <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                        <img src="https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_650/v1623088422/Shwedagon-Pagoda-Guide-Sunset/Shwedagon-Pagoda-Guide-Sunset.jpg" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400' alt="" /> <a href="#">{motherSub?.navDrop_sub_29}</a>
                    </li>
                    <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                        <img src="https://www.gomyanmartours.com/wp-content/uploads/2016/03/Mandalay-Palace3.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400' /><a href="#">{motherSub?.navDrop_sub_30}</a>
                    </li>
                  </ul>
                </div>
            </div>
            <div >
              <div className='flex items-center space-x-2 text-base font-extrabold text-slate-500'><FontAwesomeIcon icon={faUmbrellaBeach} /><h1>{motherSub?.navDrop_sub_18}</h1></div>
              <div className='my-3 bg-slate-300 h-[1px]'></div>
              <div>
                <ul className=' bg-transparent text-base font-bold text-slate-500'>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <img src="https://myanmarbeaches.files.wordpress.com/2010/04/chaungtha7.jpg" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400' alt="" /><a href="#">{motherSub?.navDrop_sub_32}</a>
                  </li>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/89253742.jpg?k=3b002c7c6530836ef32a0a08327c4e603ff53345640851d04c1ebbbe585e15a2&o=&hp=1" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_31}</a>
                    </li>
                </ul>
              </div>
            </div> 
            <div >
              <div className='flex items-center space-x-2 text-base font-extrabold text-slate-500'><FontAwesomeIcon icon={faGopuram} /><h1>{motherSub?.navDrop_sub_23}</h1></div>
              <div className='my-3 bg-slate-300 h-[1px]'></div>
              <div>
                <ul className=' bg-transparent text-base font-bold text-slate-500'>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <img src="https://www.ancient-origins.net/sites/default/files/field/image/Temples-of-Bagan-Restoration.jpg" alt="" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_33}</a>
                  </li>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <img src="https://www.indochinavoyages.com/wp-content/uploads/2019/12/u_bein_bridge_2.jpg" alt="" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_35}</a>
                  </li>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <img src="https://eazy2go.files.wordpress.com/2018/10/facebook_15388454404161254603763.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_34}</a>
                  </li>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <img src="https://blog.ict.com.mm/wp-content/uploads/2013/10/kyite-htee-yoe.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_36}</a>
                  </li>
                </ul>
              </div>
            </div> 
           <div >
              <div className='flex items-center space-x-2 text-base font-extrabold text-slate-500'><FontAwesomeIcon icon={faMountainSun} /><div>{motherSub?.navDrop_sub_21}</div></div>
              <div className='my-3 bg-slate-300 h-[1px]'></div>
              <div>
                <ul className=' bg-transparent text-base font-bold text-slate-500'>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <img src="https://indawgyilake.com/files/uploads/ecotourism-indawgyi-600x377.jpg" alt="" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_37}</a>
                  </li>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <img src="https://www.ygnzoo.com/wp-content/uploads/2018/11/white-tiger.jpg" alt="" className='w-10 h-10 rounded-full object-cover shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_39}</a>
                  </li>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <img src="https://germanbackpacker.com/wp-content/uploads/2019/03/Things-to-do-in-inle-lake-myanmar.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_38}</a>
                  </li>
                  <li className='flex items-center space-x-1 ps-5 py-2 duration-700 border border-transparent rounded-lg hover:bg-slate-300 hover:text-blue-500'>
                    <img src="https://trekking-myanmar.com/wp-content/uploads/2018/09/myanmar-trekking-peaks-mountaineering-1497.jpg" alt="" className='w-10 h-10 object-cover rounded-full shadow-md border border-blue-400'/><a href="#">{motherSub?.navDrop_sub_40}</a>
                  </li>
                </ul>
              </div>
            </div>
            <div >
              <div className='flex items-center space-x-2 text-base font-extrabold text-slate-500'><FontAwesomeIcon icon={faBookmark} className='text-blue-500 text-lg'/><h1>{motherSub?.navDrop_title_sub_5}</h1></div>
              <div className='my-3 bg-slate-300 h-[1px]'></div>
              <div>
              <ul className=' bg-transparent text-base font-bold text-slate-500'>
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
        <h2 id="accordion-flush-heading-3">
          <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" data-accordion-target="#accordion-flush-body-3" aria-expanded="false" aria-controls="accordion-flush-body-3">
            <span>{motherSub?.nav_sub_3}</span>
            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <div id="accordion-flush-body-3" className="hidden" aria-labelledby="accordion-flush-heading-3">
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
            <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
