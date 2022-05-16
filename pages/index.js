import Head from "next/head"
import Image from "next/image"

import Header from "../components/Header"
import Categories from "../components/Categories"
import Videos from "../components/Videos"
import requests from "../utils/requests"

export default function Home() {
  //console.log(props)
  console.log("h")
  return (
    <div>
      <Head>
        <title>My page title</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Categories />
      <Videos />
    </div>
  )
}
