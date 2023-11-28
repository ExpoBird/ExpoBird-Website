import React from 'react'
import Image from 'next/image'

const Button = ({styles}) => {
  return (
    <button type='button' className={`py-[12px] px-[25px] bg-pink-gradient font-poppins font-semibold sm:text-[15px] sm:py-[10px] sm:px-[20px] text-[28px] text-white outline-none ${styles} rounded-[346px]`}>
      Let’s Talk 
      <Image src="/assets/Send.svg" height={30} width={40} alt="" className='sm:h-[20px] sm:w-[20px] inline-block' />
    </button>
  )
}

export default Button