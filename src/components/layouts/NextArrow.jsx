import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const NextArrow = (props) => {
    const {onClick } = props;
  return (
    <>
      <div
      className='absolute top-1/2 right-5 text-3xl'
      onClick={onClick}
    ><FaArrowRightLong/></div>
    </>
  )
}

export default NextArrow
