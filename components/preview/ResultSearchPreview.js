import { memo } from "react"

import { makeStyles } from "@material-ui/core/styles"
import { isEmpty } from "lodash"

import useCities from "../../hooks/useCities"
import Cities from "../Cities"
import ResultSearchGrid from "../Grids/ResultSearchGrid"

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "16px",
  },
}))

const ResultSearchPreview = () => {
  const { cities } = useCities()
  const classes = useStyles()

  return (
    <ResultSearchGrid>
      {!isEmpty(cities) && (
        <div className={classes.root}>
          <h3>The cities weather</h3>
          <Cities />
        </div>
      )}
    </ResultSearchGrid>
  )
}

export default memo(ResultSearchPreview)
