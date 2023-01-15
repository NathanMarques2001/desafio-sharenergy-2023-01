import './styles.css'

import Navbar from '../../components/Navbar'
import { useState } from 'react'
import { Cards } from '../../components/Cards'
import NavButtons from '../../components/Nav-Buttons'

export const RandomUsers = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  const lowerValue = searchValue.toLowerCase()

  return (
    <>
      <Navbar />
      <div className="RandomUser-Content">
        <input
          type="text"
          placeholder="Insira o nome ou usuário"
          className="Input-RandomUser"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />

        <Cards lowerValue={lowerValue} page={currentPage} />

        <NavButtons setCurrentPage={setCurrentPage} currentPage={currentPage} />
        
      </div>
    </>
  )
}

export default RandomUsers
