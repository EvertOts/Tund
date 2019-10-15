import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    <Head>
      <title>Evert Ots</title>
    </Head>

    <Nav />

    <div className='hero'>
      <h1 className='title'>Evert Ots</h1>
      <p className='description'>
        Ma ei tea mida ma teen.
      </p>
      </div>
  </div>
)

export default Home
