"use client"
import React from 'react'
import Image from 'next/image'
import { useGetProductByIdQuery } from '@/lib/api/productApi'
import './product-detail.css'

const ProductDetail = ({ id }) => {
    let { data } = useGetProductByIdQuery(`/${id}`)

    return (
        <div className='product__detail'>
            <figure className='product__detail-figure'>
                <Image width={300} height={300} alt='detail img' className='product__detail-figure-img w-[400px] h-[300px] mx-auto object-contain' src={data?.images[0]} />
                <div className='flex items-center gap-4'>
                    <Image width={100} height={100} alt='detail img' className='w-[100px] h-[100px] mx-auto object-contain border-2 rounded-md' src={data?.images[0]} />
                    <Image width={100} height={100} alt='detail img' className='w-[100px] h-[100px] mx-auto object-contain border-2 rounded-md' src={data?.images[0]} />
                    <Image width={100} height={100} alt='detail img' className='w-[100px] h-[100px] mx-auto object-contain border-2 rounded-md' src={data?.images[0]} />
                </div>
                <h4>All hand-made with natural soy wax, Candleaf is made for your pleasure moments.</h4>
                <p>🚚 FREE SHIPPING</p>
            </figure>
            <div className='product__detail-info w-[400px] mx-auto flex flex-col justify-center gap-4'>
                <h2 className='text-3xl py-4 font-semibold text-black'>{data?.title}</h2>
                <div className="product__detail-info-div">
                    <div className="product__detail-info-totals flex flex-col items-center gap-4">
                        <p className='text-2xl font-semibold text-[#56B280]'>{data?.price}$</p>
                        <span>Quantity</span>
                        <div className="w-[100px] flex items-center justify-center gap-2 border-2 border-green-500">
                            <button className='flex items-center justify-center text-lg font-bold text-green-500'>-</button>
                            <span className='text-lg w-[45px] text-center'>0</span>
                            <button className='flex items-center justify-center text-lg font-bold text-green-500'>+</button>
                        </div>
                    </div>
                    <div className="product__detail-info-addTo">
                        <div className="flex items-center gap-3">
                            <input type="radio" id="oneTime" />
                            <label htmlFor="oneTime">One time purchase</label>
                        </div>
                        <div className='w-[350px] flex flex-wrap items-center gap-3'>
                            <input type="radio" id="subs" />
                            <label htmlFor="subs">Subscribe and delivery every</label>
                            <select name="" id="" className='px-3 py-1'>
                                <option value="weeks4">4 weeks</option>
                                <option value="weeks3">3 weeks</option>
                                <option value="weeks2">2 weeks</option>
                                <option value="weeks1">1 weeks</option>
                            </select>
                            <p>
                                Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail