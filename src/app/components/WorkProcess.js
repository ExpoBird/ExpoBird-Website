import React from 'react';
import Image from 'next/image';

const WorkProcess = () => {
    return (
        <>
            <div className="px-48 my-48 relative font-montserrat flyCardStacks">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[#171A46] text-[180px] font-black">Our</p>
                    </div>
                    <div>
                        <div className="w-[565px] h-[693px] relative top-0 bg-[#171A44] rounded-[43px] z-0 p-[32px] flyCard-1">
                            <p className="text-[37px] text-white font-black mb-[32px]">
                                Westpoint Pakistan
                            </p>
                            <Image
                                src="/assets/westpoint-image.png"
                                width={487}
                                height={326}
                                alt=""
                            />
                            <p className="text-[16px] text-white mt-[48px]">
                                Choose Expobird as your digital marketing agency and propel your
                                business to new heights
                            </p>
                            <p className="text-[48px] text-white font-semibold">+300%</p>
                            <div className="flex justify-end">
                                <Image
                                    src="/assets/arrow-black.png"
                                    width={28}
                                    height={28}
                                    className="invert brightness-0"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="w-[565px] h-[693px] absolute top-0 bg-[#5D64CB] rounded-[43px] -z-10 -rotate-[4deg] p-[32px] flyCard-2">
                            <Image
                                src="/assets/westpoint-image2.png"
                                width={280}
                                height={240}
                                alt=""
                            />
                            <p className="text-[60px] font-semibold text-[#391952] leading-none mt-[32px]">
                                Set up your Swag Spend Account and instantly set up your digital
                                Visa Debit card.
                            </p>
                        </div>
                        <div className="w-[565px] h-[693px] absolute top-0 bg-[#9399E9] rounded-[43px] -z-20 -rotate-[8deg] p-[32px] flyCard-3">
                            <Image
                                src="/assets/westpoint-image3.png"
                                width={280}
                                height={240}
                                alt=""
                            />
                            <p className="text-[60px] font-semibold text-[#391952] leading-none mt-[32px]">
                                Spend and save on Cashback offers and in the Swag store.
                            </p>
                        </div>
                        <div className="w-[565px] h-[693px] absolute top-0 bg-[#E3E5FF] rounded-[43px] -z-30 -rotate-[12deg] p-[32px] flyCard-4">
                            <Image
                                src="/assets/westpoint-image4.png"
                                width={280}
                                height={240}
                                alt=""
                            />
                            <p className="text-[60px] font-semibold text-[#391952] leading-none mt-[32px]">
                                Receive your physical Swag Visa Debit card in the mail after 5-7
                                days.
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[#171A46] text-[180px] font-black">Work</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WorkProcess