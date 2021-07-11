import { memo } from "react"

import Head from "next/head"

import Cities from "../components/Cities"
import SearchButton from "../components/SearchButton"
import WorldMap from "../components/WorldMap"

const Home = () => (
  <div>
    <Head>
      <title>Word Weather</title>
    </Head>

    <main>
      <WorldMap />
      <SearchButton />
      <Cities />
    </main>
  </div>
)

export default memo(Home)
