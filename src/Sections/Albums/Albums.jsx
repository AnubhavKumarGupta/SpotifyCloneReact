import React from 'react'
import SongCard from '../../Components/SongCard/SongCard'
import './Albums.css'

let DUMMY_PLAYLISTS = [
  {
    id:'p-1',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
  {
    id:'p-2',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
  {
    id:'p-3',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
  {
    id:'p-4',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
  {
    id:'p-5',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
  {
    id:'p-6',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
  {
    id:'p-7',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
  {
    id:'p-8',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
  {
    id:'p-9',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
  {
    id:'p-10',
    songName:'Loki Verse 2.0',
    songDesc:'Loki Verse 2.0 by Anirudh Ravichander',
    songImg:'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
  },
]
const Albums = () => {
  return (
    <div className='w-full h-[99%] m-1 bg-[#121212] '>
      <h2 className='text-xl font-bold text-white capitalize w-fit mx-5 hover:border-b-2'>spotify playlist</h2>
      <div id='song-container' className='w-full h-full overflow-y-scroll flex flex-wrap gap-3 p-5'>
        {
          DUMMY_PLAYLISTS.map(playlist => <SongCard key={playlist.id} songImg={playlist.songImg} songName={playlist.songName} songDesc={playlist.songDesc}/>)
        }
      </div>
    </div>
  )
}

export default Albums