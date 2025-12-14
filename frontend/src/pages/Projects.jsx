import React, { useEffect } from 'react'
import Myprojects from '../components/Myprojects'
import Nav from '../common/Nav'
import { useLocation } from 'react-router-dom'

const Projects = () => {

  const { pathname } = useLocation()


  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return (
    <div className='bg-black'>
      <Nav />
      <div className="py-50">
        <Myprojects />
      </div>
    </div>
  )
}

export default Projects
