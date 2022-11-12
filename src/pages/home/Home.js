import React from 'react'
import { Link } from 'react-router-dom'
import { SHome } from './Styles'

const Home = () => {
  return (
    <SHome>
        <h1>Home do site</h1>
        <h2>Veja as profissionais: </h2>
        <ul>
          <li><Link to="professionals/gustavo"> Gustavao do CSS </Link></li>
          <li><Link to="professionals/zoz">Zoz do Pitoon </Link></li>
        </ul>
    </SHome>
  )
}

export default Home