import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PATH } from '../components'
import { Login } from '../pages'
import PagesLoading from '../components/PagesLoading'


const Loginroats = () => {
  return (
     
     <Routes>
        <Route path={PATH.main} element = {
         <Suspense fallback = {<PagesLoading/>}><Login/></Suspense>
        }/>
     </Routes>
  )
}

export default Loginroats
