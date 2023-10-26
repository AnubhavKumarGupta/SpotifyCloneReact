import React from 'react'
import Navbar from './../Components/Navbar/Navbar'
import Albums from './Albums/Albums'
const RightSection = () => {
  return (
    <div className='w-[75%] h-screen bg-yellow-200'>
      <Navbar/>
      <Albums/>
    </div>
  )
}

export default RightSection