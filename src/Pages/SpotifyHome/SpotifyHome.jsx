import React from 'react'
import LeftSection from '../../Sections/LeftSection'
import RightSection from '../../Sections/RightSection'
import Controls from './../../Sections/Controls/Controls'
const SpotifyHome = (props) => {
  let DUMMY_PLAYLISTS = [
    {
      id: 'p-1',
      songName: 'Loki Verse 2.0',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songType: 'Playlist',
      artist: 'anirudh',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
    {
      id: 'p-2',
      songType: 'Playlist',
      songName: 'Loki Verse 2.0',
      artist: 'anirudh',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
    {
      id: 'p-3',
      songName: 'Loki Verse 2.0',
      artist: 'anirudh',
      songType: 'Playlist',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
    {
      id: 'p-4',
      songName: 'Loki Verse 2.0',
      artist: 'anirudh',
      songType: 'Playlist',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
    {
      id: 'p-5',
      songName: 'Loki Verse 2.0',
      songType: 'Playlist',
      artist: 'anirudh',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
    {
      id: 'p-6',
      songName: 'Loki Verse 2.0',
      songType: 'Playlist',
      artist: 'anirudh',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
    {
      id: 'p-7',
      songName: 'Loki Verse 2.0',
      artist: 'anirudh',
      songType: 'Playlist',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
    {
      id: 'p-8',
      songName: 'Loki Verse 2.0',
      artist: 'anirudh',
      songType: 'Playlist',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
    {
      id: 'p-9',
      songName: 'Loki Verse 2.0',
      artist: 'anirudh',
      songType: 'Playlist',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
    {
      id: 'p-10',
      songName: 'Loki Verse 2.0',
      artist: 'anirudh',
      songType: 'Playlist',
      songDesc: 'Loki Verse 2.0 by Anirudh Ravichander',
      songImg: 'https://c.saavncdn.com/415/Leo-Original-Motion-Picture-Soundtrack-English-2023-20231019170311-500x500.jpg'
    },
  ]
  return (
    <div className='w-full h-full flex justify-between overflow-hidden'>
      <LeftSection loginStatus={props.loginStatus} DUMMY_DATA={DUMMY_PLAYLISTS} />
      <RightSection loginStatus={props.loginStatus} DUMMY_DATA={DUMMY_PLAYLISTS} />
      <Controls loginStatus={props.loginStatus} />
    </div>
  )
}

export default SpotifyHome