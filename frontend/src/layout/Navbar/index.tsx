import './styles.css'

import { Link } from 'react-router-dom'
import { Component } from 'react'
import Logo from '../../images/Logo.png'

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <img src={Logo} alt="" className='Navbar-Logo'/>
          <div className="links">
            <ul>
              <li>
                <Link to="/Random-Users" className='Nav-link'>Random Users</Link>
              </li>
              <li>
                <Link to="/HTTP-Cats" className='Nav-link'>HTTP Cats</Link>
              </li>
              <li>
                <Link to="/Random-Dogs" className='Nav-link'>Random Dogs</Link>
              </li>
              <li>
                <Link to="/Clients" className='Nav-link'>Clientes</Link>
              </li>
              <li>
                <Link to="/" className='Nav-link'>Sair</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
