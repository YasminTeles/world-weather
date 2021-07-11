import { memo, useCallback } from "react"

import Button from "@material-ui/core/Button"

import weatherFetch from "../services/openWeatherMap"

const SearchButton = () => (
  <Button
    variant="contained"
    onClick={useCallback(
      async () => {
        const list = await weatherFetch(35, 139)
        console.log({ list })
      },
      [],
    )}
  >
    Search
  </Button>
)

export default memo(SearchButton)
