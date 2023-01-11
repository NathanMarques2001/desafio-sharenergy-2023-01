import './styles.css'

import Navbar from '../../layout/Navbar'

import { Component } from 'react'
import DogImage from '../../components/Dog-Image'

export class RandomDogs extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="Container-RandomDogs">
          <main className="Content-RandomDogs">
            <p className="RandomDogs-Text">
            Clique no botão abaixo para gerar uma foto ou GIF aleatório de um cachorrinho.
            </p>
            <button className='Button-RandomDogs'>Gerar cachorro</button>
            <img src="" alt="foto" />
          </main>
        </div>
      </>
    )
  }
}

export default RandomDogs
