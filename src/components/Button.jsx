import React from 'react'

const Button = ({children,classList}) => {
  return (
    <button type="submit" className={  ` w-[100%] text-[18px] text-white font-bold bg-[#1DA1F2] py-[18px] rounded-[76px] ${classList}`}>{children}</button>
  )
}

export default Button
