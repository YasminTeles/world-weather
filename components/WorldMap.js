import { memo } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps"

import { GEO_URL } from "../constants"

const STYLE = {
  default: {
    fill: "#D6D6DA",
    outline: "none",
  },
  hover: {
    fill: "#F53",
    outline: "none",
  },
  pressed: {
    fill: "#cc33ff",
    outline: "none",
  },
}

const WorldMap = () => (
  <ComposableMap data-tip="">
    <Geographies
      geography={GEO_URL}
    >
      {
        ({ geographies }) => geographies.map(
          (geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={STYLE}
            />
          ),
        )
      }
    </Geographies>
  </ComposableMap>
)

export default memo(WorldMap)
