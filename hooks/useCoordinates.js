import { useContextSelector } from "use-context-selector"

import CitiesWeatherContext from "../context/CitiesWeatherContext"

const useCoordinates = () => {
  const coordinates = useContextSelector(
    CitiesWeatherContext,
    (citiesWeather) => citiesWeather.coordinates,
  )
  const onNewCoordinates = useContextSelector(
    CitiesWeatherContext,
    (citiesWeather) => citiesWeather.onNewCoordinates,
  )

  return {
    coordinates,
    onNewCoordinates,
  }
}

export default useCoordinates
