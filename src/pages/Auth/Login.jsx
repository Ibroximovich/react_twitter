import React, { useState } from 'react'
import { Button, Heading, Input } from '../../components'
import { LoadingImg, TwitterIcon } from '../../assets/images'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import PagesLoading from '../../components/PagesLoading'


const Login = () => {
  const [Loading,setLoading] = useState(false)
  const [_cookies, setCookie] = useCookies(["token"]);
  function HandleFunction(e){
    setLoading(true)
    e.preventDefault()
    let newObj = {
      email:e.target.login.value,
      password:e.target.password.value
    }
    setTimeout(() => {
      setCookie("token",newObj)
    },1000)
     
     
    
  }
  return (
    <>
    
    <div className='w-[450px] mx-auto pt-[60px]'>
      <img className='mb-[36px]' src={TwitterIcon} alt="logo" width={50} height={41}/>
      <Heading type={"h2"} title={"Log in to Twitter"}/>
      <div>
        <form onSubmit={HandleFunction} className="flex flex-col gap-[25px] mt-[36px]">
          <Input title={"Phone number, email address"} name={"login"} type={"text"}/>
          <Input title={"Password"} name={"password"} type={"password"}/>
          <Button>
             {Loading ? <img className='mx-auto scale-[2]' src={LoadingImg} alt="logo" width={25} height={25} /> : "Login in"}
          </Button> 
        </form>
        <div className='flex justify-between mt-[40px]'>
            <Link to={"#"} className='text-[#1DA1F2] text-[18px]'>Forgot password?</Link>
            <Link to={"#"} className='text-[#1DA1F2] text-[18px]'>Sign up to Twitter</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
