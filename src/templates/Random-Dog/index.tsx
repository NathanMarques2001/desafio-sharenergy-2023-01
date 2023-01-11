import './styles.css'

import Navbar from '../../layout/Navbar'

import { Component } from 'react'
import DogImage from '../../components/Dog-Image'

export class RandomDogs extends Component {
  render() {
    return (
      <>
        <Navbar />
        <DogImage/>
      </>
    )
  }
}

export default RandomDogs
