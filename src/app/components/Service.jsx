import React, { Fragment } from 'react'
import Image from 'next/image'

const Service = () => {
  return (
    <Fragment>
      <div className="bg-[#0E0B2A] overflow-x-hidden font-montserrat">
        <div className="py-[2rem] xl:px-36 px-10 relative z-10">
          <div className=" grid grid-cols-12">
            <div className="col-span-6 left-container">
              <div className="py-[2rem]">
                <h5 className="text-[100px] font-black text-white">Services</h5>
              </div>
              <div className="p-[2rem] sticky">
                <ul className="list-none">
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text py-3">Digital Marketing</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text py-3">Social Media Marketing</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text py-3">Mobile Development</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text py-3">Web Development</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text py-3">Ui/Ux design</li>
                  <li className="text-[40px] text-[#7F7C9C] font-black sticky-text py-3">Graphic Designing</li>
                </ul>
              </div>
            </div>
            <div className="col-span-6 border-l-2 border-[#7F7C9C]">
              <div className="py-[3rem] h-screen">
                <div>
                  <p className="text-[60px] text-white font-bold pl-5" data-inviewport >Digital Marketing</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/digital-branding.webp" height={100} width={600} className="py-3" alt="" />
                  <button className="pt-8"><Image src="/assets/takeALook.svg" height={78} width={279} className="pl-5" alt="" /></button>
                </div>
              </div>
              <div className="py-[3rem] h-screen">
                <div>
                  <p className="text-[60px] text-white font-bold pl-5" data-inviewport >Social Media Marketing</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/digital-marketing.webp" height={100} width={600} className="py-3" alt="" />
                  <button className="pt-8"><Image src="/assets/takeALook.svg" height={78} width={279} className="pl-5" alt="" /></button>
                </div>
              </div>
              <div className="py-[3rem] h-screen">
                <div>
                  <p className="text-[60px] text-white font-bold pl-5" data-inviewport >Mobile Development</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ecommerce-development.webp" height={100} width={600} className="py-3" alt="" />
                  <button className="pt-8"><Image src="/assets/takeALook.svg" height={78} width={279} className="pl-5" alt="" /></button>
                </div>
              </div>
              <div className="py-[3rem] h-screen">
                <div>
                  <p className="text-[60px] text-white font-bold pl-5" data-inviewport >Web Development</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/web-development.webp" height={100} width={600} className="py-3" alt="" />
                  <button className="pt-8"><Image src="/assets/takeALook.svg" height={78} width={279} className="pl-5" alt="" /></button>
                </div>
              </div>
              <div className="py-[3rem] h-screen">
                <div>
                  <p className="text-[60px] text-white font-bold pl-5" data-inviewport >Ui/Ux Design</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ui-ux-design.webp" height={100} width={600} className="py-3" alt="" />
                  <button className="pt-8"><Image src="/assets/takeALook.svg" height={78} width={279} className="pl-5" alt="" /></button>
                </div>
              </div>
              <div className="py-[3rem] h-screen">
                <div>
                  <p className="text-[60px] text-white font-bold pl-5" data-inviewport >Graphic Designing</p>
                  <p className="text-[20px] text-white font-medium max-w-[50%] pl-5 py-3">We imagine and build experiences and businesses that win hearts and realize the future. Explore how we work.</p>
                  <Image src="/assets/ecommerce-development.webp" height={100} width={600} className="py-3" alt="" />
                  <button className="pt-8"><Image src="/assets/takeALook.svg" height={78} width={279} className="pl-5" alt="" /></button>
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