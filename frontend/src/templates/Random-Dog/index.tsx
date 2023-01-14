import './styles.css'

import Navbar from '../../layout/Navbar'
import { useState, useEffect } from 'react'

export const RandomDogs = () => {
  const [srcUrl, setSrcUrl] = useState<string>('')
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const getDogPhoto = async () => {
      const response = await fetch('https://random.dog/woof.json')
      const data = await response.json()

      setSrcUrl(data.url)
    }
    getDogPhoto()
  }, [count])

  return (
    <>
      <Navbar />
      <div className="Container-RandomDogs">
        <main className="Content-RandomDogs">
          <p className="RandomDogs-Text">
            Clique no botão abaixo para gerar uma foto ou GIF aleatório de um
            cachorrinho.
          </p>
          <button
            className="Button-RandomDogs"
            onClick={(e) => setCount(count + 1)}
          >
            Gerar cachorro
          </button>
          <img src={srcUrl} alt="" className="Dog-Image" />
        </main>
      </div>
    </>
  )
}

export default RandomDogs
