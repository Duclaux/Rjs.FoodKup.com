import React, { useState } from 'react'
import { CgMenuHotdog } from "react-icons/cg";
import { IoIosCloseCircleOutline } from "react-icons/io";

import Container from '../components/Container'
import Logo from '../assets/logo.svg'
import LogoWhite from '../assets/logoWhite.svg'
import BtnTheme from '../components/BtnTheme';

function Navbar() {

    const [ menu, setMenu ] = useState(false)
    const [ logo, setLogo ] = useState(false)

    const showMenu = () => {
        setMenu(!menu)
    }

    const liens = [
        'Today special offers',
        'Why FoodHut',
        'Our Menu',
        'Our Popular food'
    ]

    const changeLogo = () =>{
        setLogo(!logo)
    }

  return (
    <div className=''>
        <Container styles='flex items-center justify-between'>
            {/* logo */}
            <div className=''>
                {
                    logo ? <img src={LogoWhite} alt="" className='w-[97px] h-[62px] lg:w-[121px] lg:h-[78px] logo'/> : <img src={Logo} alt="" className='w-[97px] h-[62px] lg:w-[121px] lg:h-[78px] logo'/>
                }
            </div>


            {/* div des liens */}
            <div className='flex items-center space-x-6'>
                <ul className= { menu ? `z-10 absolute top-28 py-[30px] left-0 w-full backdrop-blur-md lg:relative lg:flex lg:items-center lg:space-x-5 text-black space-y-10 text-center lg:space-y-0 transition-all duration-500` : `z-10 absolute -top-full py-[30px] left-0 w-full backdrop-blur-md lg:relative lg:flex lg:items-center lg:space-x-10 text-black space-y-10 text-center lg:space-y-0 transition-all duration-500` }>
                    {
                        liens.map((lien) => (
                            <li>
                                <a href="#" className='text-[18px] dark:text-white font-bold'>{lien}</a>
                            </li>
                        ))
                    }

                    <li className='bg-[#F54748] px-[20px] py-[10px] rounded-[100px] w-fit mx-auto lg:mx-0'>
                        <a href="#" className='text-[18px] text-white dark:text-white font-bold'>Downlode App</a>
                    </li>
                </ul>

                {/* menu hamburger */}
                <div className='flex items-center space-x-10'>
                    <div className='w-fit' onClick={changeLogo}>
                        <BtnTheme logoMove={changeLogo}/>
                    </div>

                    <div className='lg:hidden' onClick={showMenu}>
                        {
                            !menu ? <CgMenuHotdog size={35} className='text-black dark:text-white'/> : <IoIosCloseCircleOutline size={35} className='text-black dark:text-white'/>
                        }
                    </div>
                </div> 
            </div>           
        </Container>
    </div>
  )
}

export default Navbar