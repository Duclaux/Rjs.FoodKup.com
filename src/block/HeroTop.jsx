import React from 'react'
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { motion } from 'framer-motion'
import { BsSearch } from "react-icons/bs";


import Container from '../components/Container'
import Banniere from '../assets/banniere.png'
import Fire from '../assets/emojione_fire.svg'
import Seek from '../assets/SeekPng.svg'
import Arrow2 from '../assets/arrow2.svg'
import Spirale from '../assets/spirale.svg'
import Ya from '../assets/ya.svg'
import Play from '../assets/play.svg'
import Decore from '../assets/decore.svg'
import Pizza from '../assets/pizza1.png'
import Plat1 from '../assets/plat1.png'
import Plat2 from '../assets/plat2.png'
import Plat3 from '../assets/plat3.png'
import Plat4 from '../assets/plat4.png'

function HeroTop() {
  return (
    <div>
        <Container>
            <div className='md:flex md:flex-row-reverse lg:items-center'>
                <div className="flex items-start relative">
                    <motion.div 
                        className='w-fit mx-auto relative'
                        initial={{
                            y:50,
                            opacity:0
                        }}

                        animate={{
                            y:0,
                            opacity:1
                        }}

                        transition={{
                            duration:0.7,
                            delay:0.2,
                            ease: "linear"
                        }}
                    >
                        <img src={Fire} alt='petite flamme' className='absolute -top-[25px] left-[50%] w-[27.57px] h-[27.57px] lg:w-auto lg:h-auto'/>
                        <img src={Seek} alt='petite flamme' className='absolute top-0 right-0 lg:top-10 lg:right-14 -z-10'/>
                        <img src={Banniere} alt="" className='mx-auto w-[353.31px] h-auto lg:w-[950px]'/>

                        <div className='absolute top-[90px] right-[50px] lg:right-0 lg:top-[30%] bg-white dark:bg-black rounded-full flex items-center px-[1px] py-[1px] lg:px-[5px] lg:pl-[4px] lg:pr-[21px] space-x-3'>
                            <img src={Ya} alt="" className='w-[38.75px] h-[38.75px]'/>

                            <div className='text-[#575757] dark:text-white font-bold text-[12px] hidden lg:flex lg:flex-col'>
                                <h1>Our Happy Customer</h1>
                                <div className='flex items-center space-x-2 mt-[4px] lg:mt-[7px]'>
                                    <AiFillStar color='yellow' size={15}/>
                                    <p>4.9 (1.989 Reviews)</p>
                                </div>
                            </div>
                        </div>

                        <div className='hidden lg:flex absolute top-[90px] left-[50px] lg:left-0 lg:top-[30%] bg-white dark:bg-black rounded-[10px] space-x-3 pl-[13px] py-[11px] pr-[15px]'>
                            <img src={Pizza} alt="" className='w-[60.15px] h-[60.15px]'/>

                            <div className='text-[#575757] dark:text-white font-bold text-[12px] lg:flex-col space-y-2'>
                                <h1>Italian Pizza</h1>
                                <div className='space-x-2 mt-[4px] lg:mt-[7px] space-y-2'>
                                    <div className='flex items-center space-x-1'>
                                        <AiFillStar color='yellow' size={15}/>
                                        <AiFillStar color='yellow' size={15}/>
                                        <AiFillStar color='yellow' size={15}/>
                                        <AiFillStar color='yellow' size={15}/>
                                        <AiFillStar color='yellow' size={15}/>
                                    </div>
                                    <p>$ 9.50</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <img src={Arrow2} alt="" className='absolute -top-[35px] right-0 -z-10 lg:'/>
                    <img src={Spirale} alt="" className='absolute bottom-0 -right-[130px] -z-20 lg:'/>

                    <div className='w-full h-[157px] lg:h-[310px] dark:border-white absolute bottom-0'>
                        <motion.img
                            src={Plat1} 
                            alt="" 
                            className='w-[102.49px] h-[99.49px] lg:w-[171px] lg:h-[166px] absolute top-[-20px] left-[-35px]'
                            initial={{
                                rotate:'150',
                                y:30,
                                opacity:0
                            }}
                            animate={{
                                rotate:0,
                                y:0,
                                opacity:1
                            }}

                            transition={{
                                duration:0.9,
                                delay:0.5,
                                ease: "linear"
                            }}
                        />
                        <motion.img 
                            src={Plat2} alt="" 
                            className='w-[91.7px] h-[91.1px] lg:w-[153px] lg:h-[152px] absolute bottom-[-20px] left-[40px] lg:left-[60px]'
                            initial={{
                                rotate:'150',
                                y:30,
                                opacity:0
                            }}
                            animate={{
                                rotate:0,
                                y:0,
                                opacity:1
                            }}

                            transition={{
                                duration:0.9,
                                delay:0.9,
                                ease: "linear"
                            }}
                        />
                        <motion.img 
                            src={Plat3} alt="" 
                            className='w-[106.68px] h-[97.09px] lg:w-[178px] lg:h-[168px] absolute bottom-[-25px] right-[40px] lg:right-[60px]'
                            initial={{
                                rotate:'150',
                                y:30,
                                opacity:0
                            }}
                            animate={{
                                rotate:0,
                                y:0,
                                opacity:1
                            }}

                            transition={{
                                duration:0.9,
                                delay:1.3,
                                ease: "linear"
                            }}
                        />
                        <motion.img 
                            src={Plat4} alt="" 
                            className='w-[79.71px] h-[79.71px] lg:w-[133px] lg:h-[133px] absolute top-0 right-[-22px]'
                            initial={{
                                rotate:'150',
                                y:30,
                                opacity:0
                            }}
                            animate={{
                                rotate:0,
                                y:0,
                                opacity:1
                            }}

                            transition={{
                                duration:0.9,
                                delay:1.7,
                                ease: "linear"
                            }}
                        />
                    </div>
                </div>



                <motion.div 
                    initial={{
                        y:50,
                        opacity:0
                    }}

                    animate={{
                        y:0,
                        opacity:1
                    }}

                    transition={{
                        duration:0.7,
                    }}

                    className='w-full dark:border-white py-[50px]'
                >
                    <div className='bg-[#f547475a] dark:bg-black flex items-center justify-between py-[4px] px-[10px] w-fit rounded-full space-x-2'>
                        <div className='p-[4px] bg-[#F54748] rounded-full w-fit'>
                            <AiFillHeart size={14} color='#FDC55E' />
                        </div>
                        <p className='text-black dark:text-white'>People Trust us</p>
                    </div>

                    <div className='mt-[20px] mb-[33px] lg:mb-[27px]'>
                        <div className='relative w-fit'>
                            <p className='text-[48px] font-black lg:text-[58px] dark:text-white'>We're <span className='text-[#F54748]'>Serious<br className='lg:hidden'/></span> For<br className='hidden lg:flex'/> <span className='text-[#F54748]'>Food</span> &<br className='lg:hidden'/> <span className='text-[#FDC55E]'>Delivery <img src={Decore} alt="" className='absolute -bottom-[6px] left-0 xl:right-0 xl:left-auto'/></span>.</p>
                        </div>

                        <div className='max-w-[383px] lg:max-w-full mt-[29px]'>
                            <p className='text-[#191919] dark:text-white text-[20px] lg:text-[24px]'>Best cooks and best delivery guys all at your<br className='hidden lg:flex' />service. Hot tasty food will reach you in 60 your<br className='hidden lg:flex' />minutes.</p>
                        </div>
                    </div>

                    <div>
                        <div className='py-[4px] pr-[9px] pl-[10px] lg:pl-[17px] border-[1px] border-black dark:border-white rounded-[100px] flex items-center justify-between max-w-[500px]'>
                            <input type="text" placeholder='Search food' className='text-[18px] text-[#191919] dark:text-[#FFFFFF] bg-transparent'/>
                            
                            <div className='px-[12px] py-[11px] rounded-full bg-[#FDCE77] w-fit'>
                                <BsSearch className='text-white dark:text-black' size={19}/>
                            </div>
                        </div>

                        <div className='flex items-center space-x-10 min-[418px]:space-x-0 mt-[30px] lg:mt-[34px]'>
                            <div className='bg-[#F54748] px-[15px] py-[10px] rounded-[100px] w-fit '>
                                <a href="#" className='text-[14px] min-[400px]:text-[18px] text-white dark:text-black font-bold'>Downlode App</a>
                            </div>

                            <div className='flex items-center space-x-3'>
                                <div className='px-[13px] py-[14px] min-[400px]:px-[19px] min-[400px]:py-[20px] rounded-full bg-[#fff] w-fit dark:bg-black shadow-[0px_15px_50px_#DF6951]'>
                                    <img src={Play} alt="" />
                                </div>

                                <p className='text-[#686D77] text-[14px] min-[400px]:text-[17px] dark:text-white font-bold'>Watch Video</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Container>
    </div>
  )
}

export default HeroTop