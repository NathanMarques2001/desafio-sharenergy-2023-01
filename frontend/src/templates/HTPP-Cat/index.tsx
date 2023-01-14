import './styles.css'

import Navbar from '../../layout/Navbar'
import { Component } from 'react'
import { NotFoundCat } from '../../utils/Not-Found-Cat'
import NotFoundImg from '../../images/NotFoundCat.png'

export class HTTPCats extends Component {
  state = {
    catCode: 0,
  }

  render() {
    const photoUrl = 'https://http.cat/'
    const { catCode } = this.state

    return (
      <>
        <Navbar />
        <div className="Container-HTTP-Cats">
          <main className="Content-HTTPCats">
            <p className="HTTPCats-Text">
              Digite um código HTTP para saber a resposta, e junto com ela, ver
              a foto de um gatinho referente a mesma.
            </p>

            <input
              type="text"
              className="HTTPCats-Input"
              placeholder="Insira o código HTTP aqui..."
              onChange={(e) => this.setState({ catCode: e.target.value })}
            />

            {NotFoundCat(catCode) ? (
              <img src={NotFoundImg} alt="a" className="Cat-Image" />
            ) : (
              <img
                src={`${photoUrl}${catCode}`}
                alt="Img gatinho"
                className="Cat-Image"
              />
            )}
          </main>
        </div>
      </>
    )
  }
}

export default HTTPCats
