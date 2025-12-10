import React from 'react'
import Header from '../components/Header'
import SectionBio from '../components/SectionBio'
import GridDetails from '../components/GridDetails'
import Myprojects from '../components/Myprojects'

const Home = () => {
  return (
<div className='bg-black'>
<Header/>
<SectionBio/>
<GridDetails/>
<Myprojects/>
</div>
  )
}

export default Home
