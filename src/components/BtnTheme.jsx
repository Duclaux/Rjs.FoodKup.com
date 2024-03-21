import React, { useState } from 'react'
import { BiSolidSun } from "react-icons/bi";
import { PiMoonFill } from "react-icons/pi";

function BtnTheme() {
    const [mode, setMode] = useState(true)

    const changeMode = () => {
        setMode(!mode)
        document.documentElement.classList.toggle('dark')
    }

  return (
    <div onClick={changeMode} className= { mode ? `flex items-center justify-between border-[1px] rounded-[20px] w-[50px] lg:w-[60px] cursor-pointer border-[#000] dark:border-white` : `flex items-center justify-between border-[1px] border-black rounded-[20px] w-[50px] lg:w-[60px] cursor-pointer dark:border-[#fff] dark:shadow-[0_35px_60px_-15px_#1C0B86]`}>
        
        <BiSolidSun color='#FFE000' className={mode ? `w-[20px] h-[20px] md:w-[25px] md:h-[25px] opacity-100 transition-all duration-500` : `w-[20px] h-[20px] md:w-[25px] md:h-[25px] opacity-0 transition-all duration-500`}/>
        
        <PiMoonFill className={mode ? `w-[20px] h-[20px] md:w-[25px] md:h-[25px] opacity-0 transition-all duration-500` : `w-[20px] h-[20px] md:w-[25px] md:h-[25px] opacity-100 transition-all duration-500 text-white`}/>
    </div>
  )
}

export default BtnTheme