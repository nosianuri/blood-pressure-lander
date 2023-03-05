import React from 'react'
import { Helmet } from 'react-helmet'
import Mainbody from '../Mainbody/Mainbody'

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blood Pressure 911</title>
      </Helmet>
      <Mainbody />
    </div>
  )
}

export default Home