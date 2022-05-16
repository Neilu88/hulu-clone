import Head from "next/head"
import Header from "../components/Header"
import Categories from "../components/Categories"
import Videos from "../components/Videos"
import requests from "../utils/requests"

export default function Home({ videos }) {
  return (
    <div>
      <Head>
        <title>Neilu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Categories />
      <Videos videos={videos} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre

  const response = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  )
  const data = await response.json()

  return {
    props: {
      videos: data.results,
    },
  }
}
