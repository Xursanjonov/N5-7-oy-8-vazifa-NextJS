import React from 'react'
import { getData } from '@/utils/fetchData'
import Image from 'next/image'
import './detail.css'

const Detail = async (params) => {
    const { id } = await params
    let detailData = await getData(`/products/${id}`)

    return (
        <div className='detail'>
            <div className="detail-box">
                <figure>
                    <Image key={detailData?.id} className='h-[300px]' width={300} height={300} alt='detail img' src={detailData?.images[0]} />
                </figure>
            </div>
        </div>
    )
}

export default Detail