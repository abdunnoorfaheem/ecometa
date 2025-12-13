import React from 'react'
import { FaArrowLeft } from "react-icons/fa6";

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <>
            <div
               className='absolute left-5 top-1/2 z-10 text-3xl'   

                onClick={onClick}
            ><FaArrowLeft/></div>
        </>
    )
}

export default PrevArrow
