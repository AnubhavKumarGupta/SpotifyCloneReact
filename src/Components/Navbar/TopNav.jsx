import React, { useContext } from 'react'
import logo from './../../assets/Spotify.png'
import { AiFillHome } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
const TopNav = (props) => {
  return (
    <ul className='w-[98%] h-[23%] bg-[#121212] flex flex-col items-start justify-center px-5 rounded-md m-[4px]' id='top-nav' >
      {
        false ? <li className='flex flex-row '>
          <a className='flex flex-row justify-between items-center' href="#">
            <img src={logo} className='h-[30px] object-contain' alt="logo" />
          </a>
        </li> : ''
      }
      <li className='flex flex-row mt-4 text-[20px] font-semibold capitalize'>
        <a className='flex flex-row justify-between items-center' href="#">
          <AiFillHome className='mr-4 text-[26px]' /> home
        </a>
      </li>
      <li className='flex flex-row mt-4 text-[20px] font-semibold capitalize'>
        <a className='flex flex-row justify-between items-center' href="#">
          <BiSearchAlt className='mr-4 text-[26px]' /> search
        </a>
      </li>
    </ul>
  )
}

export default TopNav