import { ceil } from "lodash"

const CONVERSION = 273.15
const PRECISION = 1

const converterKelvinToCelsius = (kelvin) => ceil(kelvin - CONVERSION, PRECISION)

export default converterKelvinToCelsius
