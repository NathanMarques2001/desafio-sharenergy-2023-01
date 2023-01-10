import './styles.css'

import Navbar from '../../layout/Navbar'

import { Component } from 'react'

export class RandomDogs extends Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Random Dogs</h1>
      </>
    )
  }
}

export default RandomDogs
