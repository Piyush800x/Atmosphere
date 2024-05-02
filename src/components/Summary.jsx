import React from 'react'
import { invoke } from "@tauri-apps/api/tauri";

const Summary = () => {
    const getData = async () => {
        let data = await invoke("fetch_curr_details", {location: "kolkata"});
        console.log(data);
        
    }

    const fetchHourlyForecast = async () => {
        let data = await invoke("fetch_hourly_forecast", {location: "kolkata"});
        console.log(data);
    }

    getData()
    fetchHourlyForecast()

  return (
    <div>
     SummaryBar   
    </div>
  )
}

export default Summary
