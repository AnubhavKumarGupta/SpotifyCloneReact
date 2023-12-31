import React from 'react'
import { useStateProvider } from '../../../Store/UserContext'
import { reducerCases } from '../../../Store/constants';
import { useNavigate } from 'react-router';

const LibraryItem = (props) => {
  let [{ token }, dispatch] = useStateProvider();
  const navigate = useNavigate()
  const updatePlaylist = (id) => {
    console.log(id);
    dispatch({ type: reducerCases.SET_VIEW, view: 'PLAYLIST' })
    dispatch({ type: reducerCases.SET_SELECTED_PLAYLISTID, selectedPlaylistId: id })
    navigate(`/playlist/${id}`);
  }
  return (
    <div className='flex items-center w-full m-3 cursor-pointer hover:bg-[#393939] p-1 rounded-sm focus:bg-[#393939]' onClick={() => {
      updatePlaylist(props.id);
    }}>
      <div className='w-[50px] h-[50px] mr-4'>
        <img src={props.coverImg} alt={props.id} className='h-full w-full object-cover' />
      </div>
      <div className='flex flex-col'>
        <h2 className='text-md text-white font-bold'>{props.title}</h2>
        <p className='text-sm text-gray-400 font-semibold capitalize'>{props.type} <span className='ml-3'>{props.artist}</span></p>
      </div>
    </div>
  )
}

export default LibraryItem