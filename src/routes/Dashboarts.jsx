import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Routelist } from '../components'
import { Navbar, Sitebar } from '../modules'

const DashboartsRoutes = () => {
  return (
    <div className='containers flex'>
      <Navbar/>
      <div className='w-[910px] h-[100vh] overflow-y-auto border-x-[1px] border-black'>
      <Routes>
          {Routelist.map(item => <Route key={item.id} path={item.path} element ={item.element}/>)}
      </Routes>
      </div>
      <Sitebar/>
    </div>
  )
}

export default DashboartsRoutes
