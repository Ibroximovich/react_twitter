import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Routelist } from '../components'

const DashboartsRoutes = () => {
  return (
   <Routes>
      {Routelist.map(item => <Route key={item.id} path={item.path} element ={item.element}/>)}
   </Routes>
  )
}

export default DashboartsRoutes
