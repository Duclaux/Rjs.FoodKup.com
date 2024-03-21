import React from 'react'

function Container({ children , styles}) {
  return (
    <div className={`${styles} px-[24px] lg:px-0 py-[24px] lg:py-[32px] lg:w-[950px] lg:mx-auto xl:w-[1150px] 2xl:w-[1450px]`}>{children}</div>
  )
}

export default Container