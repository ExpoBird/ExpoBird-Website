import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
  return (
    <Fragment>
      <div className="bg-[#000213] overflow-x-hidden font-montserrat">
        <div className="pt-[4rem] xl:px-36 px-10 relative z-10">
          <div className=" grid grid-cols-12">
            <div className="col-span-6 left-container">
              <div className="py-[2rem]">
                <h5 className="text-[120px] font-black text-white">Services</h5>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[50px] text-white font-bold pl-5" data-inviewport >Web Development</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/web-development.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/web">
                    <button className="bg-[#7B41F9] justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[50px] text-white font-bold pl-5" data-inviewport >Ui/Ux Designing</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ui-ux-design.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/ui">
                    <button className="bg-[#7B41F9] justify-end px-6 py-4 rounded-[40px] text-[#ffff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[50px] text-white font-bold pl-5" data-inviewport >Amazon Service</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ecommerce-development.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/commerce">
                    <button className="bg-[#7B41F9] justify-end px-6 py-4 rounded-[40px] text-[#ffff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[50px] text-white font-bold pl-5" data-inviewport >Seo</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/digital-branding.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/digital">
                    <button className="bg-[#7B41F9] justify-end px-6 py-4 rounded-[40px] text-[#ffff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-6">
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[50px] text-white font-bold pl-5" data-inviewport >Digital Marketing</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/digital-branding.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/digital">
                    <button className="bg-[#7B41F9] justify-end px-6 py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold ml-[240px]">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[50px] text-white font-bold pl-5" data-inviewport >Social Media Marketing</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/digital-marketing.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/digital">
                    <button className="bg-[#7B41F9] justify-end px-6 ml-[240px] py-4 rounded-[40px] text-[#fff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[3rem] h-screen">
                <div>
                  <p className="text-[50px] text-white font-bold pl-5" data-inviewport >Mobile Development</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ecommerce-development.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/commerce">
                    <button className="bg-[#7B41F9] justify-end px-6 ml-[240px] py-4 rounded-[40px] text-[#ffff] text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[60px] text-white font-bold pl-5" data-inviewport >Graphic Designing</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ecommerce-development.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/ui">
                    <button className="bg-[#7B41F9] justify-end px-6 py-4 ml-[240px] rounded-[40px] text-[#fff] text-[17px] font-semibold">
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