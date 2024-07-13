import CreateProduct from '@/components/create/CreateProduct'
import React from 'react'

const Create = () => {
    return (
        <div className='w-[100%] mx-auto'>
            <h1 className='text-2xl font-bold mb-6'>Create new Product</h1>
            <CreateProduct />
        </div>
    )
}

export default Create