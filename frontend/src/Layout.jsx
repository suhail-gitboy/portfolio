import React from 'react'
import { Outlet } from 'react-router'
import Footer from './common/Footer'
import Nav from './common/Nav'
const Layout = () => {
  return (
  <>

  <Outlet/>
  <Footer/>
  </>
  )
}

export default Layout
