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
    await getFormattedWeatherData({ ...query, units }).then( data => {
      setWeather(data)
    });
    console.log(data);
  };

  useEffect(() => { getWeather();
  }, [query, units]);

  getWeather();

  return (
    <div className = "mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButton />
      <Input />

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
