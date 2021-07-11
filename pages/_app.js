import "../styles/globals.css"

import PropTypes from "prop-types"

import CitiesWeatherProvider from "../context/providers/CitiesWeatherProvider"

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <CitiesWeatherProvider>
      <Component {...pageProps} />
    </CitiesWeatherProvider>
  )
}

MyApp.propTypes = {
  // Component: PropTypes.element.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
