import { MARKERS } from "../constants"

const getCapital = (country) => MARKERS.filter((marker) => marker.country === country)[0]

const getCoordinates = (capital) => {
  const { coordinates } = capital

  return {
    latitude: coordinates[1],
    longitude: coordinates[0],
  }
}

export const getCoordinatesCapital = (countryName) => {
  const capital = getCapital(countryName)

  return getCoordinates(capital)
}

export const getCountryOfSouthAmerica = (region) => region.properties.CONTINENT === "South America"
