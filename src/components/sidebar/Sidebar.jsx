"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import adminLogo from '@/assets/icons/admin-logo.svg'
import dashboardIcon from '@/assets/icons/dashboard.svg'
import categoryIcon from '@/assets/icons/category-icon.svg'
import manageIcon from '@/assets/icons/manage-icon.svg'
import addIcon from '@/assets/icons/add-icon.svg'
import './sidebar.css'

const Sidebar = () => {
    // const [addToClass, setAddToClass] = useState(localStorage.getItem('sidebarBtn') || 'dashboard')
    const [addToClass, setAddToClass] = useState('dashboard')

    useEffect(() => {
        localStorage.setItem('sidebarBtn', addToClass)
    }, [addToClass])

    return (
        <div className='admin__sidebar h-screen bg-blue-500'>
            <button className='w-full flex items-center justify-center gap-6 text-3xl py-3 shadow-sm shadow-white text-[#56B280]'>
                <Image width={32} height={32} className='' alt='Admin logo' src={adminLogo} />
                <Link href={'/'} className='font-bold mt-1'>Candleaf</Link>
            </button>
            <ul className='w-full mt-5 flex flex-col items-start gap-2'>
                <Link href={'/admin/dashboard'}
                    onClick={() => setAddToClass('dashboard')}
                    className={`w-[85%] mx-auto flex items-center gap-4 ${addToClass === 'dashboard' ? 'bg-[#333A48]' : ''} justify-start py-3 text-xl rounded-md`}>
                    <figure className='w-6 ms-4 flex items-center justify-end'>
                        <Image width={24} height={24} alt='Admin logo' src={dashboardIcon} />
                    </figure>
                    Dashboard
                </Link>
                <Link href={'/admin/create'}
                    onClick={() => setAddToClass('create')}
                    className={`w-[85%] mx-auto flex items-center gap-4 ${addToClass === 'create' ? 'bg-[#333A48]' : ''} justify-start py-3 text-xl rounded-md`}>
                    <figure className='w-6 ms-4 flex items-center justify-end'>
                        <Image width={22} height={22} alt='Admin logo' src={addIcon} />
                    </figure>
                    Create Product
                </Link>
                <Link href={'/admin/manage'}
                    onClick={() => setAddToClass('manage')}
                    className={`w-[85%] mx-auto flex items-center gap-4 ${addToClass === 'manage' ? 'bg-[#333A48]' : ''} justify-start py-3 text-xl rounded-md`}>
                    <figure className='ms-4 flex items-center justify-end'>
                        <Image width={28} height={28} alt='Admin logo' src={manageIcon} />
                    </figure>
                    Product Manage
                </Link>
                <Link href={'/admin/category'}
                    onClick={() => setAddToClass('category')}
                    className={`w-[85%] mx-auto flex items-center gap-4 ${addToClass === 'category' ? 'bg-[#333A48]' : ''} justify-start py-3 text-xl rounded-md`}>
                    <figure className='ms-4 flex items-center justify-end'>
                        <Image width={32} height={32} alt='Admin logo' src={categoryIcon} />
                    </figure>
                    Category
                </Link>
            </ul>
        </div>
    )
}

export default Sidebar