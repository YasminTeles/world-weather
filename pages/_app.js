import "../styles/globals.css"

import PropTypes from "prop-types"

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.propTypes = {
  // Component: PropTypes.element.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
