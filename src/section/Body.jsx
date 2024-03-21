import React from 'react'
import Offre from '../block/Offre'
import Service from '../block/Service'
import Download from '../block/Download'

function Body() {
  return (
    <div className='border-[1px] border-[#000]'>
        <Offre />
        <Service />
        <Download />
    </div>
  )
}

export default Body