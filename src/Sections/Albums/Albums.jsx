import React from 'react'
import SongCard from '../../Components/SongCard/SongCard'
import './Albums.css'


const Albums = (props) => {
  return (
    <div className='w-full h-[99%] m-1 bg-[#121212] '>
      <h2 className='text-xl font-bold text-white capitalize w-fit mx-5 hover:border-b-2'>spotify playlist</h2>
      <div id='song-container' className='w-full h-full overflow-y-scroll flex flex-wrap gap-3 p-5'>
        {
          props.DUMMY_DATA.map(playlist => <SongCard key={playlist.id} songImg={playlist.songImg} songName={playlist.songName} songDesc={playlist.songDesc}/>)
        }
      </div>
    </div>
  )
}

export default Albums