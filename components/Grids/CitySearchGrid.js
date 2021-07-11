import { memo } from "react"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  root: {
    item: { padding: 8 },
  },
}))

const CitySearchGrid = ({ children }) => {
  const classes = useStyles()

  return (
    <Grid
      item
      xs={11}
      classes={classes}
    >
      {children}
    </Grid>
  )
}

export default memo(CitySearchGrid)
