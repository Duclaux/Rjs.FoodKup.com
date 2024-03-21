import React from 'react'

import Img1 from '../assets/img1.png'
import Face1 from '../assets/face1.png'
import Face2 from '../assets/face2.png'
import Face3 from '../assets/face3.png'
import CustomBtn from './CustomBtn'

function CardOffre() {
  return (
    <div className='w-fit relative'>
        {/* div image et bg_cercle */}
        <div className='max-w-[248.31px] max-h-[248.31px] rounded-t-full p-4 relative w-fit mx-auto z-10'>
          <div className='w-full h-[50%] rounded-t-full bg-gradient-to-b from-[#f54747] absolute left-0 top-0 -z-10'></div>
            <div className='w-full h-full bg-white dark:bg-black rounded-full p-2 relative'>
                <img src={Img1} />

                <div className='w-[60px] h-[60px] bg-white dark:bg-black p-[5px] rounded-full absolute bottom-0 right-0'>
                  <div className='bg-[#FDC55E] w-full h-full rounded-full px-[16px] py-[10px]'>
                    <p className='text-white text-[18px] dark:text-black '>8$</p>
                  </div>
                </div>
            </div>
            <div className='w-full h-[50%] bg-tranparent dark:bg-transparent absolute left-0 bottom-0 -z-10'></div>
        </div>

        {/* div texte */}
        <div className='translate-y-[-110px]'>
            <div className='pt-[131px] px-[34px] pb-[57px] bg-gradient-to-b from-transparent dark:from-gray-900/70 rounded-[20px] to-[#F54748]/20 dark:to-[#F54748]/50'>
              
              {/* div imgs profiles */}
              <div className='mb-[30px] w-fit mx-auto'>

                <div className='flex items-center -space-x-5'>
                  <div className='p-[5px] bg-white dark:bg-black rounded-full w-fit'>
                    <img src={Face1} alt="" className='w-[38px] h-[38px]'/>
                  </div>

                  <div className='p-[5px] bg-white dark:bg-black rounded-full w-fit'>
                    <img src={Face2} alt="" className='w-[38px] h-[38px]'/>
                  </div>

                  <div className='p-[5px] bg-white dark:bg-black rounded-full w-fit'>
                    <img src={Face3} alt="" className='w-[38px] h-[38px]'/>
                  </div>
                </div>

                {/* <div>

                </div> */}
              </div>

              {/* text */}
              <div className='text-center space-y-[16px]'>
                <h1 className='text-[#F54748] font-semibold text-[24px]'>Kebab</h1>

                <p className='text-[18px] text-black dark:text-white'>Lorem Ipsum is simply dummy<br/>text of the printing and<br/>typesetting industry</p>
              </div>

              {/* boutton */}
              <div className='absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]'>
                <CustomBtn txt='Order Now'/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CardOffre