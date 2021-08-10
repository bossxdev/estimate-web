import React from 'react'
import Head from 'next/head'
import IndexPage from '../src/components/IndexPage'

const Header = () => {
  return (
    <>
      <Head>
        <title>Estimate-Extreme</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}

export default function Home() {
  return (
    <>
      {Header()}
      <IndexPage />
    </>
  )
}
