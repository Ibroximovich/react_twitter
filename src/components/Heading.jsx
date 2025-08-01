import React from 'react'

const Heading = ({type,title,classList}) => {
  if(type == "h1"){
    return <h1 className={`text-[42px] font-extrabold text-black ${classList}`}>{title}</h1>
  }
  else if(type == "h2"){
    return <h2 className={`text-[24px] font-bold text-black ${classList}`}>{title}</h2>
  }
  else if(type == "h3"){
    return <h3 className={`text-[20px] font-semibold text-black ${classList}`}>{title}</h3>
  }
}

export default Heading
