import React, { use, useEffect } from 'react'
import WorkExperience from '../components/Work'
import Nav from '../common/Nav'
import { useLocation } from 'react-router'
import Footer from '../common/Footer'

const Experience = () => {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className='bg-black'>
      <Nav />
      <WorkExperience />
      <Footer />
    </div>
  )
}

export default Experience
