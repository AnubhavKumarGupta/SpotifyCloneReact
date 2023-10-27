import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const LeftNav = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className="slider mx-2 rounded-full px-2 py-3 hover:bg-[#242424]">
                <AiOutlineLeft className='text-lg mx-1 ' />
            </div>
            <div className="slider mx-2 rounded-full px-2 py-3 hover:bg-[#242424]">
                <AiOutlineRight className='text-lg mx-1 ' />
            </div>
        </div>
    )
}

export default LeftNav