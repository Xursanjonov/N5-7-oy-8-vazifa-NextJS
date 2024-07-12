import ProductsWrapper from '@/components/products-wrapper/ProductsWrapper'
import React from 'react'

const Manage = () => {
    return (
        <div>
            <ProductsWrapper title={'Manage'} limit={10} admin={true}  />
        </div>
    )
}

export default Manage