import React from 'react'
import Container from '../components/Container'

import { BiLogoFacebook, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";

function Footer() {
  return (
    <Container>
        <div className='lg:flex items-center justify-between pt-[76px] pb-[38px]'>
            {/* premier block */}
            <div>
                <h1 className='text-[#F54748] font-semibold text-[32px]'>Foodhut</h1>
                <p className='dark:text-white text-[18px] mt-[10px] mb-[22.5px]'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do<br/> eiusmod tempor </p>
                <div className='flex items-center space-x-[25px]'>
                    <BiLogoFacebook size={25} color='#FDC55E'/>
                    <BiLogoLinkedin size={25} color='#FDC55E'/>
                    <BiLogoInstagram size={25} color='#FDC55E'/>
                </div>
            </div>

            {/* second block */}
            <div className='flex items-center justify-between w-[25%]'>
                <div className='space-y-[17px]'>
                    <h1 className='text-[#F54748] font-semibold text-[24px]'>About Us</h1>
                    <ul className='text-[#191919] dark:text-white text-[18px] space-y-[14px]'>
                        <li>About Us</li>
                        <li>Service Us</li>
                        <li>Contact</li>
                        <li>Company</li>
                    </ul>
                </div>

                <div className='space-y-[17px]'>
                    <h1 className='text-[#F54748] font-semibold text-[24px]'>Company</h1>
                    <ul className='text-[#191919] dark:text-white text-[18px] space-y-[14px]'>
                        <li>Partnership</li>
                        <li>Terms of Use</li>
                        <li>Privacy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
            </div>

            {/* troisieme block */}
            <div>
                <h1 className='text-[#F54748] font-semibold text-[24px]'>Company</h1>
                <p className='dark:text-white text-[18px] mt-[10px] mb-[22.5px]'>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do<br/> eiusmod tempor </p>

                <div className='flex items-center space-x-[15px]'>
                    <div className='bg-[#D9D9D9] px-[24px] py-[17px] w-[205px] text-[#191919] rounded-full'>Email</div>
                    <div className='rounded-full bg-[#F54748] text-white px-[28px] py-[17px]'>Subscribe</div>
                </div>
            </div>
        </div>

        <div className='text-center mt-[50px]'>
            <p className='text-[16px] text-black dark:text-white'>Copyright © 2022 | <span className='font-bold'>Fred.Fox</span>.</p>
        </div>
    </Container>
  )
}

export default Footer