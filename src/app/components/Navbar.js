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
              <ul className="flex items-center md:space-x-4 xl:space-x-4 lg:space-x-6 list-none space-x-10 cursor-pointer">
                <Link href="/"><li className="text-white mr-4 text-[16px] font-semibold">
                  Home
                </li></Link>
                <Link href="/about"><li className="text-white mr-4 text-[16px] font-semibold">
                  About Us
                </li></Link>
                <Link href="/contact"><li className="text-white mr-4 text-[16px] font-semibold">
                  Contact Us
                </li></Link>
                <li className="text-white mr-4 text-[16px] font-semibold" onClick={toggleMobileMenu}>
                  Services
                </li>
              </ul>
              <button className="bg-[#00A256] sm:hidden ml-20 justify-end px-5 py-3 rounded-[40px] text-white text-[17px] font-semibold">
                Let’s Talk <span><Image src={"/assets/Send-arrow.svg"} className="inline" width={21} height={20} alt="pic" /></span>
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
            <Link href="/services/digital/seo"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Search Engine Optimization
            </li></Link>
            <Link href="/services/digital/content-writing-services"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Content Writing Services
            </li></Link>
            <Link href="/services/digital/sem"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
            Search Engine Marketing (SEM)
            </li></Link>
            {/* <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Online Reputation Management (ORM)
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Search Engine Marketing (SEM)
            </li>
            <li className="text-[16px]  mb-4 px-4" onClick={closeMobileMenu}>
              Link Building Services
            </li> */}
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256] ">
            <Link href="/services/social"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              Social Media Marketing Services
            </li></Link>
            <Link href="/services/social/facebook-marketing-services"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              FaceBook Marketing Services
            </li></Link>
            <Link href="/services/social/instagram-marketing-services"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Instagram Marketing Services
            </li></Link>
            <Link href="/services/social/social-media-management-services"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Social Media Management Services
            </li></Link>
            <Link href="/services/social/social-media-advertising-services"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Social Media Advertising Services
            </li></Link>
            <Link href="/services/social/youtube-video"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              YouTube Video Production & Optimization
            </li></Link>
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256] ">
            <Link href="/services/web"><li className="text-[26px] leading-none font-semibold  underline mb-2 px-4" onClick={closeMobileMenu}>
              Web Design & Development Services
            </li></Link>
            {/* <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Responsive Website Design Services
            </li>
            <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Rapid Web Design
            </li> */}
            <Link href="/services/web/landing-pages-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Landing Pages Development
            </li></Link>
            <Link href="/services/web/website-maintenance"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Website Maintenance
            </li></Link>
            <Link href="/services/web/custom-web-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Custom Web Development
            </li></Link>
            <Link href="/services/web/wordpress-website-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              WordPress Website Development
            </li></Link>
            <Link href="/services/web/web-design-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Web Design & Development
            </li></Link>
          </ul>
          <ul className="py-6 shadow-md shadow-[#00A256] ">
            <Link href="/services/commerce"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              E-commerce Development Services
            </li></Link>
            <Link href="/services/commerce/bigcommerce-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              BigCommerce Development
            </li></Link>
            <Link href="/services/commerce/shopify-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Shopify Development
            </li></Link>
            <Link href="/services/commerce/woocommerce-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              WooCommerce Development
            </li></Link>
            <Link href="/services/commerce/magento-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Magento Development
            </li></Link>
            <Link href="/services/commerce/custom-ecommerce-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Custom eCommerce Development
            </li></Link>
          </ul>
          <ul className="py-6 shadow-md shadow-[#00A256]">
            <Link href="/services/video"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              Video Production Services
            </li></Link>
            {/* <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              TV commercial
            </li> */}
            <Link href="/services/video/digital-video-commercials"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Digital Video Commercials
            </li></Link>
            <Link href="/services/video/product-unboxing"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Product unboxing
            </li></Link>
            <Link href="/services/video/coporate-video-production"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Coporate Video production
            </li></Link>
            {/* <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Video Production
            </li> */}
            <Link href="/services/video/animation"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Animation Services
            </li></Link>
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256]">
            <Link href="/services/animation"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              Animation Services
            </li></Link>
            <Link href="/services/animation/whiteboard-animation"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Whiteboard Animation
            </li></Link>
            <Link href="/services/animation/animation-explainer-video"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Animation Explainer Video
            </li></Link>
            <Link href="/services/animation/3d-animation"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              3D Animation
            </li></Link>
            <Link href="/services/animation/2d-animation"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              2D Animation
            </li></Link>
            <Link href="/services/animation/animation"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Animation
            </li></Link>
            <Link href="/services/animation/coporate-video"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Coporate Video
            </li></Link>
            <Link href="/services/animation/tvc"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              TVC
            </li></Link>
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256]">
            <Link href="/services/ui"><li className="text-[26px] leading-none font-semibold underline  mb-2 px-4" onClick={closeMobileMenu}>
              UI/UX Design Services
            </li></Link>
            <Link href="/services/ui/high-fidelity-prototype"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              High-fidelity Prototype
            </li></Link>
            <Link href="/services/ui/wireframes"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Wireframes
            </li></Link>
            <Link href="/services/ui/ui"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Mobile and Web User Interface Design
            </li></Link>
            <Link href="/services/ui/cross-platform-compatibility"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Cross-Platform Compatibility
            </li></Link>
            {/* <li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Technical Design
            </li> */}
            <Link href="/services/ui/ux"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              UX Design
            </li></Link>
          </ul>

          <ul className="py-6 shadow-md shadow-[#00A256]">
            <Link href="/services/appdev"><li className="text-[26px] leading-none font-semibold underline  mb-4 px-4" onClick={closeMobileMenu}>
              Application Development Services
            </li></Link>
            <Link href="/services/appdev/native-mobile-app-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Native Mobile App Development
            </li></Link>
            <Link href="/services/appdev/hybrid-mobile-app-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Hybrid Mobile App Development
            </li></Link>
            <Link href="/services/appdev/web-app-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Web App Development
            </li></Link>
            <Link href="/services/appdev/cross-platform-app-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Cross-Platform App Development
            </li></Link>
            <Link href="/services/appdev/android-app-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              Android App Development
            </li></Link>
            <Link href="/services/appdev/ios-app-development"><li className="text-[16px]  mb-2 px-4" onClick={closeMobileMenu}>
              IOS App Development
            </li></Link>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Navbar;
