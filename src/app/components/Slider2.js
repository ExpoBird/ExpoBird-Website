'use client'
import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { casestudies } from "../constants";
import Image from 'next/image';

const Slider2 = ({ slides }) => {

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
    <section className='lg:h-[75vh] md:h-[60vh] xs:h-[55vh] flex items-center justify-center relative'>
      <FaArrowAltCircleLeft className='left-arrow text-black' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow text-black' onClick={nextSlide} />
      {casestudies.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <Image src={slide.img} alt='pic' className='image mt-10' />
            )}
          </div>
        );
      })}
    </section>
  )
}

export default Slider2