import './Controls.css'
import Button from './../../Components/Buttons/Button'

const Controls = () => {
  return (
    <div id='control-bar' className='w-full h-[70px] absolute bottom-0 left-0 flex items-center justify-between p-4'>
      <div>
        <h3 className='uppercase text-left font-sm text-white'>preview of spotify</h3>
        <h2 className='text-white font-sm font-semibold '>Sign up to get unlimited and podcasts with occasional ads. No credit card needed.</h2>
      </div>
      <Button id='button' button='Sign up for free' buttonTheme='WHITE'/>
    </div>
  )
}

export default Controls