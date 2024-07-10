import React from 'react'
import Image from 'next/image'
import cleanIcon from '@/assets/icons/clean-icon.svg'
import cleanImg from '@/assets/images/clean.png'
import './clean.css'

const Clean = () => {
    return (
        <div className='clean flex items-center justify-evenly'>
            <div className="clean-1 flex flex-col justify-center gap-12">
                <div className="">
                    <h1 className='w-[380px] text-black font-poppins text-5xl font-semibold'>Clean and fragrant soy wax</h1>
                    <p className='mb-6 text-[#56B280]'>Made for your home and for your wellness</p>
                </div>
                <div className="flex flex-col justify-start gap-2 text-black">
                    <li className='w-[500px] text-start flex items-center gap-2'>
                        <Image width={18} height={18} className='h-[18px] object-contain' alt='dummy image' src={cleanIcon} />
                        <span className='font-semibold'>Eco-sustainable:</span> All recyclable materials, 0% CO2 emissions
                    </li>
                    <li className='w-[500px] text-start flex items-center gap-2'>
                        <Image width={18} height={18} className='h-[18px] object-contain' alt='dummy image' src={cleanIcon} />
                        <span className='font-semibold'>Hyphoallergenic:</span> 100% natural, human friendly ingredients
                    </li>
                    <li className='w-[500px] text-start flex items-center gap-2'>
                        <Image width={18} height={18} className='h-[18px] object-contain' alt='dummy image' src={cleanIcon} />
                        <span className='font-semibold'>Handmade:</span> All candles are craftly made with love.
                    </li>
                    <li className='w-[500px] text-start flex items-center gap-2'>
                        <Image width={18} height={18} className='h-[18px] object-contain' alt='dummy image' src={cleanIcon} />
                        <span className='font-semibold'>Long burning:</span> No more waste. Created for last long.
                    </li>
                </div>
                <button className='w-[150px] h-[44px] mt-8 font-semibold rounded-md text-white bg-[#56B280]'>Learn more</button>
            </div>
            <div className="clean-2">
                <Image width={540} height={380} className='h-[380px] mx-auto object-contain bg-white' alt='dummy image' src={cleanImg} />
            </div>
        </div>
    )
}

export default Clean