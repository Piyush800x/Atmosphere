import React, { useEffect, useState } from 'react'
import Summary from '../components/SummaryCard'
import DailyForecastCard from '../components/DailyForecastCard'
import WeeklyForecastCard from '../components/WeeklyForecastCard'
import SearchBar from '../components/SearchBar'
import Title from '../components/Title'
import { useLocation } from 'react-router-dom'
import { invoke } from "@tauri-apps/api/tauri";
import SearchIcon from '../assets/icons/search_icon.svg'

const HomePage = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState();

  // useEffect(() => {
  //   fetchData()
  // }, [searchTerm])

  // const fetchData = async () => {
  //   console.log(`FetchData called`)
  //   console.log(`searchTerm ${searchTerm}`)
  //   let res = await invoke('fetch_curr_details', {location: `${searchTerm}`});
  //   console.log(res)
  //   setData(res);
  //   console.log(`temp: ${data["temperature"]}`)
  // }

  
  // const handleSearchChnage = (event) => {
  //     setSearchTerm(event.target.value);
  // }

  // const handleSearch = async () => {
  //     console.log(`Search: ${searchTerm}`);
  //     fetchData();
  // }

  return (

    <div className='relative w-screen h-screen bg-sunny_bg bg-center bg-cover'>
      {/* <h1 className='font-inter text-white'>Hello New Font</h1> */}
      <Title/>
      {/* SearchBar */}
      {/* <div className='font-cabin text-white absolute top-5 right-14 mb-2'>
          <div className='flex flex-row'>
              <div className='flex flex-row '>
                  <input className='px-3 py-2 w-48 border-none outline-none bg-white bg-opacity-20 border-gray-300 rounded-2xl transition-all duration-100 ease-in-out' 
                      type="text" 
                      placeholder='Search.' 
                      value={searchTerm}
                      onChange={handleSearchChnage}
                      />
                  <button onClick={handleSearch} className='-ml-8 '><span><img src={SearchIcon} width={20} height={20}/></span></button>
              </div>
          </div>
      </div> */}
      <Summary/>
      <DailyForecastCard/>
      <WeeklyForecastCard/>
      {/* <Dummy/> */}
    </div>
  )
}

export default HomePage
