"use client"
import React, { Fragment } from 'react'
import ProductItem from './productItem'
import { useGetProductsQuery } from '@/lib/api/productApi';
import { useGetMockAPIProductsQuery } from '@/lib/api/mockAPIProducts';

const ProductsWrapper = ({ title, text, admin, limit = 8, mock }) => {
    const data = () => {
        const { data } = useGetProductsQuery("/products");
        return data
    }
    const products = () => {
        const { data } = useGetMockAPIProductsQuery("/products");
        return data
    }
    return (
        <Fragment>
            {
                title ? <div className="my-8 flex flex-col items-center justify-center gap-5">
                    <h1 className='text-3xl font-bold text-black'>{title ?? ''}</h1>
                    <p>{text ?? ''} </p>
                </div> : <></>
            }
            {
                mock ? <div className='w-[1480px] mx-auto mt-4 mb-10 grid grid-cols-4 gap-14'>
                    {
                        (products())?.slice(0, limit).map(el => (<ProductItem key={el?.id} admin={admin ?? ''} el={el} />))
                    }
                </div>
                    : <div className='w-[1480px] mx-auto mt-4 mb-10 grid grid-cols-4 gap-14'>
                        {
                            (data())?.products?.slice(0, limit).map(el => (<ProductItem key={el?.id} admin={admin ?? ''} el={el} />))
                        }
                    </div>
            }
        </Fragment>
    )
}

export default ProductsWrapper