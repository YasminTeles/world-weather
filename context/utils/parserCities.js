import { transform } from "lodash"

import converterKelvinToCelsius from "./converterKelvinToCelsius"

const parserCities = (cities) => transform(
  cities,
  (accumulator, value) => {
    accumulator.push({
      name: value.name,
      temperatureMin: converterKelvinToCelsius(value.main.temp_min),
      temperatureMax: converterKelvinToCelsius(value.main.temp_max),
    })
    return accumulator
  },
  [],
)

export default parserCities
