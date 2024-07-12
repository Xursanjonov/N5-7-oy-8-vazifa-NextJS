import React from 'react'
import ProductDetail from '@/components/product-detail/ProductDetail'
import './detail.css'

const Detail = async ({params}) => {
    const { id } = await params

    return (
        <div className='detail w-[1480px] h-auto mx-auto flex items-center justify-center py-24'>
            <ProductDetail key={id} id={id} />
        </div>
    )
}

export default Detail