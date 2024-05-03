import React from 'react'
import Summary from '../components/Summary'
import DailyForecast from '../components/DailyForecast'
import Dummy from '../components/Dummy'

const HomePage = () => {
  return (
    // <div className='w-screen h-screen' style={{'backgroundImage': 'url(/bg/Sunny.webp)', 'backgroundSize': 'cover', 'backgroundPosition': 'center'}}>
    //   HOME
    //   <Summary/>
    // </div>
    <div className='relative w-screen h-screen bg-sunny_bg bg-center bg-cover'>
      {/* <h1 className='font-inter text-white'>Hello New Font</h1> */}
      <Summary/>
      <DailyForecast/>
      {/* <Dummy/> */}
    </div>
  )
}

export default HomePage
