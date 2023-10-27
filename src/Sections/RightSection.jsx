import React from 'react'
import Navbar from './../Components/Navbar/Navbar'
import Albums from './Albums/Albums'
const RightSection = () => {
  return (
    <div className='w-[76%] h-screen bg-[#000000]'>
      <Navbar/>
      <Albums/>
    </div>
  )
}

export default RightSection