"use client"
import React from 'react'
import { useGetProductByIdQuery } from '@/lib/api/productApi'
import Image from 'next/image'

const ProductDetail = ({ id }) => {
    let { data } = useGetProductByIdQuery(`/${id}`)
    console.log(data)

    return (
        <div className='w-full flex items-center justify-center'>
            <Image width={300} height={300} alt='detail img' className='w-[300px] h-[300px] ' src={data?.images[0]} />
            <h2>{data?.title}</h2>
            <div>
                <button>-</button>
                {/* <span>{data?}</span> */}
                <button>+</button>
            </div>
        </div>
    )
}

export default ProductDetail