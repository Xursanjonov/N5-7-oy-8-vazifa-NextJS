"use client"
import { useGetMockAPICategoryQuery } from '@/lib/api/categoryApi'
import React from 'react'

const Category = () => {
  const { data } = useGetMockAPICategoryQuery()
  console.log(data)

  return (
    <div className='w-full mx-auto grid grid-cols-1'>
      <h1 className='text-xl font-bold text-black'>Category</h1>
      <ul className="w-[500px] bg-violet-500 grid grid-cols-1 gap-4">
        {
          data?.map(el => {
            <li key={el?.id} className='w-full flex items-center text-black'>
              <span className='flex-1'>{el?.name}</span> <span>pen</span> <span>del</span>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Category