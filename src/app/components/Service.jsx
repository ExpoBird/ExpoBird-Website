import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
  return (
    <Fragment>
      <div className="bg-[#ffffff] overflow-x-hidden font-montserrat">
        <div className="pt-[4rem] xl:px-36 px-10 relative z-10">
          <div className=" grid grid-cols-12">
            <div className="col-span-6 left-container">
              <div className="py-[2rem]">
                <h5 className="text-[80px] font-black text-black">Services</h5>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[40px] text-black font-bold pl-5" data-inviewport >Web Development</p>
                  <p className="text-[20px] text-black font-medium max-w-[80%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <video height={0} width={400} className="py-3 " alt=""  autoPlay={true}
        muted={true}
        loop={true}
      src="/assets/intro.webm" type="video/webm" >
      Your browser does not support the video tag.
    </video>
                  <Link href="/services/web">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[40px] text-black font-bold pl-5" data-inviewport >Ui/Ux Designing</p>
                  <p className="text-[20px] text-black font-medium max-w-[80%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ui-ux-design.webp" height={0} width={400} className="py-3" alt="" />
                  <Link href="/services/ui">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#ffff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[40px] text-black font-bold pl-5" data-inviewport >Amazon Service</p>
                  <p className="text-[20px] text-black font-medium max-w-[80%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ecommerce-development.webp" height={0} width={400} className="py-3" alt="" />
                  <Link href="/services/commerce">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#ffff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[40px] text-black font-bold pl-5" data-inviewport >Seo</p>
                  <p className="text-[20px] text-black font-medium max-w-[80%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/digital-branding.webp" height={0} width={400} className="py-3" alt="" />
                  <Link href="/services/digital">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#ffff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[40px] text-black font-bold pl-5" data-inviewport >Digital Marketing</p>
                  <p className="text-[20px] text-black font-medium max-w-[80%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/digital-branding.webp" height={0} width={400} className="py-3" alt="" />
                  <Link href="/services/digital">
                    <button className="buttonv2 justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[40px] text-black font-bold pl-5" data-inviewport >Social Media Marketing</p>
                  <p className="text-[20px] text-black font-medium max-w-[80%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/digital-marketing.webp" height={0} width={400} className="py-3" alt="" />
                  <Link href="/services/digital">
                    <button className="buttonv2 justify-end px-6 ml-[240px] py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[3rem] h-screen">
                <div>
                  <p className="text-[40px] text-black font-bold pl-5" data-inviewport >Mobile Development</p>
                  <p className="text-[20px] text-black font-medium max-w-[80%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ecommerce-development.webp" height={0} width={400} className="py-3" alt="" />
                  <Link href="/services/commerce">
                    <button className="buttonv2 justify-end px-6 ml-[240px] py-4 rounded-[40px] text-[#ffff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[40px] text-black font-bold pl-2" data-inviewport >Graphic Designing</p>
                  <p className="text-[20px] text-black font-medium max-w-[80%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ecommerce-development.webp" height={0} width={400} className="py-3" alt="" />
                  <Link href="/services/ui">
                    <button className="buttonv2 justify-end px-6 py-4 ml-[240px] rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Service