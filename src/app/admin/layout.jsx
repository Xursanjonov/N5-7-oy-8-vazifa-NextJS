import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar'
import './admin-layout.css'

const LayoutAdmin = ({ children }) => {
    return (
        <div className='admin-layout'>
            <Sidebar />
            <div className='ps-4'>
                {children}
            </div>
        </div>
    )
}

export default LayoutAdmin