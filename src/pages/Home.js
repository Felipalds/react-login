import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
        <h1>Home do site</h1>
        <h2>Veja as profissionais: </h2>
        <ul>
          <li><Link to="professionals/gustavo"> Gustavao do CSS </Link></li>
          <li><Link to="professionals/zoz">Zoz do Pitoon </Link></li>
        </ul>
    </div>
  )
}
