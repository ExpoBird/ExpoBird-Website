'use client'
import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import Image from "next/image";

const casestudies = [
  {
    img: "/assets/caseStudy01.png",
  },
  {
    img: "/assets/caseStudy02.png",
  },
  {
    img: "/assets/caseStudy03.png",
  }
]

export const Slider2 = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='font-montserrat lg:h-[75vh] sm:mb-10 mb-20 md:h-[60vh] xs:h-[55vh] flex items-center justify-center relative'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {casestudies.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Image src={slide.img} alt='' className='image' width={1152} height={636} />
            )}
          </div>
        );
      })}
    </section>
  )
}
const CaseStudy = () => {
  return (
    <section className='sm:py-8'>
      <div>
        <p className="sm:text-center font-extrabold font-montserrat text-[85px] sm:text-[40px] text-black sm:font-extrabold sm:ml-0 sm:mt-0 mt-5 left-[95px] relative sm:static">Case Studies</p>
      </div>
      <Slider2 slides={casestudies} />
    </section>
  )
}

export default CaseStudy