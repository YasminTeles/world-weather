import {
  useMemo,
  useState,
  useCallback,
  memo,
} from "react"

import CitiesWeatherContext from "../CitiesWeatherContext"
import parserCities from "../utils/parserCities"

const CitiesWeatherProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState({})
  const [cities, setCities] = useState([])

  const onNewCoordinates = useCallback(
    (latitude, longitude) => {
      setCoordinates({
        latitude,
        longitude,
      })
    },
    [],
  )

  const onNewCities = useCallback(
    (citiesFound) => {
      const newCities = parserCities(citiesFound)
      setCities(newCities)
    },
    [],
  )

  return (
    <CitiesWeatherContext.Provider
      value={useMemo(
        () => ({
          coordinates,
          onNewCoordinates,
          cities,
          onNewCities,
        }),
        [
          cities,
          coordinates,
          onNewCoordinates,
          onNewCities,
        ],
      )}
    >
      {children}
    </CitiesWeatherContext.Provider>
  )
}

export default memo(CitiesWeatherProvider)
