import { memo } from "react"

import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}))

const MainGrid = ({ children }) => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        direction="column"
      >
        {children}
      </Grid>
    </main>
  )
}

export default memo(MainGrid)
