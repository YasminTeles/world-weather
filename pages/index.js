import Head from "next/head"

import Cities from "../components/Cities"
import SearchButton from "../components/SearchButton"
import WorldMap from "../components/WorldMap"

export default function Home() {
  return (
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
}
