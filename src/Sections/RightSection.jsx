import React from 'react'
import Navbar from './../Components/Navbar/Navbar'
import Albums from './Albums/Albums'
import PlaylistOpen from './PlaylistOpen/PlaylistOpen'
const RightSection = () => {
  return (
    <div className='w-[76%] h-screen bg-[#000000] overflow-hidden'>
      <Navbar/>
      {/* <Albums/> */}
      <PlaylistOpen/>
    </div>
  )
}

export default RightSection