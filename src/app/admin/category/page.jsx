"use client"
import { useGetMockAPICategoryQuery } from '@/lib/api/categoryApi'
import React from 'react'

const Category = () => {

  const categoryData = () => {
    const { data } = useGetMockAPICategoryQuery()
    return data
  }

  return (
    <div className='w-full mx-auto grid grid-cols-1'>
      <h1 className='text-xl font-bold text-black'>Category</h1>
      <div className="w-[500px] mt-5 grid grid-cols-1 gap-2 bg-transparent">
        {
          (categoryData())?.map(el => {
            console.log(el),
            <p>
              {el?.name}
            </p>
          })
        }
        <li key={9} className='w-full px-4 py-1 rounded-md flex items-center text-black gap-2 bg-violet-500'>
          <span className='flex-1'>{'name'}</span> <span>pen</span> <span>del</span>
        </li>
        <li key={10} className='w-full px-4 py-1 rounded-md flex items-center text-black gap-2 bg-violet-500'>
          <span className='flex-1'>{'name'}</span> <span>pen</span> <span>del</span>
        </li>
      </div>
    </div>
  )
}

export default Category