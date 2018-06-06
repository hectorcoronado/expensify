import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact>dashboard</NavLink>
    <NavLink to='/create' activeClassName='is-active'>create</NavLink>
    <NavLink to='/edit' activeClassName='is-active'>edit</NavLink>
    <NavLink to='/help' activeClassName='is-active'>help</NavLink>
  </header>
)

export default Header
