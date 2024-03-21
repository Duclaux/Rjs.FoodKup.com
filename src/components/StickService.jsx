import React from 'react'

function StickService(props) {
  return (
    <div className={`flex items-center space-x-[10px] lg:col-span-1 w-fit`}>
        <img src={props.img} alt="" />
        <h1 className='font-medium text-black dark:text-white text-[18px]'>{props.h1}</h1>
    </div>
  )
}

export default StickService