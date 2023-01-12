import './styles.css'

import Navbar from '../../layout/Navbar'
import { Component } from 'react'

export class RandomDogs extends Component {
  state = {
    srcUrl: '',
    count: 0,
  }

  componentDidMount(): void {
    this.dogPhoto()
  }

  dogPhoto = async () => {
    fetch('https://random.dog/woof.json')
      .then((response) => response.json())
      .then((photo) => this.setState({ srcUrl: photo.url }))
      .catch((err) => console.error(err))
  }

  render() {
    const { srcUrl } = this.state
    return (
      <>
        <Navbar />
        <div className="Container-RandomDogs">
          <main className="Content-RandomDogs">
            <p className="RandomDogs-Text">
              Clique no botão abaixo para gerar uma foto ou GIF aleatório de um
              cachorrinho.
            </p>
            <button className="Button-RandomDogs" onClick={this.dogPhoto}>
              Gerar cachorro
            </button>
            <img src={srcUrl} alt="" className="Dog-Image" />
          </main>
        </div>
      </>
    )
  }
}

export default RandomDogs
