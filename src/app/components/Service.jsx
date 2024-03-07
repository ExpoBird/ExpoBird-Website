import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Service = () => {
  return (
    <Fragment>
      <div className="bg-[#000213] overflow-x-hidden font-montserrat">
        <div className="py-[2rem] xl:px-36 px-10 relative z-10">
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
                    <button className="bg-[#0045e5] justify-end px-6 py-4 rounded-[40px] text-white text-[17px] font-semibold">
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
                    <button className="bg-[#0045e5] justify-end px-6 py-4 rounded-[40px] text-white text-[17px] font-semibold">
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
                    <button className="bg-[#0045e5]  justify-end px-6 py-4 rounded-[40px] text-white text-[17px] font-semibold">
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
                    <button className="bg-[#0045e5]  justify-end px-6 py-4 rounded-[40px] text-white text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              {/* <div className="p-[6rem]">
                <ul className="list-none">
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text1 py-3">Digital Marketing</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text1 py-3">Social Media Marketing</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text1 py-3">Mobile Development</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text1 py-3">Web Development</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text1 py-3">Ui/Ux design</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text1 py-3">Graphic Designing</li>
                </ul>
              </div> */}
            </div>
            <div className="col-span-6">
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[50px] text-white font-bold pl-5" data-inviewport >Digital Marketing</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/digital-branding.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/digital">
                    <button className="bg-[#0045e5] justify-end px-6 ml-[15px] py-4 rounded-[40px] text-white text-[17px] font-semibold">
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
                    <button className="bg-[#0045e5] justify-end px-6 ml-[15px] py-4 rounded-[40px] text-white text-[17px] font-semibold">
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
                    <button className="bg-[#0045e5] justify-end px-6 ml-[15px] py-4 rounded-[40px] text-white text-[17px] font-semibold">
                      See All <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
                    </button>
                  </Link>
                </div>
              </div>
              {/* <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[50px] text-white font-bold pl-5" data-inviewport >Web Development</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/web-development.webp" height={200} width={700} className="py-3" alt="" />
                  <button className="pt-8"><Image src="/assets/takeALook.svg" height={78} width={279} className="pl-5" alt="" /></button>
                </div>
              </div> */}
              {/* <div className="pt-[3rem] h-screen">
                <div>
                  <p className="text-[60px] text-white font-bold pl-5" data-inviewport >Ui/Ux Design</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ui-ux-design.webp" height={200} width={700} className="py-3" alt="" />
                  <button className="pt-8"><Image src="/assets/takeALook.svg" height={78} width={279} className="pl-5" alt="" /></button>
                </div>
              </div> */}
              <div className="pt-[2rem] h-screen">
                <div>
                  <p className="text-[60px] text-white font-bold pl-5" data-inviewport >Graphic Designing</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ecommerce-development.webp" height={200} width={700} className="py-3" alt="" />
                  <Link href="/services/ui">
                    <button className="bg-[#0045e5] justify-end px-6 py-4 ml-[15px] rounded-[40px] text-white text-[17px] font-semibold">
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