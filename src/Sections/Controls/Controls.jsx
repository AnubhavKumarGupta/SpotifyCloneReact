import './Controls.css'
import Button from './../../Components/Buttons/Button'
import CurrentlyPlaying from '../../Components/CurrentlyPlaying/CurrentlyPlaying'
import { AiFillStepForward, AiFillStepBackward, AiFillPlayCircle } from 'react-icons/ai'
import { useStateProvider } from './../../Store/UserContext'
import { BiSolidVolumeFull } from 'react-icons/bi'
import { FaCirclePause } from "react-icons/fa6";
import { IoShuffle } from "react-icons/io5";
import { SlLoop } from "react-icons/sl";
import { reducerCases } from '../../Store/constants'

const Controls = () => {

  const [{ token, playerState }, dispatch] = useStateProvider();

  const handlePlayerState = () => {
    if(playerState){
      dispatch({type : reducerCases.SET_PLAYER_STATE, playerState : false})
    }else{
      dispatch({type : reducerCases.SET_PLAYER_STATE, playerState : true})
    }
  }

  //should work on the pause button
  const handlePause =  async  () => {
    const response = await fetch('https://api.spotify.com/v1/me/player/pause',{
      method : 'PUT',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ device: [device_id] })
    })
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
              <AiFillStepBackward className='text-[28px] cursor-pointer'/>
              {
                playerState ? <FaCirclePause className='text-[34px] hover:scale-110 cursor-pointer' onClick={handlePlayerState}/> : <AiFillPlayCircle className='text-[34px] hover:scale-110 cursor-pointer' onClick={handlePlayerState}/>
              }
              <AiFillStepForward className='text-[28px] cursor-pointer'/>
              <SlLoop className='text-[18px] cursor-pointer' />
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