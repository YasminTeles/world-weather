import { memo } from "react"

import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PropTypes from "prop-types"

const useStyle = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}))

const City = ({ name, temperatureMax, temperatureMin }) => {
  const classes = useStyle()

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{name}</Typography>
      </AccordionSummary>

      <AccordionDetails classes={classes}>
        <Typography>
          {`Maximum temperature: ${temperatureMax}°C`}
        </Typography>

        <Typography>
          {`Minimum temperature: ${temperatureMin}°C`}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

City.propTypes = {
  name: PropTypes.string.isRequired,
  temperatureMax: PropTypes.number.isRequired,
  temperatureMin: PropTypes.number.isRequired,
}

export default memo(City)
