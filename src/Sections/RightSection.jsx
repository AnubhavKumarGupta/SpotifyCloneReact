import React from 'react'
import Navbar from './../Components/Navbar/Navbar'
import Albums from './Albums/Albums'
const RightSection = (props) => {
  return (
    <div className='w-[76%] h-screen bg-[#000000] overflow-hidden'>
      <Navbar/>
      <Albums DUMMY_DATA={props.DUMMY_DATA}/>
    </div>
  )
}

export default RightSection