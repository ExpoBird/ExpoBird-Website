import React, { Fragment } from 'react';
import Image from 'next/image';

const OurServices = () => {
  return (
    <Fragment>
      <div className="font-montserrat sm:mt-[10px] md:mt-[60px] sm:mb-1 pt-0 mb-[40px] lg:pt-0">
        <div className="sm:border-none lg:border-none md:border-none border-t border-[#BDBDBD]"></div>
        <div className="sm:px-10 md:px-30 md:mt-[-160px] px-48">
          <div className="grid grid-cols-3 md:grid md:grid-cols-1 lg:grid lg:grid-cols-1 sm:block xl:grid xl:grid-cols-1 2xl:grid 2xl:grid-cols-1">
            <div className="sm:border-none md:items-center md:border-none lg:border-none xl:ml-[-110px] lg:ml-[-100px] font-montserrat border-r border-[#BDBDBD]">
              <p className="text-black sm:static md:static sm:text-[40px] leading-none text-[70px] mr-[10px] font-black md:text-[60px] xl:ml-[10px] lg:text-[50px] xl:text-[40px] lg:ml-[30px] mt-32 md:text-center sm:text-center">
                Our Services
              </p>
              <p className="text-2xl md:text-center lg:ml-[30px] sm:text-center sm:text-[20px] text-black my-12 md:text-[20px]">
                Choose Expobird as your digital marketing agency and propel your
                business to new heights with our award-winning digital marketing
                services and proprietary technology platform.
              </p>
              <button className="text-white sm:mt-2 sm:mb-1 md:flex md:items-center md:m-auto sm:items-center sm:ml-[200px] bg-[#00A256] text-[17px] rounded-[70px] lg:ml-[30px] py-4 px-6 font-semibold">
                See All{" "}
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
            <div className="sm:border-none md:border-none lg:border-none xl:border-none border-r border-[#BDBDBD] sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2 3xl:grid 3xl:grid-cols-2">
              <div className="sm:border-none md:border-none lg:border-none xl:border-none sm:px-0 px-6 py-20 border-b border-[#BDBDBD]">
                <div className="p-9 sm:p-4">
                  <p className="text-black md:ml-[-30px] sm:text-center text-3xl font-bold">
                    Digital Marketing
                  </p>
                  <p className="text sm:text-[20px] md:ml-[-30px] sm:text-center text-black text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src={"/assets/arrow-black.png"}
                        width={12}
                        height={12}
                        className="scale-75"
                        alt="pic"
                      />
                    </span>
                  </button>
                  <Image
                    src={"/assets/service-animation-01.png"}
                    width={300}
                    height={237}
                    alt="pic"
                  />
                </div>
              </div>
              <div className="sm:px-0 px-6 py-20 sm:border-none md:border-none lg:border-none xl:border-none border-b border-[#BDBDBD]">
                <div className="p-9 sm:p-4">
                  <p className="text-black md:ml-[-30px] sm:text-center text-3xl font-bold">
                    SEO
                  </p>
                  <p className="sm:text-[20px] md:ml-[-30px] sm:text-center text-black text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="sm:border-none md:border-none lg:border-none xl:border-none p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src={"/assets/arrow-black.png"}
                        width={12}
                        height={12}
                        className="scale-75"
                        alt="pic"
                      />
                    </span>
                  </button>
                  <Image
                    src={"/assets/service-animation-03.png"}
                    width={240}
                    height={168}
                    className="mt-11"
                    alt="pic"
                  />
                </div>
              </div>
              <div className="px-6 py-20 sm:px-0 sm:border-none md:border-none lg:border-none xl:border-none border-b border-[#BDBDBD]">
                <div className="p-9 sm:p-4">
                  <p className="text-black md:ml-[-30px] sm:text-center text-3xl font-bold">
                    Designs & Animation
                  </p>
                  <p className="sm:text-[20px] md:ml-[-30px] sm:text-center text-black text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src={"/assets/arrow-black.png"}
                        width={12}
                        height={12}
                        className="scale-75"
                        alt="pic"
                      />
                    </span>
                  </button>
                  <Image
                    src={"/assets/service-animation-05.png"}
                    width={194}
                    height={128}
                    className="mt-11"
                    alt="pic"
                  />
                </div>
              </div>
              <div className="px-6 py-20 sm:px-0 border-b sm:border-none md:border-none lg:border-none xl:border-none border-[#BDBDBD]">
                <div className="p-9 sm:p-4">
                  <p className="text-black md:ml-[-30px] sm:text-center text-3xl font-bold">
                    Mobile Development
                  </p>
                  <p className="sm:text-[20px] md:ml-[-30px] sm:text-center text-black text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="p-6 border text-black rounded-[16px]">
                    <span>
                      <Image
                        src={"/assets/arrow-black.png"}
                        width={12}
                        height={12}
                        className="scale-75"
                        alt="pic"
                      />
                    </span>
                  </button>
                  <Image
                    src={"/assets/service-animation-07.png"}
                    width={137}
                    height={150}
                    className="mt-11"
                    alt="pic"
                  />
                </div>
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-2 2xl:grid 2xl:grid-cols-2">
              <div className="sm:px-0  px-6 py-20 border-b sm:border-none md:border-none lg:border-none xl:border-none border-[#BDBDBD]">
                <div className="p-9 sm:p-4">
                  <p className="text-black sm:text-center text-3xl font-bold">
                    Web App
                  </p>
                  <p className="sm:text-[20px] sm:text-center text-black text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src={"/assets/arrow-black.png"}
                        width={12}
                        height={12}
                        className="scale-75"
                        alt="pic"
                      />
                    </span>
                  </button>
                  <Image
                    src={"/assets/service-animation-02.png"}
                    width={244}
                    height={154}
                    alt="pic"
                  />
                </div>
              </div>
              <div className="sm:px-0 sm:border-none md:border-none lg:border-none xl:border-none px-6 py-20 border-b border-[#BDBDBD]">
                <div className="p-9 sm:p-4">
                  <p className="text-black sm:text-center text-3xl font-bold">
                    Social Media
                  </p>
                  <p className="sm:text-[20px] sm:text-center text-black text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src={"/assets/arrow-black.png"}
                        width={12}
                        height={12}
                        className="scale-75"
                        alt="pic"
                      />
                    </span>
                  </button>
                  <Image
                    src={"/assets/service-animation-04.png"}
                    width={276}
                    height={169}
                    className="mt-11"
                    alt="pic"
                  />
                </div>
              </div>
              <div className="sm:px-0 sm:border-none md:border-none lg:border-none xl:border-none px-6 py-20 border-b border-[#BDBDBD]">
                <div className="p-9 sm:p-4">
                  <p className="text-black sm:text-center text-3xl font-bold">
                    Amazon Services
                  </p>
                  <p className="sm:text-[20px] sm:text-center text-black text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src={"/assets/arrow-black.png"}
                        width={12}
                        height={12}
                        className="scale-75"
                        alt="pic"
                      />
                    </span>
                  </button>
                  <Image
                    src={"/assets/service-animation-06.png"}
                    width={218}
                    height={79}
                    className="mt-11"
                    alt="pic"
                  />
                </div>
              </div>
              <div className="sm:px-0 px-6 py-20">
                <div className="p-9 sm:p-4">
                  <p className="text-black sm:text-center text-3xl font-bold">
                    Artificial <br /> intelligence
                  </p>
                  <p className="sm:text-[20px] sm:text-center text-black text-2xl my-5">
                    Choose Expobird as your digital marketing agency
                  </p>
                  <button className="p-6 border border-[#ADADAD] rounded-[16px]">
                    <span>
                      <Image
                        src={"/assets/arrow-black.png"}
                        width={12}
                        height={12}
                        className="scale-75"
                        alt="pic"
                      />
                    </span>
                  </button>
                  <Image
                    src={"/assets/service-animation-08.png"}
                    width={129}
                    height={133}
                    className="mt-11"
                    alt="pic"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default OurServices