import React from 'react'
import './details.css'
import details_img from '../assets/details_1.jpg'


const Details = () => {
  return (
    <div className='detailss h-[100vh] w-5/6 mx-auto flex flex-row items-center justify-between relative'>
        <img src={details_img} alt="image"  className='w-1/3 h-[60vh] rounded-2xl'/>
        <div>
            Something
        </div>
    </div>
  )
}

export default Details