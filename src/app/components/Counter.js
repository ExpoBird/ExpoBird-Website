import React from 'react';
import Image from 'next/image';

const Counter = () => {
  return (
    <>
       <div className="font-montserrat sm:mt-20 sm:p-12 p-24 bg-[#151515]">
            {/* <div className="grid grid-rows-5 grid-cols-2 gap-3">
              <div className="max-w-[350px] row-end-3 row-span-2 ml-auto mr-36">
                <Image src={"/assets/cta-image01.png"} width={420} height={600} alt="pic" />
                <div className="mt-2 sm:mt-1 flex justify-center flex-col items-center">
                  <p className="text-white leading-none mb-0 font-semibold sm:text-[40px] text-[50px]"><span className="text-[#00A256]">+</span>10</p>
                  <p className="text-[#00A256] ml-[6px] sm:text-[20px] text-[24px]">Awards</p>
                </div>
              </div>
              <div className="max-w-[450px] row-start-2 row-span-2 row-end-4 ml-auto">
                <Image className='sm:ml-[4px]' src={"/assets/cta-image02.png"} height={401} width={579} alt="pic" />
                <div className="mt-2 flex justify-center flex-col items-center">
                  <p className="text-white leading-none mb-0 sm:text-[40px] font-semibold text-[50px]"><span className="text-[#00A256]">+</span>100</p>
                  <p className="text-[#00A256] ml-[10px] sm:ml-[0px] sm:text-[20px] text-[24px]">Projects</p>
                </div>
              </div>
              <div className="max-w-[350px] row-start-3 row-span-2 row-end-5">
                <Image className='sm:ml-[4px]' src={"/assets/cta-image03.png"} height={538} width={507} alt="pic" />
                <div className="mt-2 flex justify-center flex-col items-center">
                  <p className="text-white leading-none mb-0 sm:text-[40px] font-semibold text-[50px]"><span className="text-[#00A256]">+</span>50</p>
                  <p className="text-[#00A256] sm:ml-[0px] ml-[5px] sm:text-[20px] text-[24px]">Experts</p>
                </div>
              </div>
              <div className="max-w-[350px] row-start-4 row-span-2 row-end-6 ml-36 sm:ml-12">
                <Image className='sm:ml-[10px] ml-[40px]' src={"/assets/cta-image04.png"} height={509} width={252} alt="pic" />
                <div className="mt-2 sm:text-center flex justify-center flex-col items-center">
                  <p className="text-white leading-none mb-0 sm:text-[40px] font-semibold text-[50px]"><span className="text-[#00A256]">+</span>15</p>
                  <p className="text-[#00A256] sm:ml-[25px] sm:text-[20px]  text-[24px]">Years Of Experience</p>
                </div>
              </div>
            </div> */}
            <div className="sm:m-10  sm:grid md:grid md:mt-10 sm:mt-10 md:border-xsm md:border-y sm:border-xsm sm:border-y border-y md:grid-cols-2 sm:grid-cols-2 grid grid-cols-4 border-b border-[#BDBDBD] mt-8">
              <div className="flex justify-center flex-col items-center border-x border-[#BDBDBD] pb-10">
                <p className="text-white mt-[40px] mb-[0px] mr-[20px] font-semibold text-[50px] leading-none"><span className="gradient-text">+</span>10</p>
                <p className="gradient-text text-[24px] sm:text-[20px] mb-0">Projects</p>
              </div>
              <div className=" flex justify-center flex-col items-center border-r border-[#BDBDBD] pb-10">
                <p className="text-white mt-[40px] mb-[0px] mr-[20px] font-semibold text-[50px] leading-none"><span className="gradient-text">+</span>50</p>
                <p className="gradient-text text-[24px] sm:text-[20px] mb-0">Experts</p>
              </div>
              <div className=" flex sm:border md:border justify-center flex-col items-center border-r border-[#BDBDBD] pb-10">
                <p className="text-white mt-[40px] mb-[0px] mr-[20px]  font-semibold  text-[50px] leading-none"><span className="gradient-text">+</span>15</p>
                <p className="gradient-text sm:text-center lg:text-center text-[24px] sm:text-[20px] mb-0">Years of Experience</p>
              </div>
              <div className=" flex justify-center sm:border md:border flex-col items-center border-r border-[#BDBDBD] pb-10">
                <p className="text-white mt-[40px] mb-[0px] mr-[20px] font-semibold text-[50px] leading-none"><span className="gradient-text">+</span>100</p>
                <p className="gradient-text text-[24px] sm:text-[20px] mb-0">Projects</p>
              </div>
            </div>
            <h6 className="sm:text-[30px] md:text-[45px] text-6xl text-white max-w-[600px] leading-none font-bold pt-20 pb-10 text-center mx-auto">Want  to work
              with us?</h6>
            <div className="text-center">
            <button className="text-white sm:mb-0 mb-10 mt-6 bg-color-1 rounded-[70px] py-4 px-6 font-semibold text-[17px]">
                  Lets Talk
                  <span>
                    <Image
                      src={"/assets/Send.svg"}
                      width={21}
                      height={20}
                      className="inline"
                      alt="pic"
                    />
                  </span>
                </button>
            </div>
          </div>
    </>
  )
}

export default Counter