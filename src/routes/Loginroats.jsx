import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../components'
import { Login } from '../pages'

const Loginroats = () => {
  return (
     <Routes>
        <Route path={PATH.main} element = {<Login/>}/>
     </Routes>
  )
}

export default Loginroats
