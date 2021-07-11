import {
  memo,
  useCallback,
  useMemo,
} from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps"

import { GEO_URL } from "../constants"
import useCoordinates from "../hooks/useCoordinates"
import {
  getCoordinatesCapital,
  getCountryOfSouthAmerica,
} from "../utils"
import Markers from "./Markers"

const STYLE = {
  default: {
    fill: "#D6D6DA",
    outline: "none",
  },
  hover: {
    fill: "#303f9f",
    outline: "none",
  },
  pressed: {
    fill: "#cc33ff",
    outline: "none",
  },
}

const WorldMap = () => {
  const { onNewCoordinates } = useCoordinates()

  const onClick = useCallback(
    (country) => () => {
      const { latitude, longitude } = getCoordinatesCapital(country.NAME)

      onNewCoordinates(latitude, longitude)
    },
    [onNewCoordinates],
  )

  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={useMemo(
        () => ({
          rotate: [58, 20, 0],
          scale: 400,
        }),
        [],
      )}
    >
      <Geographies
        geography={GEO_URL}
      >
        {
        ({ geographies }) => geographies
          .filter(getCountryOfSouthAmerica)
          .map(
            (geo, proj) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                projection={proj}
                style={STYLE}
                onClick={onClick(geo.properties)}
              />
            ),
          )
      }
      </Geographies>

      <Markers />
    </ComposableMap>
  )
}

export default memo(WorldMap)
