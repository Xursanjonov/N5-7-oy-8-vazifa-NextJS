'use client'
import React, { Fragment, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import { useDeleteMockAPIProductMutation } from '@/lib/api/mockAPIProducts'
import { addToCart } from '@/lib/features/cart/cartSlice'
import trash from '@/assets/icons/trash-icon.svg'
import addIcon from '@/assets/icons/add-icon.svg'
import Modal from '../modal/Modal'
import './product-item.css'

const emptyImg = 'https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty-300x240.jpg'

const ProductItem = ({ el, admin }) => {
    const dispatch = useDispatch()
    const [openModal, setOpenModal] = useState(null)
    const [deleteProduct] = useDeleteMockAPIProductMutation()

    const manageDelete = () => {
        if (admin) {
            dispatch(deleteProduct(el?.id))
        }
    }

    return (
        <Fragment>
            <div key={el?.id} className='w-[255px] h-[350px] mx-auto flex flex-col items-center rounded-md bg-gray-50'>
                <Image width={200} height={250} title={el?.title} className='h-[250px] p-4 mx-auto object-contain' alt='dummy image' src={el?.images[0] ?? emptyImg} />
                <div className="w-[255px] h-[120px] p-4 flex flex-col justify-between rounded-b-md border-b-[1px] shadow-sm bg-white">
                    <Link href={`/products/${el?.id}`} className='font-semibold text-black'>{el?.title}</Link>
                    <div className='w-full h-[40px] flex items-center justify-between text-end font-semibold '>
                        {
                            admin ? <div className='w-32 flex items-center justify-start gap-3'>
                                <button className='w-8 py-1 rounded-md bg-[#1C2434]'>
                                    <Image width={20} height={20} className='w-10 h-[20px]' alt='' src={addIcon} />
                                </button>
                                <button onClick={() => setOpenModal(el?.id)} className='w-8 py-1 rounded-md bg-[#1C2434]'>
                                    <Image width={20} height={20} className='w-10 h-[20px]' alt='' src={trash} />
                                </button>
                            </div> :
                                <button onClick={() => dispatch(addToCart(el))} className='w-40 border-2'>add to cart</button>
                        }
                        <p className='w-full text-end text-green-500'>{el?.price}$</p>
                    </div>
                </div>
            </div>
            {
                openModal ? <Modal close={setOpenModal}>
                    <div className='modal-div w-[300px] py-6 flex flex-col items-center justify-center gap-8 rounded-md bg-white'>
                        <h1 className='w-[250px] mx-auto text-xl font-semibold text-blue-500'>Do you want to delete {el?.title} product?</h1>
                        <div className="w-[250px] mx-auto flex items-center justify-end gap-5">
                            <button className='px-2 py-1 text-sm font-semibold rounded-md bg-gray-400' onClick={() => setOpenModal(null)}>Cancel</button>
                            <button className='px-2 py-1 text-sm font-semibold rounded-md bg-red-500' onClick={() => dispatch(deleteProduct(openModal))}>Delete</button>
                        </div>
                    </div>
                </Modal> : <></>
            }
        </Fragment>
    )
}

export default ProductItem