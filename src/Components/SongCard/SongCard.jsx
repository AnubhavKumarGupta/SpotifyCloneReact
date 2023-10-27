import React from 'react'

const SongCard = (props) => {
  return (
    <div className='w-[210px] h-[290px] p-5 rounded-lg bg-[#191818] hover:bg-[#242424]'>
        <img src={props.songImg} className='h-auto object-contain' alt="song-img" />
        <div className='mt-2 text-left justify-start'>
            <h2 className='text-md text-white text-left font-bold tracking-wide my-2'>{props.songName}</h2>
            <p className='text-sm text-gray-400 font-semibold '>{props.songDesc}</p>
        </div>
    </div>
  )
}

export default SongCard