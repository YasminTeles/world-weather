import { memo } from "react"

import Head from "next/head"

import CitySearchGrid from "../components/Grids/CitySearchGrid"
import MainGrid from "../components/Grids/MainGrid"
import ResultSearchPreview from "../components/preview/ResultSearchPreview"
import SearchButton from "../components/SearchButton"
import WorldMap from "../components/WorldMap"

const Home = () => (
  <>
    <Head>
      <title>Word Weather</title>
    </Head>

    <MainGrid>
      <CitySearchGrid>
        <WorldMap />
        <SearchButton />
      </CitySearchGrid>

      <ResultSearchPreview />
    </MainGrid>
  </>
)

export default memo(Home)
