import React from 'react'

const Button = ({title,classList}) => {
  return (
    <button type="submit" className={  ` w-[100%] text-[18px] text-white font-bold bg-[#1DA1F2] py-[18px] rounded-[76px] ${classList}`}>{title}</button>
  )
}

export default Button
