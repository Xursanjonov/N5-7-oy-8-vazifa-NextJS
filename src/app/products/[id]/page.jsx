import React from 'react'
import ProductDetail from '@/components/product-detail/ProductDetail'
import './detail.css'

const Detail = async ({params}) => {
    const { id } = await params

    return (
        <div className='detail w-full h-[80vh] pt-24 mx-auto'>
            <ProductDetail key={id} id={id} />
        </div>
    )
}

export default Detail