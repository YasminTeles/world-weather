import {
  useMemo,
  useState,
  memo,
} from "react"

import CitiesWeatherContext from "../CitiesWeatherContext"
import parserCities from "../utils/parserCities"

const CitiesWeatherProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState({})
  const [cities, setCities] = useState([])

  const onNewCoordinates = (latitude, longitude) => {
    setCoordinates({
      latitude,
      longitude,
    })
  }

  const onNewCities = (citiesFound) => {
    const newCities = parserCities(citiesFound)
    setCities(newCities)
  }

  return (
    <CitiesWeatherContext.Provider
      value={useMemo(
        () => ({
          coordinates,
          onNewCoordinates,
          cities,
          onNewCities,
        }),
        [cities, coordinates],
      )}
    >
      {children}
    </CitiesWeatherContext.Provider>
  )
}

export default memo(CitiesWeatherProvider)
