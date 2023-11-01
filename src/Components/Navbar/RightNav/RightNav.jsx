import { UserContext } from './../../../Contexts/UserContext'
import { FaGripLinesVertical } from 'react-icons/fa'
import {MdDownloading} from 'react-icons/md'
import {AiOutlineBell} from 'react-icons/ai'
import { useContext } from 'react'
import Button from './../../Buttons/Button'
import Navlink from './../NavLink/NavLink'

const RightNav = () => {
    const context = useContext(UserContext)
    const navLinks = [
        {
            label: 'Premium',
        },
        {
            label: 'Support',
        },
        {
            label: 'Download',
        },
    ]
    return (
        <>
            {
                context.userLogin ?
                    <div className='flex items-center justify-center gap-5'>
                        <Button buttonTheme='WHITE' button='explore premium'/>
                        <Button buttonTheme='DARK' button='install app' icon={<MdDownloading className='text-lg'/>}/>
                        <AiOutlineBell className='text-lg rounded-full bg-[#0F0F0F] cursor-pointer'/>
                        <img src='https://via.placeholder.com/250' className='w-[35px] h-[35px] rounded-full select-none' alt="profile-img" />
                    </div>
                    :
                    <div className='flex items-center justify-between'>
                        <ul className='flex items-center justify-between'>
                            {
                                navLinks?.map(link => <li key={link.label} className='mx-2'><Navlink label={link.label} /></li>)
                            }
                        </ul>
                        <FaGripLinesVertical className='text-2xl' />
                        <div className='flex items-center justify-between'>
                            <h2 className='text-md font-bold text-gray-400 cursor-pointer hover:text-white hover:scale-105 mx-6'>Sign up</h2>
                            <Button button='Login' buttonTheme='WHITE' />
                        </div>
                    </div>
            }
        </>
    )
}

export default RightNav