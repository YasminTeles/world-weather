import {
  memo,
  useCallback,
} from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps"

import { GEO_URL } from "../constants"
import useCoordinates from "../hooks/useCoordinates"

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
    () => {
      onNewCoordinates(35, 139)
    },
    [onNewCoordinates],
  )

  return (
    <ComposableMap
      data-tip=""
    >
      <Geographies
        geography={GEO_URL}
      >
        {
        ({ geographies }) => geographies.map(
          (geo, proj) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              projection={proj}
              style={STYLE}
              onClick={onClick}
            />
          ),
        )
      }
      </Geographies>
    </ComposableMap>
  )
}

export default memo(WorldMap)
