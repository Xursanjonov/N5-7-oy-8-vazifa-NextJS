'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import trash from '@/assets/icons/trash.svg'
import pen from '@/assets/icons/pen.svg'

const ProductItem = ({ el, admin = '' }) => {

    return (
        <div key={el?.id} className='w-[255px] h-[350px] mx-auto flex flex-col items-center rounded-md bg-gray-50'>
            <Image width={200} height={250} title={el?.title} className='h-[250px] p-4 mx-auto object-contain' alt='dummy image' src={el?.images[0]} />
            <div className="w-[255px] h-[120px] p-4 flex flex-col justify-between gap-4 rounded-b-md border-b-[1px] shadow-sm bg-white">
                <Link href={`/products/${el?.id}`} className='font-semibold text-black'>{el?.title}</Link>
                <div className='w-full h-[40px] flex items-center justify-between text-end font-semibold text-green-500'>
                    {
                        admin ? (
                            <div key={el.id} className='flex items-center justify-start gap-4'>
                                <button className='text-sm p-2 rounded-md bg-orange-500'>
                                    <Image width={16} height={16} className='h-[16px] mx-auto object-contain' alt='dummy image' src={pen} />
                                </button>
                                <button className='text-sm p-2 rounded-md bg-red-500'>
                                    <Image width={16} height={16} className='h-[16px] mx-auto object-contain' alt='dummy image' src={trash} />
                                </button>
                            </div>
                        ) : ""
                    }
                    {admin ? el?.price + '$' : <p className='w-full text-end'>{el?.price}$</p>}
                </div>
            </div>
        </div>
    )
}

export default ProductItem