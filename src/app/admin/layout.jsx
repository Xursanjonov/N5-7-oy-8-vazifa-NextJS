import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import './admin-layout.css'
import AdminHeader from '@/components/admin-header/AdminHeader'

const LayoutAdmin = ({ children }) => {

    return (
        <div className='admin-layout'>
            <Sidebar />
            <div className='w-full h-[950px] flex flex-col'>
                <AdminHeader />
                <div className='w-full h-[885px] p-8 overflow-y-auto bg-gray-200'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default LayoutAdmin