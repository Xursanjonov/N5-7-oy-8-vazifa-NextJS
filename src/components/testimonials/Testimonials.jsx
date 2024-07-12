"use client"
import React from 'react'
import Image from 'next/image'
import images from '@/assets/images/user-img.png'
import star from '@/assets/icons/star-1.svg'
import { useGetUsersQuery } from '@/lib/api/userApi'
import './testimaonials.css'

const Testimonials = () => {
    const data = () => {
        const { data } = useGetUsersQuery("/users")
        return data
    }

    return (
        <div className='section-2'>
            <div className="section-2-title mb-12 flex flex-col items-center justify-center gap-5">
                <h1 className='text-3xl font-bold text-black'>Testimonials</h1>
                <p>Some quotes from our happy customers </p>
            </div>
            <div className="users-container w-[98%] ps-8 pe-4 pb-5 overscroll-x-auto overflow-auto my-4 mx-auto flex items-center justify-center gap-6">
                {
                    (data())?.users.map((user) => (
                        <div key={user?.id} className="w-[350px] h-[300px] mx-auto flex flex-col items-center justify-center gap-2 shadow-sm rounded-md bg-white">
                            <Image width={100} height={100} className='h-[100px] mx-auto object-contain' alt='dummy image' src={images} />
                            <div className="flex items-center justify-center gap-2">
                                <Image width={24} height={24} className='h-[24px] mx-auto object-contain' alt='dummy image' src={star} />
                                <Image width={24} height={24} className='h-[24px] mx-auto object-contain' alt='dummy image' src={star} />
                                <Image width={24} height={24} className='h-[24px] mx-auto object-contain' alt='dummy image' src={star} />
                                <Image width={24} height={24} className='h-[24px] mx-auto object-contain' alt='dummy image' src={star} />
                                <Image width={24} height={24} className='h-[24px] mx-auto object-contain' alt='dummy image' src={star} />
                            </div>
                            <h3 className='w-[290px] text-center font-semibold mx-auto'>"{user?.firstName} {user?.lastName} {user?.university}"</h3>
                            <p className='text-gray-500'>{user?.username}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials