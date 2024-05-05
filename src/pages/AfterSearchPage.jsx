import React from 'react'
import Summary from '../components/SummaryCard'
import DailyForecastCard from '../components/DailyForecastCard'
import WeeklyForecastCard from '../components/WeeklyForecastCard'
import Title from '../components/Title'
import { useLocation } from 'react-router-dom'

const AfterSearchPage = () => {
  return (
    <div>
      <Title/>
      <Summary/>
      <DailyForecastCard/>
      <WeeklyForecastCard/>
    </div>
  )
}

export default AfterSearchPage
