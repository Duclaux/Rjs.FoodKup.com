import React from 'react'
import Container from '../components/Container'
import CardOffre from '../components/CardOffre'

function Offre() {
  return (
    <div>
        <Container>
            {/* title */}
            <div>
                <p className='text-black text-center font-bold dark:text-white text-[48px]'>Today <span className='text-[#F54748]'>special</span> offers</p>
                <p className='text-[#191919] text-center dark:text-white text-[18px] mt-[15px] lg:mt-[22px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br className='hidden lg:flex'/>the industry's standard dummy text ever since the 1500s
                </p>
            </div>

            <div>
                <CardOffre/>
            </div>
        </Container>
    </div>
  )
}

export default Offre