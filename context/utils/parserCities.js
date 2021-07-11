import { transform } from "lodash"

const parserCities = (cities) => transform(
  cities,
  (accumulator, value) => {
    accumulator.push({
      name: value.name,
      temperatureMin: value.main.temp_min,
      temperatureMax: value.main.temp_max,
    })
    return accumulator
  },
  [],
)

export default parserCities
