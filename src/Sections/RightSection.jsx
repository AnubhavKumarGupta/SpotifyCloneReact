import React from 'react'
import Navbar from './../Components/Navbar/Navbar'
import Albums from './../View/Albums/Albums'
import Search from '../View/Search/Search'
import AlbumView from './../View/AlbumView/AlbumView'

import PlaylistView from '../View/PlaylistOpen/PlaylistView'
import { useStateProvider } from '../Store/UserContext'
const RightSection = () => {
  const [{view}] = useStateProvider()
  return (
    <div className='w-[76%] h-full bg-[#000000] overflow-hidden'>
      <Navbar/>
      {view == 'HOME' && <Albums/>}
      {view == 'PLAYLIST' && <PlaylistView/>}
      {view == 'SEARCH' && <Search/>}
      {view == 'ALBUM' && <AlbumView/>}
    </div>
  )
}

export default RightSection