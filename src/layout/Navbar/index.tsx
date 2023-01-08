import { Link } from 'react-router-dom'
import { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="titulo">Logo</div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/Random-Users">Random Users</Link>
              </li>
              <li>
                <Link to="/HTTP-Cats">HTTP Cats</Link>
              </li>
              <li>
                <Link to="/Random-Dogs">Random Dogs</Link>
              </li>
              <li>
                <Link to="/Clients">Clientes</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
