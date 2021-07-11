import Head from "next/head"

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
      </main>
    </div>
  )
}
