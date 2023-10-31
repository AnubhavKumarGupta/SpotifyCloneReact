import CreatePlaylistReminder from './../CreatePlaylistReminder/CreatePlaylistReminder'
import Button from '../Buttons/Button'
import FilterBtns from '../FilterBtns/FilterBtns'
import LibraryItem from './LibraryItems/LibraryItem'
import { BiLibrary, BiSearchAlt2 } from 'react-icons/bi'
import { AiOutlinePlus, AiOutlineBars } from 'react-icons/ai'
import { BsGlobe } from 'react-icons/bs'
import { useContext } from 'react'
import { UserContext } from '../../Contexts/UserContext'
import './Library.css'



const Library = (props) => {
  const context = useContext(UserContext)
  return (
    <div className='w-[98%] h-[77%] m-[4px] rounded-md bg-[#121212] p-2'>
      <div>
        <div className='flex items-center justify-between px-3'>
          <h2 className='flex justify-center items-center text-gray-400 text-[18px] font-bold capitalize cursor-pointer hover:text-white '>
            <BiLibrary className='text-[25px] mr-3' /> your Library
          </h2>
          <AiOutlinePlus className='text-[25px] text-gray-400 hover:text-white cursor-pointer' />
        </div>
        {
          context.userLogin ? <div className='my-5'>
            <FilterBtns label='Playlists' />
            <FilterBtns label='Artists' />
            <FilterBtns label='Albums' />
          </div> : ' '
        }
      </div>

      {
        context.userLogin ?
          <div className='library-scroll w-full h-full overflow-y-scroll'>
            <div className='flex items-center justify-between mx-4'><BiSearchAlt2 className='text-lg text-gray-400 hover:text-white cursor-pointer' /> <h2 className='flex items-center justify-center text-md text-gray-400 hover:text-white cursor-pointer'>Recent <AiOutlineBars className='mx-1' /></h2></div>
            <div className='wrapper w-full'>
              {
                props.DUMMY_DATA.map(item => <LibraryItem coverImg={item.songImg} title={item.songName} type={item.songType} artist={item.artist} />)
              }
            </div>
          </div>
          : <>
            <CreatePlaylistReminder title='Create your first playlist' desc="It's easy we'll help you" button='Create playlist' />
            <CreatePlaylistReminder title="let's find some podcast to follow" desc="We'll keep you updated on new episodes" button='Browse podcasts' />
            <div className='px-3'>
              <p className='my-14 font-thin text-gray-400 text-xs underline pb-1'>Cookies</p>
              <Button button='English' icon={<BsGlobe className='mr-2' />} />
            </div>
          </>
      }
    </div>
  )
}

export default Library