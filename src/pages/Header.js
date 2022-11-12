import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <NavLink to="/" activeStyle={{color: 'green'}} end> Home </NavLink> | 
      <NavLink to="/login" activeStyle={{color: 'green'}}> Login </NavLink>
    </div>
  )
}
