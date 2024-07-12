"use client"
import Image from 'next/image'
import userIcon from '@/assets/icons/user-icon.svg'
import barsIcon from '@/assets/icons/bars.svg'
import React, { useState } from 'react'

const AdminHeader = () => {
    const [show, setShow] = useState(false)

    return (
        <nav className='w-full h-[65px] py-2 px-8 flex items-center justify-between bg-white'>
            <button>
                <Image width={20} height={20} alt='profile img' src={barsIcon} />
            </button>
            <figure onClick={() => setShow(p => !p)} className="cursor-pointer relative user__profile border-[3px] rounded-full p-[1px]" title='Menu'>
                <Image width={44} height={44} className='p-2 border-2 rounded-full' alt='profile img' src={userIcon} />

                <div className={`${show ? 'flex' : 'hidden'} bg-gray-300 flex-col items-center justify-evenly -translate-x-10 translate-y-2.5 w-20 h-[100px] rounded-md absolute`}>
                    <button className='text-black'>Profile</button>
                    <button className='text-black'>Setting</button>
                    <button className='text-black'>Log out</button>
                </div>
            </figure>
        </nav>
    )
}

export default AdminHeader