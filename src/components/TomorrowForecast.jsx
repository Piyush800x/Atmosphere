import React from 'react'
import NewTempBar from './NewTempBar'
import PartlyCloudDay from '../assets/icons/partly_cloudy_day.svg'
import PartlyCloudNight from '../assets/icons/partly_cloudy_night.svg'

const TomorrowForecast = () => {
  return (
    <div>
      <div className='flex flex-row w-3/5 mb-2'>
            {/* Day */} 
            <h1 className='ml-4'>Today</h1>
            <img className='ml-4' src={PartlyCloudDay} width={30} height={30}/>
            {/* Low */}
            <h1 className='ml-6 mr-2'>1°C</h1>
            <NewTempBar currTemp={20} minTemp={10} maxTemp={30}/>
            {/* High */}
            <h1 className='ml-2'>12°C</h1>
        </div>
    </div>
  )
}

export default TomorrowForecast
