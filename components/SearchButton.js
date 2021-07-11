import { memo, useCallback } from "react"

import Button from "@material-ui/core/Button"
import { isEmpty } from "lodash"

import useCities from "../hooks/useCities"
import weatherFetch from "../services/openWeatherMap"

const SearchButton = () => {
  const { coordinates, onNewCities } = useCities()

  return (
    <Button
      variant="contained"
      color="primary"
      disabled={isEmpty(coordinates)}
      onClick={useCallback(
        async () => {
          const cities = await weatherFetch(coordinates)
          onNewCities(cities)
        },
        [coordinates, onNewCities],
      )}
    >
      Search
    </Button>
  )
}

export default memo(SearchButton)
