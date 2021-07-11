import { memo } from "react"

import useCities from "../hooks/useCities"
import City from "./City"

const Cities = () => {
  const { cities } = useCities()

  return (
    <>
      {cities.map((city) => (
        <City
          key={city.name}
          name={city.name}
          temperatureMax={city.temperatureMax}
          temperatureMin={city.temperatureMin}
        />
      ))}
    </>
  )
}

export default memo(Cities)
