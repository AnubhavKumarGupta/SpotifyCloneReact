import React from 'react'
import LeftSection from '../../Sections/LeftSection'
import RightSection from '../../Sections/RightSection'
import Controls from './../../Sections/Controls/Controls'
const SpotifyHome = () => {
  return (
    <div className='w-full h-full flex justify-between'>
      <LeftSection/>
      <RightSection/>
      <Controls/>
    </div>
  )
}

export default SpotifyHome