import React from 'react'

const Input = ({title,classList,name,type}) => {
  return (
    <input required autoComplete='off' className={`w-[100%] text-[18px] text-[#00000099] outline-none py-[23px] pl-[20px] rounded-[6px] border-[1px] border-[#00000033] ${classList}`} type = {type} placeholder={title} name={name}/>
  )
}

export default Input
