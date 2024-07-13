import React, { Fragment } from 'react'

const Modal = ({ close, children }) => {
    return (
        <Fragment>
            <div onClick={() => close(null)} className='fixed z-[999] top-0 left-0 w-[100%] h-screen bg-[#0005]'></div>
            <div className='w-[500px] h-[560px] top-[10%] left-[30%] z-[99999] translate-[-50%, -50%] fixed'> {children} </div>
        </Fragment>
    )
}

export default Modal