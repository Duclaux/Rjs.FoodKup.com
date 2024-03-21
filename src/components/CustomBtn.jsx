import React from 'react'

function CustomBtn(props) {
  return (
    <button className='text-[18px] bg-[#F54748] rounded-[100px] px-[20px] py-[11px] text-white dark:text-black font-medium'>
        {props.txt}
    </button>
  )
}

export default CustomBtn