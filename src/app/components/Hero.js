import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <div className="sm:pt-[60px] md:pt-[10px] sm:relative sm:z-10 px-24 flex items-center font-montserrat justify-center relative">
          <div className="w-full">
              <section className="py-24 sm:py-4 md:py-30 w-full flex items-center justify-center">
                  <div className="text-center">
                      <h6 className="sm:text-[45px] md:text-[70px] inline text-[80px] text-white font-black sm:leading-none">NEXT GENERATI<span className="text-[#00A256]">O</span>N</h6>
                      <div className="mt-[24px] md:text-[30px] rotating-words text-center relative">
                          <span className="sm:text-[45px] md:text-[50px] block text-[80px] text-white font-black bg-[#00A256] rounded-[60px] left-1/2 -translate-x-2/4 px-8">Animation</span>
                          <span className="sm:text-[45px] md:text-[50px] block text-[80px] text-white font-black bg-[#00A256] rounded-[60px] left-1/2 -translate-x-2/4 px-8">Design</span>
                          <span className="sm:text-[45px] md:text-[50px] block text-[80px] text-white font-black bg-[#00A256] rounded-[60px] left-1/2 -translate-x-2/4 px-8">Environment</span>
                          <span className="sm:text-[45px] md:text-[50px] block text-[80px] text-white font-black bg-[#00A256] rounded-[60px] left-1/2 -translate-x-2/4 px-8">Physics</span>
                          <span className="sm:text-[45px] md:text-[50px] block text-[80px] text-white font-black bg-[#00A256] rounded-[60px] left-1/2 -translate-x-2/4 px-8">Creations</span>
                      </div>
                      <p className="sm:text-[20px] mb-5 sm:leading-[25px] md:text-[20px] max-w-[720px] mx-auto text-[25px] leading-none text-white mt-10 sm:mt-5">We turn your ideas into numbers. ExpoShopify  helps you grow your eCommerce store with a proven record of successful case studies.</p>
                      <button className="bg-[#00A256] right-[70px] justify-end px-6 py-4 rounded-[40px] text-white text-[17px] font-semibold">
              Let’s Talk <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
            </button>
                         
              
                      <div className=" sm:mt-[40px] md:mt-10 mx-auto mt-10">
                        <div className="gap-20 sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-5 sm:flex-wrap  md:grid md:grid-cols-5 sm:gap-10 flex items-center justify-center">
                        <Image  src={"/assets/award01.svg"} height={25} width={150} alt="pic" />
                  <Image  src={"/assets/award02.svg"} height={25} width={89} alt="pic" />
                  <Image  src={"/assets/award03.svg"} height={35} width={119} alt="pic" />
                  <Image  src={"/assets/award04.svg"} height={31} width={124} alt="pic" />
                  <Image  src={"/assets/partner01.png"} height={32} width={125} alt="pic" />
                  <Image className='lg:hidden md:hidden'  src={"/assets/partner04.png"} height={33} width={126} alt="pic" />
                        </div>
                      </div>
                  </div>
              </section>
          </div>
      </div> 
    </>
  )
}

export default Hero