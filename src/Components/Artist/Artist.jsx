const Artist = ({artist}) => {
  return (
    <div className='w-[250px] h-[250px]  flex flex-col items-center justify-center cursor-pointer'>
        <div className='w-[200px] h-[200px] rounded-full flex items-center justify-center shadow-sm shadow-gray-100'>
            <img src={artist.url} alt={artist.name} className='w-full h-full object-cover rounded-full'/>
        </div>
        <h1 className='text-md text-center font-semibold text-white mt-5'>{artist.name}</h1>
    </div>
  )
}

export default Artist