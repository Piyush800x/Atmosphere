import React from 'react'
import Summary from '../components/Summary'
import DailyForecastCard from '../components/DailyForecastCard'
import WeeklyForecastCard from '../components/WeeklyForecastCard'
import SearchBar from '../components/SearchBar'
import Title from '../components/Title'


const HomePage = () => {
  return (
    // <div className='w-screen h-screen' style={{'backgroundImage': 'url(/bg/Sunny.webp)', 'backgroundSize': 'cover', 'backgroundPosition': 'center'}}>
    //   HOME
    //   <Summary/>
    // </div>
    <div className='relative w-screen h-screen bg-sunny_bg bg-center bg-cover'>
      {/* <h1 className='font-inter text-white'>Hello New Font</h1> */}
      <Title/>
      <SearchBar/>
      <Summary/>
      <DailyForecastCard/>
      <WeeklyForecastCard/>
      {/* <Dummy/> */}
    </div>
  )
}

export default HomePage
