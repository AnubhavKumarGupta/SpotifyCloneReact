import React from 'react'
import { useStateProvider } from '../../Store/UserContext'
import { reducerCases } from '../../Store/constants';

const SongCard = (props) => {
  const [{ token }, dispatch] = useStateProvider();
  const updatePlaylist = (id, type, image, name) => {
    if (type == 'playlist') {
      dispatch({ type: reducerCases.SET_VIEW, view: 'PLAYLIST' })
      dispatch({ type: reducerCases.SET_SELECTED_PLAYLISTID, selectedPlaylistId: id })
    }
    if (type == 'album') {
      const albumInfo = {
        id: id,
        type: type,
        image: image,
        name: name,
      }
      dispatch({ type: reducerCases.SET_VIEW, view: 'ALBUM' })
      dispatch({ type: reducerCases.SET_SELECTED_ALBUM_INFO, selectedAlbumInfo: albumInfo })
    }
  }
  return (
    <div className='w-[220px] h-[300px] p-5 rounded-lg bg-[#191818] hover:bg-[#242424]' onClick={() => { updatePlaylist(props.id, props.songDesc, props.songImg, props.songName) }}>
      <div className='w-[180px] h-[180px]'>
        <img src={props.songImg} alt="song-img" className='w-full h-full object-contain' />
      </div>
      <div className='mt-2 text-left justify-start pb-3'>
        <h2 className='text-md text-white text-left font-bold tracking-wide my-2'>{props.songName}</h2>
        <p className='text-sm text-gray-400 font-semibold '>{props.songDesc}</p>
      </div>
    </div>
  )
}

export default SongCard