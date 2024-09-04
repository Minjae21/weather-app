// Weather Forecasting Application
// Developed by Minjae Jang 9/4/2024

import TopButton from "./components/TopButton"
import Input from "./components/Input"
import TimeAndLocation from "./components/TimeAndLocation"
import TempAndDetail from "./components/TempAndDetail"
import Forecast from "./components/Forecast"
import getFormattedWeatherData from "./services/weatherService"
import { useState } from "react"
import { useEffect } from "react"

const App = () => {

  const [query, setQuery] = useState({q: 'champaign'})
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    try {
        const data = await getFormattedWeatherData({ ...query, units });
        setWeather(data);
    } catch (error) {
        console.error("Failed to fetch weather data:", error);
    }
};

  useEffect(() => { getWeather();
  }, [query, units]);

  const formatBg = () => {
    if (!weather) return 'from-cyan-600 to-blue-700'
    const threshold = units === 'metric' ? 25 : 40
    if (weather.temp <= threshold) return 'from-cyan-600 to-blue-700'
    return 'from-yellow-600 to-orange-700'
  }

  return (
    <div className = {`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl
      shadow-gray-400 ${formatBg()}`}>
      <TopButton setQuery = {setQuery} />
      <Input setQuery = {setQuery} setUnits = {setUnits} />

      { weather && (
        <>
      <TimeAndLocation weather = {weather} />
      <TempAndDetail weather = {weather} />
      <Forecast title = '3 hours step forecast' data = {weather.hourly} />
      <Forecast title = 'daily forecast' data = {weather.daily} />
        </>
      )}
    </div>
  )
}

export default App
