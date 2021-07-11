import { useContext } from "react"

import CitiesWeatherContext from "../context/CitiesWeatherContext"

const useCities = () => useContext(CitiesWeatherContext)

export default useCities
