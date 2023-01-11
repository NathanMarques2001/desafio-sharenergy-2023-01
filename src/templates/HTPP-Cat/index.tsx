import './styles.css'

import Navbar from '../../layout/Navbar'
import { Component } from 'react'
import CatImage from '../../components/Cat-Image'
import { NotFoundCat } from '../../utils/Load-Cat-Images'
import NotFoundImg from '../../images/NotFoundCat.png';

export class HTTPCats extends Component {
  state = {
    catCode: 0,
  }

  render() {
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
              <img src={NotFoundImg} alt="a" className='Cat-Image'/>
            ) : (
              <CatImage httpCode={catCode} />
            )}
          </main>
        </div>
      </>
    )
  }
}

export default HTTPCats
