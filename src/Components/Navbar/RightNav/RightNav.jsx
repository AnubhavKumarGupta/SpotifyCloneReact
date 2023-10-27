import Navlink from './../NavLink/NavLink'
import {FaGripLinesVertical} from 'react-icons/fa'
import Button from './../../Buttons/Button'

const RightNav = () => {
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
        <div className='flex items-center justify-between'>
            <ul className='flex items-center justify-between'>
                {
                    navLinks?.map(link => <li key={link.label} className='mx-2'><Navlink label={link.label} /></li>)
                }
            </ul>
            <FaGripLinesVertical className='text-2xl'/>
            <div className='flex items-center justify-between'>
                <h2 className='text-md font-bold text-gray-400 cursor-pointer hover:text-white hover:scale-105 mx-6'>Sign up</h2>
                <Button button='Login' buttonTheme='WHITE'/>
            </div>
        </div>
    )
}

export default RightNav