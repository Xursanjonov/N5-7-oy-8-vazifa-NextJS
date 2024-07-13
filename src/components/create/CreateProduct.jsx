import React from 'react'

const CreateProduct = () => {

    return (
        <form className='w-[400px] grid grid-cols-1 gap-4'>
            <label htmlFor="" className='flex flex-col gap-2'> Title
                <input type="text" className='w-full px-3 py-1 bg-transparent border-b-[1px] border-black' placeholder='Title' />
            </label>
            <label htmlFor="" className='flex flex-col gap-2'> Brand
                <input type="text" className='w-full px-3 py-1 bg-transparent border-b-[1px] border-black' placeholder='Brand' />
            </label>
            <label htmlFor="" className='flex flex-col gap-2'> Price
                <input type="text" className='w-full px-3 py-1 bg-transparent border-b-[1px] border-black' placeholder='Price' />
            </label>
            <label htmlFor="" className='flex flex-col gap-2'> Count
                <input type="text" className='w-full px-3 py-1 bg-transparent border-b-[1px] border-black' placeholder='Count' />
            </label>
            <label htmlFor="" className='flex flex-col gap-2'> Count
                <input type="text" className='w-full px-3 py-1 bg-transparent border-b-[1px] border-black' placeholder='Count' />
            </label>
            <select className="w-full px-3 py-2 bg-transparent border-[1px] rounded-sm border-black">
                <option value="">Category</option>
                <option value="iPhone">iPhone</option>
                <option value="Samsung">Samsung</option>
                <option value="Redmi">Redmi</option>
                <option value="Laptop">Laptop</option>
                <option value="Car">Car</option>
            </select>
            <label htmlFor="" className='flex flex-col gap-2'> Image
                <input type="text" className='w-full px-3 py-1 bg-transparent border-b-[1px] border-black' placeholder='Image' />
            </label>
            <button className='w-full mt-5 py-2 rounded-md font-semibold bg-green-500' type='submit'>Create</button>
        </form>
    )
}

export default CreateProduct