import { LoadDogImage } from '../../utils/Load-Dog-Image'
import './styles.css'


export function DogImage() {
    return (
      <img src={LoadDogImage()} alt="Imagem de cachorrinho" />
    )
  }


export default DogImage