import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

const OfferInSlideTwo = () => {
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
  return (
    <div className=' space-y-7 MIN1:space-y-10 '>
      <h1 className={` font-bold lg:font-black text-center ${pageSub === "English" ?  "text-3xl MIN1:text-4xl md:text-[42px]": "text-[28px] md:text-[36px] DD:text-[42px] "}  text-slate-800`}>{motherSub?.Offer_Title_sub}</h1>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 xl:gap-6'>
        <div className='w-full h-auto space-y-2 group  cursor-pointer'>
            <img src="https://myanmarmix.com/sites/myanmarmix.com/files/news-images/lead_2.jpg" alt="" className='h-28 w-full MIN1:h-32 MIN2:h-52 md:h-44 lg:h-48 xl:h-36 2xl:h-40 LL:h-52 rounded-2xl object-cover  shadow-md border border-blue-400'/>
            <h3 className='text-center font-bold text-base MIN2:text-lg transition-all duration-500 group-hover:text-blue-700'>{motherSub?.Offer_sub_1}</h3>
        </div>
        <div className='w-full h-auto space-y-2 group cursor-pointer'>
            <img src="https://ygstatic.obs.ap-southeast-3.myhuaweicloud.com/61b0abc75d6b5341c1674aecd9a77155.jpg" alt="" className='h-28 w-full MIN1:h-32 MIN2:h-52 md:h-44 lg:h-48 xl:h-36 2xl:h-40 LL:h-52 rounded-2xl object-cover shadow-md border border-blue-400'/>
            <h3 className='text-center font-bold text-base MIN2:text-lg transition-all duration-500 group-hover:text-blue-700'>{motherSub?.Offer_sub_2}</h3>
        </div>
        <div className='w-full h-auto space-y-2 group cursor-pointer'>
            <img src="https://images.squarespace-cdn.com/content/v1/5005c43024ac90096800ff2d/1504875850109-M6EHI6ZY743YAAYCOKIO/fire-balloon-launching-in-taunggyi-myanmar" alt="" className='h-28 MIN1:h-32 MIN2:h-52 md:h-44 lg:h-48 xl:h-36 2xl:h-40 LL:h-52 w-full rounded-2xl object-cove shadow-md border border-blue-400'/>
            <h3 className='text-center font-bold text-base MIN2:text-lg transition-all duration-500 group-hover:text-blue-700'>{motherSub?.Offer_sub_3}</h3>
        </div>
        <div className='w-full h-auto space-y-2 group cursor-pointer'>
            <img src="https://tourism.gov.mm/wp-content/uploads/2019/03/3-3.jpg" alt="" className='h-28 MIN1:h-32 MIN2:h-52 md:h-44 lg:h-48 xl:h-36 2xl:h-40 LL:h-52 w-full rounded-2xl object-cover shadow-md border border-blue-400'/>
            <h3 className='text-center font-bold text-base MIN2:text-lg transition-all duration-500 group-hover:text-blue-700'>{motherSub?.Offer_sub_4}</h3>
        </div>
        <div className='w-full h-auto space-y-2 group cursor-pointer'>
            <img src="https://myanmarhandicrafts.files.wordpress.com/2015/09/phaungdawoo03.jpg" alt="" className='h-28 MIN1:h-32 MIN2:h-52 md:h-44 lg:h-48 xl:h-36 2xl:h-40 LL:h-52 w-full rounded-2xl object-cover shadow-md border border-blue-400'/>
            <h3 className='text-center font-bold text-base MIN2:text-lg transition-all duration-500 group-hover:text-blue-700'>{motherSub?.Offer_sub_5}</h3>
        </div>
        <div className='w-full h-auto space-y-2 group cursor-pointer'>
            <div className='h-28 MIN1:h-32 MIN2:h-52 md:h-44 lg:h-48 xl:h-36 2xl:h-40 LL:h-52 w-full bg-slate-200 rounded-2xl flex items-center justify-center'><div className='h-12 w-12 rounded-full bg-blue-700 flex items-center justify-center'><ArrowRight className='text-lg text-white'/></div></div>
            <h3 className='text-center font-bold text-base MIN2:text-lg transition-all duration-500 group-hover:text-blue-700'>{motherSub?.Offer_sub_6}</h3>
        </div>
      </div>
    </div>
  )
}

export default OfferInSlideTwo
