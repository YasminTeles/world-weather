import { memo } from "react"

import { makeStyles } from "@material-ui/core/styles"

import useCities from "../hooks/useCities"
import City from "./City"

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "8px",
  },
}))

const Cities = () => {
  const { cities } = useCities()
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {cities.map((city) => (
        <City
          key={city.name}
          name={city.name}
          temperatureMax={city.temperatureMax}
          temperatureMin={city.temperatureMin}
        />
      ))}
    </div>
  )
}

export default memo(Cities)
