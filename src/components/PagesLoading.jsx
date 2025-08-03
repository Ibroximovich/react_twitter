import React from 'react'
import { TwitterIcon } from '../assets/images'

const PagesLoading = () => {
  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-between items-center'>
        <img className='mx-auto Loading-img' src={TwitterIcon} alt="twitter" width={100} height={100}/> 
    </div>
  )
}

export default PagesLoading
