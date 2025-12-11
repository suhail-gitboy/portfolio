import React from 'react'
import { Outlet } from 'react-router'
import Footer from './common/Footer'
import Nav from './common/Nav'
const Layout = () => {
  return (
  <div className='bg-black'>

  <Outlet/>
  <Footer/>
  </div>
  )
}

export default Layout
