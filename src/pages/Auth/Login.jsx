import React from 'react'
import { Button, Heading, Input } from '../../components'
import { TwitterIcon } from '../../assets/images'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='w-[450px] mx-auto pt-[60px]'>
      <img className='mb-[36px]' src={TwitterIcon} alt="logo" width={50} height={41}/>
      <Heading type={"h2"} title={"Log in to Twitter"}/>
      <div>
        <form className="flex flex-col gap-[25px] mt-[36px]">
          <Input title={"Phone number, email address"} name={"login"} type={"text"}/>
          <Input title={"Password"} name={"password"} type={"password"}/>
          <Button title={"Log In"}/> 
        </form>
        <div className='flex justify-between mt-[40px]'>
            <Link to={"#"} className='text-[#1DA1F2] text-[18px]'>Forgot password?</Link>
            <Link to={"#"} className='text-[#1DA1F2] text-[18px]'>Sign up to Twitter</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
