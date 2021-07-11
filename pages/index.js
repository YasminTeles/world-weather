import { memo } from "react"

import Head from "next/head"

import MainGrid from "../components/Grids/MainGrid"
import CitySearchPreview from "../components/preview/CitySearchPreview"
import ResultSearchPreview from "../components/preview/ResultSearchPreview"

const Home = () => (
  <>
    <Head>
      <title>Word Weather</title>
    </Head>

    <MainGrid>
      <CitySearchPreview />

      <ResultSearchPreview />
    </MainGrid>
  </>
)

export default memo(Home)
