import { memo } from "react"

import CitySearchGrid from "../Grids/CitySearchGrid"
import SearchButton from "../SearchButton"
import WorldMap from "../WorldMap"

const STYLE = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "16px",
}

const CitySearchPreview = () => (
  <CitySearchGrid>
    <div style={STYLE}>
      <h2>Choose a region to find the temperature</h2>
      <WorldMap />
      <SearchButton />
    </div>
  </CitySearchGrid>
)

export default memo(CitySearchPreview)
