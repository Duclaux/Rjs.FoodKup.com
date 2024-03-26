import React from 'react'
import { motion } from 'framer-motion'

import Cuisto1 from '../assets/cuisto1.png'
import BgLinear from '../assets/bg-linear2.svg'
import Points from '../assets/points.svg'
import StickService from '../components/StickService'
import Stick1 from '../assets/stick1.png'
import Stick2 from '../assets/stick2.png'
import Stick3 from '../assets/stick3.png'


function Service() {
  return (
    <div className=''>
        <div className='lg:flex lg:items-center'>
            {/* bock images */}
            <motion.div 
                className='w-full px-[24px] lg:px-[50px] relative'
                initial={{
                    x:-300,
                    opacity:0
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}

                transition={{
                    duration:1.5,
                    delay:0
                }}
            >
                <img src={Points} alt="" className='absolute top-0 left-0 -z-10'/>
                <img src={Cuisto1} alt="" className='lg:w-[700px]'/>
                <img src={BgLinear} alt="" className='absolute bottom-0 translate-y-[15%] left-0 w-[700px] -z-10'/>
            </motion.div>
            
            {/* block texte */}
            <motion.div 
                className='w-full px-[24px] lg:px-0 text-start'
                initial={{
                    x:300,
                    opacity:0
                }}
                whileInView={{
                    x:0,
                    opacity:1
                }}

                transition={{
                    duration:1.5,
                    delay:0.5
                }}
            >
                {/* titre */}
                <div className=''>
                    <p className='text-black font-bold dark:text-white text-[48px]'>We are more  <span className='text-[#F54748]'>more</span> than <span className='text-[#FDC55E]'><br/>multiple</span> service</p>
                    
                    <p className='text-[#191919] dark:text-white text-[18px] mt-[15px] lg:mt-[22px]'>
                        This is a type of resturent which typically serves food and drink, in addition to light <br className='hidden lg:flex'/>refreshments such as baked goods or snacks. The term comes frome the rench<br className='hidden lg:flex'/>word meaning food
                    </p>

                    <div className='space-y-[30px] lg:grid lg:grid-cols-2 lg:gap-y-[20px] mt-[70px] lg:mt-[20px]'>
                        <StickService h1='Online Order' img={Stick1}/>
                        <StickService h1='24/7 Service' img={Stick2}/>
                        <StickService h1='Pre-Reservation' img={Stick3}/>
                        <StickService h1='Oragonized Foodhut Place' img={Stick3}/>
                        <StickService h1='Super Chef' img={Stick3}/>
                        <StickService h1='Clean Kitchen' img={Stick3}/>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Service