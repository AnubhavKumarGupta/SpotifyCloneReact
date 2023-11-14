import './Controls.css'
import Button from './../../Components/Buttons/Button'
import { AiFillStepForward, AiFillStepBackward, AiFillPlayCircle } from 'react-icons/ai'
import { BiSolidVolumeFull } from 'react-icons/bi'
import CurrentlyPlaying from '../../Components/CurrentlyPlaying/CurrentlyPlaying'
import { useStateProvider } from './../../Store/UserContext'

const Controls = () => {

  const [{ token }] = useStateProvider();

  return <>
    {
      token ?

        <div className='w-full h-[90px] absolute bottom-0 left-0 flex items-center justify-between bg-black'>

          <div className='h-full w-[250px]'>
            <CurrentlyPlaying />
          </div>

          <div className='h-full w-[600px] flex flex-col items-center justify-center'>
            <div className='flex items-center justify-between gap-5'>
              <AiFillStepBackward className='text-[28px]' />
              <AiFillPlayCircle className='text-[28px] hover:scale-110' />
              <AiFillStepForward className='text-[28px]' />
            </div>
            <div className='w-full flex items-center justify-center gap-3 my-2'>
              <p className='text-xs select-none'>00:00</p>
              <input type="range" id="song-range" className='w-full rounded-full' />
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