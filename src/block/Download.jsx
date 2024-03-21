import React from 'react'

import PlayStore from '../assets/playStore.svg'
import Cuisto2 from '../assets/cuisto2.png'
import Fleur from '../assets/fleur.png'


function Download() {
  return (
    <div className='w-full bg-gradient-to-b from-transparent dark:from-gray-900/70 to-[#F54748]/20 dark:to-[#FDC55E]/10'>
        <div className='lg:flex lg:items-center lg:flex-row-reverse relative'>
            
            {/* div images */}
            <div className='border-[1px] border-red-600 w-full relative'>
                <img src={Cuisto2} alt="" className='w-fit mx-auto lg:w-[700px] object-contain'/>
                <img src={Fleur} alt="" className='absolute bottom-0 right-[10px] w-[173.3px] h-[114.47px] lg:w-[271px] lg:h-[179px]'/>
            </div>

            {/* div des textes */}
            <div className='lg:px-[70px]  h-96 border-[1px] border-yellow-500 w-full px-[24px] text-start'>
                <p className='text-black font-bold dark:text-white text-[48px]'>It’s Now  <span className='text-[#F54748]'>More Easy</span> to <span className='text-[#FDC55E]'>Order <br className='hidden lg:flex'/></span>by Our Mobile <span className='text-[#F54748]'>App</span> </p>
                
                <p className='text-[#191919] dark:text-white text-[18px] mt-[15px] lg:mt-[22px]'>
                All you need to do is downlode one of the best delivery apps, make <br className='hidden lg:flex'/>a and most companies are opting for mobile app devlopment for<br className='hidden lg:flex'/> food delivery
                </p>

                <div className='flex items-center space-x-[5px] sm:space-x-[17px] lg:space-x-[27px] mt-[45px]'>
                    <button className='px-[15px] py-[7px] rounded-[20px] bg-black dark:bg-white flex items-center space-x-[10px]'>
                        <img src={PlayStore} alt=""/>
                        <div className='text-white dark:text-black text-start'>
                            <h2 className='font-semibold text-[10px] sm:text-[12px]'>GET IT ON</h2>
                            <h1 className='font-bold text-[15px] sm:text-[17px]'>Google Play</h1>
                        </div>
                    </button>

                    <button className='px-[15px] py-[7px] rounded-[20px] bg-black dark:bg-white flex items-center space-x-[10px]'>
                        <img src={PlayStore} alt=""/>
                        <div className='text-white dark:text-black text-start'>
                            <h2 className='font-semibold text-[10px] sm:text-[12px]'>Download on the</h2>
                            <h1 className='font-bold text-[15px] sm:text-[17px]'>App Store</h1>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Download