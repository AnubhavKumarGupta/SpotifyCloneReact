import React from 'react'
import SongCard from '../../Components/SongCard/SongCard'
import './SongRow.css'
const SongRow = (props) => {
    return (
        <div className='my-5'>
            <h2 className='text-xl font-bold text-white capitalize w-fit mx-3 hover:border-b-2'>spotify playlist</h2>
            <div id='song-row' className='flex items-center justify-start gap-3 flex-nowrap overflow-x-scroll m-3'>
                {
                    props.DUMMY_DATA.map(playlist => <SongCard key={playlist.id} songImg={playlist.songImg} songName={playlist.songName} songDesc={playlist.songDesc} />)
                }
            </div>
        </div>

    )
}

export default SongRow