"use client"
import React, { Fragment } from 'react'
import footerLogo from '@/assets/icons/footer-logo.svg'
import Link from 'next/link'
import Image from 'next/image'
import './footer.css'
import { usePathname } from 'next/navigation'

const Footer = () => {
    const path = usePathname()
    if (path === '/admin' || path === '/login') {
        return null
    }

    return (
        <Fragment>
            <footer className='footer'>
                <div className="footer-top">
                    <p className='w-full footer-line pt-80px'></p>
                    <div className="w-full flex items-start justify-between gap-3">
                        <div className="footer-1 mt-4 flex flex-col justify-center gap-4">
                            <Link href={'/'} className='footer-logo'>
                                <Image width={236} height={64} alt='footer logo' src={footerLogo} />
                            </Link>
                            <h2 className='text-[2xl] w-[270px] text[#FFFFFF]'>
                                Your natural candle made for <br /> your home and for your wellness.
                            </h2>
                        </div>
                        <div className="w-[600px] mt-8 flex items-center justify-center gap-20">
                            <ul className="footer-2-1">
                                <li className='text-[#56B280]'>Discovery</li>
                                <li>New season</li>
                                <li>Most searched</li>
                                <li>Most selled</li>
                            </ul>
                            <ul className="footer-2-1">
                                <li className='text-[#56B280]'>About</li>
                                <li>Helf</li>
                                <li>Shipping</li>
                                <li>Affiliate</li>
                            </ul>
                            <ul className="footer-2-1">
                                <li className='text-[#56B280]'>Info</li>
                                <li>Contact us</li>
                                <li>Privacy Policies</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <ul className='footer-bottom'>
                <ul className='px-4'>
                    <li>©Candleaf All Rights Reserved.</li>
                    <li>Designed with <span className='text-red-500'>♥️</span> by uxbly</li>
                </ul>
            </ul>
        </Fragment>
    )
}

export default Footer