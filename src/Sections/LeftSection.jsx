import React from 'react'
import TopNav from '../Components/Navbar/TopNav'
import Library from './../Components/Library/Library'

const LeftSection = () => {
  return (
    <div className='w-[25%] bg-gray-300 h-screen'>
        <TopNav/>
        <Library/>
    </div>
  )
}

export default LeftSection