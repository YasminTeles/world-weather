import {
  useMemo,
  useState,
  memo,
} from "react"

import CitiesWeatherContext from "../CitiesWeatherContext"
import parserCities from "../utils/parserCities"

const CitiesWeatherProvider = ({ children }) => {
  const [cities, setCities] = useState([])

  const onNewCities = (citiesFound) => {
    const newCities = parserCities(citiesFound)
    setCities(newCities)
  }

  return (
    <CitiesWeatherContext.Provider
      value={useMemo(
        () => ({
          cities,
          onNewCities,
        }),
        [cities],
      )}
    >
      {children}
    </CitiesWeatherContext.Provider>
  )
}

export default memo(CitiesWeatherProvider)
