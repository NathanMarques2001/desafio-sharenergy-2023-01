import './styles.css'

import { LoadCatImage } from '../../utils/Load-Cat-Images'

export function CatImage({ httpCode }: any) {
  return (
    <img src={LoadCatImage(httpCode)} alt="Img gatinho" className="Cat-Image" />
  )
}

export default CatImage
