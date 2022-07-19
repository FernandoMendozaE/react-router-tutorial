// * Importando módulo react-router-dom
// ? NavLink nos permite crear un enlace que nos permite navegar entre las diferentes rutas
import { NavLink } from 'react-router-dom'

import './navbar.css' // * importando css NavBar

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">
            {' '}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={({ isActive }) => (isActive ? 'active' : 'blue')}>
            {' '}
            users
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
