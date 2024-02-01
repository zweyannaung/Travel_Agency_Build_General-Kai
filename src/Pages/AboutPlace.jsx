import React from 'react'
import Nav from '../components/Nav';
import NavForPlaces from '../components/NavForPlaces';
import Places from '../components/Places';
import '../CSS/navPlace.css'
import { useSelector } from 'react-redux';
import '../CSS/navPlace.css';

const AboutPlace = () => {
    const pageSub = useSelector((state) => state.dataCenter.page_sub)
    const motherSub = useSelector((state) => state.dataCenter.mother_sub)
  return (
    <div className={`bg-gradient-to-bl from-[#05102A] to-green-100`}>
      <div className={`LL:w-3/4 min-h-screen mx-auto  myShadow ${pageSub === "Myanmar" && 'font-MM'} ${pageSub === "English" && 'font-EN'}`}>
        <NavForPlaces/>
        <Places/>
      </div>
    </div>
    // 
  )
}

export default AboutPlace
