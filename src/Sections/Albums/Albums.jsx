import './Albums.css'
import SongRow from '../SongRows/SongRow'


const Albums = (props) => {

  return (
    <div id='song-container' className='w-[100%] h-[100%] overflow-y-scroll bg-[#121212] mt-1'>
      <SongRow DUMMY_DATA={props.DUMMY_DATA} />
      <SongRow DUMMY_DATA={props.DUMMY_DATA} />
      <SongRow DUMMY_DATA={props.DUMMY_DATA} />
    </div>
  )
}

export default Albums