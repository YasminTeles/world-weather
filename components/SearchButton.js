import { memo, useCallback } from "react"

import Button from "@material-ui/core/Button"

import useCities from "../hooks/useCities"
import weatherFetch from "../services/openWeatherMap"

const SearchButton = () => {
  const { onNewCities } = useCities()

  return (
    <Button
      variant="contained"
      onClick={useCallback(
        async () => {
          const cities = await weatherFetch(35, 139)
          onNewCities(cities)
        },
        [onNewCities],
      )}
    >
      Search
    </Button>
  )
}

export default memo(SearchButton)
