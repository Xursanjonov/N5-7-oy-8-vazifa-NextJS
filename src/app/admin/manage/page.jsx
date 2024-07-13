import ProductsWrapper from '@/components/products-wrapper/ProductsWrapper'
import React from 'react'

const Manage = () => {
    return (
        <div>
            <ProductsWrapper limit={10} admin={true} mock={true}  />
        </div>
    )
}

export default Manage