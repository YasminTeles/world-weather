import { memo } from "react"

import Head from "next/head"

import Cities from "../components/Cities"
import CitySearchGrid from "../components/Grids/CitySearchGrid"
import MainGrid from "../components/Grids/MainGrid"
import ResultSearchGrid from "../components/Grids/ResultSearchGrid"
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

      <ResultSearchGrid>
        <Cities />
      </ResultSearchGrid>
    </MainGrid>
  </>
)

export default memo(Home)
