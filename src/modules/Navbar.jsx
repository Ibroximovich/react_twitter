import React, { useState } from 'react'
import { Button, Routelist } from '../components'
import { TwitterIcon } from '../assets/images'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [active,setactive] = useState("/")
  return (
    <div className='w-[283px] pt-[36px] pr-[16px] flex flex-col gap-[30px] '>
        <img src={TwitterIcon} alt="logo" width={40} height={33} />
      {Routelist.map(item =>(
        <nav>
           <NavLink onClick={() => setactive(item.path)} key={item.id} to={item.path} className=" flex items-center gap-[20px]">
               {active == item.path ? item.activeIcon : item.icon}
                <span>{item.title}</span>
           </NavLink>
        </nav>
      ))}
      <Button classList={"!py-[15px] !w-[230px]"}>Tweet</Button>
    </div>
  )
}

export default Navbar
