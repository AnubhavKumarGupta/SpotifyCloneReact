import { BiLibrary } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import CreatePlaylistReminder from './../CreatePlaylistReminder/CreatePlaylistReminder'
import Button from '../Buttons/Button'

const Library = (props) => {
  return (
    <div className='w-[98%] h-[77%] m-[4px] rounded-md bg-[#121212] p-2'>
      <div className='flex items-center justify-between px-3'>
        <h2 className='flex justify-center items-center text-gray-400 text-[18px] font-bold capitalize cursor-pointer hover:text-white '>
          <BiLibrary className='text-[25px] mr-3' /> your Library
        </h2>
        <AiOutlinePlus className='text-[25px] text-gray-400 hover:text-white cursor-pointer' />
      </div>
      <CreatePlaylistReminder title='Create your first playlist' desc="It's easy we'll help you" button='Create playlist' />
      <CreatePlaylistReminder title="let's find some podcast to follow" desc="We'll keep you updated on new episodes" button='Browse podcasts' />
      <div className='px-3'>
        <p className='my-14 font-thin text-gray-400 text-xs underline pb-1'>Cookies</p>
        <Button button='English' icon={<BsGlobe className='mr-2' />} />
      </div>
    </div>
  )
}

export default Library