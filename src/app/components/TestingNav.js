"use client"
import React, { Fragment } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const TestingNav = () => {
	const [showNav, setShowNav] = useState(false);
	return (
		<Fragment>
			{
				<Image className='sm:relative translate-x-0.5 sm:right-6 sm:top-5 md:hidden lg:hidden xl:hidden 2xl:hidden cursor-pointer sm:float-right' src={showNav ? "/assets/01fe6447fbd35f56bf5b36ce07e7fabb.jpg" : "/assets/269dd16fa1f5ff51accd09e7e1602267.png"} height={35} width={35} alt='pic1' onClick={() => setShowNav(!showNav)} />
			}
			<Image className='md:hidden lg:hidden xl:hidden 2xl:hidden relative top-5 left-5' src="/assets/download (1).png" height={70} width={70} alt='logo' />
			{
				<aside className={showNav ? "sm:bg-[#151515] font-montserrat sm:h-[790px] sm:mt-[40px] sm:absolute sm:w-full cursor-pointer sm:text-white accordion-nav md:hidden lg:hidden xl:hidden 2xl:hidden" : "hidden sm:bg-[#151515] cursor-pointer sm:absolute font-montserrat sm:text-white sm:w-full sm:h-[740px] sm:mt-[20px] accordion-nav md:hidden lg:hidden xl:hidden 2xl:hidden"}>
					<h3 className='sm:text-center sm:mt-5 font-extrabold text-2xl'>Home</h3>
					<h3 className='sm:text-center font-extrabold sm:mt-2 text-2xl'>About Us</h3>
					<h3 className='sm:text-center font-extrabold sm:mt-2 text-2xl'>Contact Us</h3>
					<h3 className='sm:text-center font-extrabold sm:mt-2 text-2xl'>Portfolio</h3>
					<h3 className='sm:text-center font-extrabold sm:mt-2 text-2xl'>Projects</h3>
					<h1 className='text-2xl sm:mt-2 font-extrabold sm:text-center'>Services</h1>

					<div>
						<Link href="/services/digital"><h2 className='sm:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Digital Marketing Services</h2></Link>
						<div>
							<h3 className='sm:text-center'>Search Engine Optimization</h3>
							<h3 className='sm:text-center'>E-Commerce SEO</h3>
							<h3 className='sm:text-center'>Content Writing Services</h3>
							<h3 className='sm:text-center'>ORM</h3>
							<h3 className='sm:text-center'>SEM</h3>
							<h3 className='sm:text-center'>Link Building Services</h3>
						</div>
						<h2 className='sm:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Social Media Marketing Services</h2>
						<div>
							<h3 className='sm:text-center'>FaceBook Marketing Services</h3>
							<h3 className='sm:text-center'>Instagram Marketing Services</h3>
							<h3 className='sm:text-center'>Social Media Management Services</h3>
							<h3 className='sm:text-center'>Social Media Advertising Services</h3>
							<h3 className='sm:text-center'>YouTube Video Production & Optimization</h3>
						</div>

						<h2 className='sm:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Web Design & Development Services</h2>
						<div>
							<h3 className='sm:text-center'>Responsive Website Design Services</h3>
							<h3 className='sm:text-center'>Rapid Web Design</h3>
							<h3 className='sm:text-center'>Landing Pages Development</h3>
							<h3 className='sm:text-center'>Custom Web Development</h3>
							<h3 className='sm:text-center'>WordPress Website Development</h3>
							<h3 className='sm:text-center'>Web Design & Development</h3>
						</div>

						<h2 className='sm:text-center mob-nav-item sm:relative sm:left-2 sm:mt-2 text-xl'>E-commerce Development Services</h2>
						<div>
							<h3 className='sm:text-center'>BigCommerce Development</h3>
							<h3 className='sm:text-center'>Shopify Development</h3>
							<h3 className='sm:text-center'>WooCommerce Development</h3>
							<h3 className='sm:text-center'>Magento Development</h3>
							<h3 className='sm:text-center'>Custom eCommerce Development</h3>
						</div>

						<h2 className='sm:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Video Production Services</h2>
						<div>
							<h3 className='sm:text-center'>TV commercial</h3>
							<h3 className='sm:text-center'>Product unboxing</h3>
							<h3 className='sm:text-center'>Digital Video Commercials</h3>
							<h3 className='sm:text-center'>Coporate Video production</h3>
							<h3 className='sm:text-center'>Video Production</h3>
							<h3 className='sm:text-center'>Animation Services</h3>
						</div>

						<h2 className='sm:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Animation Services</h2>
						<div>
							<h3 className='sm:text-center'>Whiteboard Animation</h3>
							<h3 className='sm:text-center'>3D Animation</h3>
							<h3 className='sm:text-center'>2D Animation</h3>
							<h3 className='sm:text-center'>Coporate Video</h3>
							<h3 className='sm:text-center'>Animation</h3>
							<h3 className='sm:text-center'>TVC</h3>
						</div>

						<h2 className='sm:text-center mob-nav-item sm:relative sm:left-2 text-xl'>UI/UX Design Services</h2>
						<div>
							<h3 className='sm:text-center'>High-fidelity Prototype</h3>
							<h3 className='sm:text-center'>Wirefrrames</h3>
							<h3 className='sm:text-center'>Mobile and Web User Interface Design</h3>
							<h3 className='sm:text-center'>Cross-Platform Compatibility</h3>
							<h3 className='sm:text-center'>Technical Design</h3>
							<h3 className='sm:text-center'>UX Design</h3>
						</div>

						<h2 className='sm:text-center mob-nav-item sm:relative sm:left-2 text-xl'>Application Development Services</h2>
						<div>
							<h3 className='sm:text-center'>Native Mobile App Development</h3>
							<h3 className='sm:text-center'>Hybird Mobile App Development</h3>
							<h3 className='sm:text-center'>Web App Development</h3>
							<h3 className='sm:text-center'>Cross-Platform App Development</h3>
							<h3 className='sm:text-center'>Android App Development</h3>
							<h3 className='sm:text-center'>IOS App Development</h3>
						</div>
					</div>


				</aside>
			}

		</Fragment>
	)
}

export default TestingNav