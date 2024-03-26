import React from 'react'
import Offre from '../block/Offre'
import Service from '../block/Service'
import Download from '../block/Download'
import Footer from '../block/Footer'

function Body() {
  return (
    <div className=''>
        <Offre />
        <Service />
        <Download />
        <Footer/>
    </div>
  )
}

export default Body