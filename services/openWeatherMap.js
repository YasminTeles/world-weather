import axios from "axios"
import { get } from "lodash"

import {
  OPEN_WEATHER_MAP_URL,
  CLOSEST_CITIES,
  APPID,
} from "../constants"

const weatherFetch = ({ latitude, longitude }) => axios
  .get(OPEN_WEATHER_MAP_URL, {
    params: {
      lat: latitude,
      lon: longitude,
      cnt: CLOSEST_CITIES,
      APPID,
    },
  })
  .then((response) => {
    const list = get(response, "data.list", [])
    return list
  })
  .catch(() => [])

export default weatherFetch
