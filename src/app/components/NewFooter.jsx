import React, { Fragment } from 'react';
import Image from 'next/image';

const NewFooter = () => {
    return (
        <Fragment>
            <div className='bg-[#000213] h-screen w-full text-white font-montserrat'>
                <div>
                    <h1 className='text-6xl'>Design.Build.Launch</h1>
                    <p className='text-3xl'>Lets Build Something Awesome</p>
                    <p className='text-2xl'>Reach out to our team and we'll get back to you within a day.
                    </p>
                    <p>Office M-13, The Curve Building, Sheikh Zayed Road, Dubai, UAE
                    </p>
                    <p className='text-xl'>info@expobird.com</p>
                    <p className='text-xl'>+923394984948</p>
                    <div className='flex space-x-10'>
                        <Image src="/assets/social/facebook.svg" height={14} width={16} />
                        <Image src="/assets/social/instagram.svg" height={14} width={16} />
                        <Image src="/assets/social/x-white.svg" height={16} width={14} />
                        <Image src="/assets/social/linkedin.svg" height={16} width={14} />
                        <Image src="/assets/social/youtube.svg" height={16} width={14} />
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default NewFooter