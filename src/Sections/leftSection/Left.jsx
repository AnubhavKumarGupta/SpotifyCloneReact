import TopNav from '../../Components/Navbar/TopNav'
import Library from '../../Components/Library/Library'

const Left= (props) => {
  return (
    <div className='w-[24%] h-screen'>
        <TopNav />
        <Library DUMMY_DATA={props.DUMMY_DATA}/>
    </div>
  )
}

export default Left