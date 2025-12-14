import React, { use, useEffect } from 'react'
import WorkExperience from '../components/Work'
import Nav from '../common/Nav'
import { useLocation } from 'react-router'

const Experience = () => {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className='bg-black'>
      <Nav />
      <WorkExperience />
    </div>
  )
}

export default Experience
