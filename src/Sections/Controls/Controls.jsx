import './Controls.css'
import axios from 'axios'
import Button from './../../Components/Buttons/Button'
import CurrentlyPlaying from '../../Components/CurrentlyPlaying/CurrentlyPlaying'
import { AiFillStepForward, AiFillStepBackward, AiFillPlayCircle } from 'react-icons/ai'
import { useStateProvider } from './../../Store/UserContext'
import { reducerCases } from '../../Store/constants'
import { BiSolidVolumeFull } from 'react-icons/bi'
import { FaCirclePause } from "react-icons/fa6";
import { IoShuffle } from "react-icons/io5";
import { SlLoop } from "react-icons/sl";

const Controls = () => {

  const [{ token, playerState }, dispatch] = useStateProvider();
  const changeTrack = async (type) => {
    await axios.post(`https://api.spotify.com/v1/me/player/${type}`, {}, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })

    dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    })
    if (response.data !== '') {
      const { item } = response.data;
      const currentlyPlaying = {
        id: item.id,
        name: item.name,
        artists: item.artists.map(artist => artist.name + ', '),
        image: item.album.images[0].url,
      }
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: null })
    }
  }
  return <>
    {
      token ?

        <div className='w-full h-[90px] absolute bottom-0 left-0 flex items-center justify-between bg-black'>

          <div className='h-full w-[250px]'>
            <CurrentlyPlaying />
          </div>

          <div className='h-full w-[600px] flex flex-col items-center justify-center'>
            <div className='flex items-center justify-between gap-5'>
              <IoShuffle className='text-[18px] cursor-pointer' />
              <AiFillStepBackward className='text-[28px] cursor-pointer' onClick={() => { changeTrack('previous') }} />
              {
                playerState ? <FaCirclePause className='text-[34px] hover:scale-110 cursor-pointer' /> : <AiFillPlayCircle className='text-[34px] hover:scale-110 cursor-pointer' />
              }
              <AiFillStepForward className='text-[28px] cursor-pointer' onClick={() => { changeTrack('next') }} />
              <SlLoop className='text-[18px] cursor-pointer' />
            </div>
            <div className='w-full flex items-center justify-center gap-3 my-2'>
              <p className='text-xs select-none'>00:00</p>
              <input type="range" id="song-range" className='w-full rounded-full' min={0} />
              <p className='text-xs select-none'>00:00</p>
            </div>
          </div>

          <div className='flex items-center justify-center w-[170px] h-full gap-2'>
            <BiSolidVolumeFull className='text-[25px]' />
            <input type="range" id="volume-range" className='w-full rounded-full' />
          </div>
        </div>

        :

        <div id='control-bar' className='w-full h-[70px] absolute bottom-0 left-0 flex items-center justify-between p-4'>
          <div>
            <h3 className='uppercase text-left font-sm text-white'>preview of spotify</h3>
            <h2 className='text-white font-sm font-semibold '>Sign up to get unlimited and podcasts with occasional ads. No credit card needed.</h2>
          </div>
          <Button id='button' button='Sign up for free' buttonTheme='WHITE' />
        </div>
    }
  </>
}

export default Controls