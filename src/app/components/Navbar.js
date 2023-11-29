"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="sm:hidden px-24 font-montserrat flex items-center justify-center bg-[#151515] relative">
        <div className="w-full">
          <nav className="py-6 w-full flex items-center justify-between">
            <Image src={"/assets/logo.svg"} width={150} height={50} alt="pic" />
            <div className="flex items-center">
              <ul className="flex items-center list-none space-x-10 cursor-pointer">
                <Link href="/"><li className="text-white mr-4 text-[16px] font-semibold">
                  Home
                </li></Link>
                <li className="text-white mr-4 text-[16px] font-semibold">
                  About Us
                </li>
                <li className="text-white mr-4 text-[16px] font-semibold">
                  Contact Us
                </li>
                <li className="text-white mr-4 text-[16px] font-semibold" onClick={toggleMobileMenu}>
                  Services
                </li>
                <li
                  className="text-white mr-10 text-[16px] font-semibold"
                >
                  Portfolio
                </li>
                <li
                  className="text-white mr-10 text-[16px] font-semibold"
                >
                  Projects
                </li>
              </ul>
              <button className="bg-[#00A256] ml-20 justify-end px-5 py-3 rounded-[40px] text-white text-[17px] font-semibold">
                Let’s Talk <span><Image src={"/assets/send.svg"} className="inline" width={21} height={20} alt="pic" /></span>
              </button>
            </div>
          </nav>
        </div>
      </div>
      <div
        className={`z-50 fixed cursor-pointer top-0 left-0 h-screen w-full bg-[#151515] text-white transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <button onClick={toggleMobileMenu} className="text-white absolute right-28 text-6xl cursor-pointer -mr-[98px]">
          &times;
        </button>
        <div className='justify-center grid grid-cols-4 mt-10 ml-10 gap-10'>
          <ul className="py-6 shadow-md shadow-[#00A256]">
            <Link href="/services/digital"><li className=" text-[26px] font-semibold leading-none  underline mb-2 px-4" onClick={closeMobileMenu}>
              Digital Marketing Services
            </li></Link>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Search Engine Optimization
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              E-Commerce SEO
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Content Writing Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Online Reputation Management (ORM)
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Search Engine Marketing (SEM)
            </li>
            <li className="text-[16px]  mb-4 px-4" onClick={closeMobileMenu}>
              Link Building Services
            </li>
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256] ">
            <li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              Social Media Marketing Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              FaceBook Marketing Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Instagram Marketing Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Social Media Management Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Social Media Advertising Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              YouTube Video Production & Optimization
            </li>
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256] ">
            <li className="text-[26px] leading-none font-semibold  underline mb-2 px-4" onClick={closeMobileMenu}>
              Web Design & Development Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Responsive Website Design Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Rapid Web Design
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Landing Pages Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Website Maintenance
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Custom Web Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              WordPress Website Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Web Design & Development
            </li>
          </ul>
          <ul className="py-6 shadow-md shadow-[#00A256] ">
            <li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              E-commerce Development Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              BigCommerce Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Shopify Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              WooCommerce Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Magento Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Custom eCommerce Development
            </li>
          </ul>
          <ul className="py-6 shadow-md shadow-[#00A256]">
            <li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              Video Production Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              TV commercial
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Product unboxing
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Digital Video Commercials
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Coporate Video production
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Video Production
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Animation Services
            </li>
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256]">
            <li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              Animation Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Whiteboard Animation
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Animation Explainer Video
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              3D Animation
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              2D Animation
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Animation
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Coporate Video
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              TVC
            </li>
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256]">
            <li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              UI/UX Design Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              High-fidelity Prototype
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Wirefrrames
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Mobile and Web User Interface Design
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Cross-Platform Compatibility
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Technical Design
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              UX Design
            </li>
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256]">
            <li className="text-[26px] leading-none font-semibold underline  mb-4 px-4" onClick={closeMobileMenu}>
              Application Development Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Native Mobile App Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Hybird Mobile App Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Web App Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Cross-Platform App Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Android App Development
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              IOS App Development
            </li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Navbar;
