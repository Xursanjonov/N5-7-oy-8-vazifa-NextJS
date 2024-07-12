'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/lib/features/cart/cartSlice'

const ProductItem = ({ el }) => {
    const dispatch = useDispatch()

    return (
        <div key={el?.id} className='w-[255px] h-[350px] mx-auto flex flex-col items-center rounded-md bg-gray-50'>
            <Image width={200} height={250} title={el?.title} className='h-[250px] p-4 mx-auto object-contain' alt='dummy image' src={el?.images[0]} />
            <div className="w-[255px] h-[120px] p-4 flex flex-col justify-between gap-4 rounded-b-md border-b-[1px] shadow-sm bg-white">
                <Link href={`/products/${el?.id}`} className='font-semibold text-black'>{el?.title}</Link>
                <div className='w-full h-[40px] flex items-center justify-between text-end font-semibold '>
                    <button onClick={()=>dispatch(addToCart(el))} className='w-40 border-2'>add to cart</button>
                    <p className='w-full text-end text-green-500'>{el?.price}$</p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem