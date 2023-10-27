import LeftNav from './LeftNav/LeftNav'
import RightNav from './RightNav/RightNav'
const Navbar = () => {
  return (
    <div className='w-full h-[75px] bg-[#101010] flex items-center justify-between p-4'>
      <LeftNav/>             
      <RightNav/>      
    </div>
  )
}

export default Navbar