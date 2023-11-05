import React from 'react'

const LibraryItem = (props) => {
  return (
    <div className='flex items-center w-full m-3 cursor-pointer hover:bg-[#393939] p-1 rounded-sm focus:bg-[#393939]'>
        <div className='w-[50px] h-[50px] mr-4'>
            <img src={props.coverImg} alt={props.id} className='h-full w-full object-cover'/>
        </div>
        <div className='flex flex-col'>
             <h2 className='text-md text-white font-bold'>{props.title}</h2>
             <p className='text-sm text-gray-400 font-semibold capitalize'>{props.type} <span className='ml-3'>{props.artist}</span></p>
        </div>
    </div>
  )
}

export default LibraryItem