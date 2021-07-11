import { useContextSelector } from "use-context-selector"

import CitiesWeatherContext from "../context/CitiesWeatherContext"

const useCities = () => {
  const cities = useContextSelector(
    CitiesWeatherContext,
    (citiesWeather) => citiesWeather.cities,
  )

  const onNewCities = useContextSelector(
    CitiesWeatherContext,
    (citiesWeather) => citiesWeather.onNewCities,
  )

  return {
    cities,
    onNewCities,
  }
}

export default useCities
