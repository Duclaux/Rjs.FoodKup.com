import React from 'react'
import Navbar from '../block/Navbar'
import HeroTop from '../block/HeroTop'


function Header() {
  return (
    <div className='bg-gradient-to-bl from-[#f5474728] relative border-4 border-black'>
        <Navbar/>
        <HeroTop/>
        {/* <div className='w-[244px] h-[176px] lg:w-[576.1px] lg:h-[418.78px] absolute top-0 right-0 rounded-bl-[500px] shadow-[-10px_35px_60px_-15px_#FDC55E] bg-[#fdc55e53] -z-20'></div> */}
    </div>
  )
}

export default Header