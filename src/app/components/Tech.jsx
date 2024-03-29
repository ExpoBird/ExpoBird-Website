import React from 'react'
import Image from 'next/image'

const Tech = () => {
  return (
    <>
     <div className="font-montserrat xl:max-w-[1440px] bg-[#000213] sm:max-w-[500px] mx-auto">
        <div className="p-10 sm:p-0">
          <h6 className="sm:text-[40px] sm:text-center sm:mt-10 sm:ml-[5px] ml-[60px] md:text-[50px] sm:font-extrabold text-[#ffff] text-[80px] font-bold">Futuristic Technology Unique To All Business Needs</h6>
        </div>
        <article className="wrapper sm:py-1 sm:pb-0 pb-20">
          <div className="marquee">
            <div className="marquee__group">
              <Image src={"/assets/tech/technology-icon-2.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-9.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-14.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-8.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-7.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-2.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-9.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-14.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-8.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-7.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-2.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-9.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-14.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-8.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-7.svg"} height={0} width={40} alt="pic" />
            </div>

            <div aria-hidden="true" className="marquee__group">
              <Image src={"/assets/tech/technology-icon-3.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-16.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-9 (1).svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-1.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-6.svg"} height={0} width={40} alt="pic" />
            </div>
          </div>

          <div className="marquee marquee--reverse">
            <div className="marquee__group">
              <Image src={"/assets/tech/technology-icon-21.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-18.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-15.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-13.svg"} height={0} width={40} alt="pic" />
              4<Image src={"/assets/tech/technology-icon-3.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-21.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-18.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-15.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-13.svg"} height={0} width={40} alt="pic" />
              4<Image src={"/assets/tech/technology-icon-3.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-21.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-18.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-15.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-13.svg"} height={0} width={40} alt="pic" />
              4<Image src={"/assets/tech/technology-icon-3.svg"} height={0} width={40} alt="pic" />
            </div>

            <div aria-hidden="true" className="marquee__group">
              <Image src={"/assets/tech/technology-icon-5.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-10.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-21.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-18.svg"} height={0} width={40} alt="pic" />
              <Image src={"/assets/tech/technology-icon-3.svg"} height={0} width={40} alt="pic" />
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

export default Tech