import './styles.css'

import Navbar from '../../layout/Navbar'

import { Component } from 'react'

export class HTTPCats extends Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>HTTP Cats</h1>
      </>
    )
  }
}

export default HTTPCats
