"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Award.css';
import Image from 'next/image';

export default function Award() {
  return (
    <>
      <p className='text-black font-montserrat placeholder:text-white sm:text-[40px] text-[85px] font-bold sm:font-extrabold text-center sm:text-center'>Our Awards</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="font-montserrat swiper-card swiper-js translate-y-20  shadow-black shadow-sm bg-white" style={{ background: 'white', color: 'black', height: '450px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/top-11-mobile-app-development-companies-in-florida 2022.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px"}}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-white shadow-black shadow-sm " style={{ background: 'white', color: 'black', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/top-50-blockchain-development-companies-hire-best-developers-in-usa.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card translate-y-20  shadow-black shadow-sm  bg-white" style={{ background: 'white', color: 'black', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/top-blockchain-development-companies-01.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-white shadow-black shadow-sm " style={{ background: 'white', color: 'black', height: '500px', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/top-mobile-app-development-company-2023.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="swiper-card bg-white translate-y-20 shadow-black shadow-sm" style={{ background: 'white', height: '500px', color: 'black', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/top-sharepoint-consulting-companies-for-2023.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-white shadow-black shadow-sm " style={{ background: 'white', color: 'black', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/top-sharepoint-consulting-companies-for-2023.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-white translate-y-20 shadow-black shadow-sm " style={{ background: 'white', color: 'black', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/top-50-blockchain-development-companies-hire-best-developers-in-usa.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="font-montserrat swiper-card bg-white  shadow-black shadow-sm " style={{ background: 'white', color: 'black', borderRadius: '10px', height: '500px', padding: '20px', textAlign: 'center' }}>
            <Image src={"/assets/top-blockchain-development-companies-01.webp"} height={100} width={100} alt="Logo" style={{ width: '90px', height: '100px', borderRadius: '50%', marginBottom: '10px', marginLeft: "80px" }} />
            <h2 className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', fontWeight: 'bold', margin: '10px 0' }}>Top Android App Development</h2>
            <p className='font-montserrat sm:text-[20px]' style={{ fontSize: '25px', marginTop: "90px" }}>ExpoBird is listed as Top Android App Development Companies by good firms</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
