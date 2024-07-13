'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import logo from '@/assets/icons/logo.svg'
import userIcon from '@/assets/icons/user-icon.svg'
import shopIcon from '@/assets/icons/shop-icon.svg'
import wishlist from '@/assets/icons/wish-list.svg'
import Image from 'next/image'

const Header = () => {
    const path = usePathname()

    if (['/admin', '/admin/dashboard', '/admin/create', '/admin/manage', '/admin/category', '/login'].includes(path)) {
        return null
    }

    return (
        <header className='w-full h-[75px] sticky top-0 z-50 bg-white shadow-md'>
            <nav className="max-w-[1520px] mx-auto px-4 flex items-center justify-between gap-5">
                <Link href={'/'} className='w-[100px] h-[75px] flex items-center justify-center'>
                    <Image width={100} height={100} className='' alt='logo' src={logo} />
                </Link>
                <div className="flex items-center justify-center gap-6 font-semibold text-black">
                    <Link className={` ${path === '/' ? 'active' : ''}`} href={'/'}>Home</Link>
                    <Link className={` ${path === '/about' ? 'active' : ''}`} href={'/about'}>About</Link>
                    <Link className={` ${path === '/products' ? 'active' : ''}`} href={'/products'}>Products</Link>
                </div>
                <div className="flex items-center justify-center gap-6">
                    <Link href={`/admin/${typeof window !== 'undefined' ? localStorage.getItem('sidebarBtn') : ''}`}>
                        <Image width={26} height={26} alt='user-icon' src={userIcon} />
                    </Link>
                    <Link href={'/wish-list'}>
                        <Image width={22} height={22} alt='wishlist-icon' src={wishlist} />
                    </Link>
                    <Link href={'/cart'}>
                        <Image width={22} height={22} alt='shop-icon' src={shopIcon} />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
