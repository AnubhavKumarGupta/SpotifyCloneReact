import React from 'react'
import TopNav from '../Components/Navbar/TopNav'
import Library from './../Components/Library/Library'

const LeftSection = (props) => {
  return (
    <div className='w-[24%] h-screen'>
        <TopNav />
        <Library DUMMY_DATA={props.DUMMY_DATA}/>
    </div>
  )
}

export default LeftSection