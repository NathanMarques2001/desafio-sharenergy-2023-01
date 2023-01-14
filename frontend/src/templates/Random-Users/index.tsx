import './styles.css'

import Navbar from '../../layout/Navbar'

import { useEffect, useState } from 'react'
import UserCard from '../../components/User-Card'

export interface RandomUser {
  name: {
    first: string
    last: string
  }

  login: {
    username: string
  }

  dob: {
    age: number
  }

  email: string

  picture: {
    large: string
  }
}

export const RandomUsers = () => {
  const [user, setUser] = useState<RandomUser[]>([])
  const [page, setPage] = useState<number>(1)
  const [searchValue, setSearchValue] = useState<string>('')
  const maxUsers = 36
  const maxUsersPerPage = 6
  let endPage = maxUsers / maxUsersPerPage

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        `https://randomuser.me/api/?page=${page}&results=${maxUsersPerPage}&seed=abc`,
      )
      const data = await response.json()
      setUser(data.results)
    }
    getUsers()
  }, [page])


  function nextPage(): void {
    if (page < endPage) {
      setPage(page + 1)
    }
  }

  function previousPage(): void {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  function firstPage(): void {
    setPage(1)
  }

  function lastPage(): void {
    setPage(endPage)
  }

  const lowerValue = searchValue.toLowerCase()

  const filterUser = user.filter(
    (FillUser) =>
      FillUser.name.first
        .toLowerCase()
        .concat(' ', FillUser.name.last.toLowerCase())
        .includes(lowerValue) ||
      FillUser.login.username.toLowerCase().includes(lowerValue) ||
      FillUser.email.toLowerCase().includes(lowerValue),
  )

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
        <div className="Container-Cards">
          {filterUser.map((users) => (
            <UserCard
              photo={users.picture.large}
              username={users.login.username}
              name={`${users.name.first} ${users.name.last}`}
              age={users.dob.age}
              email={users.email}
            />
          ))}
        </div>
        <div className="Buttons-div">
          <button className="Pagination-Button" onClick={(e) => firstPage()}>
            &#60;&#60;
          </button>
          <button className="Pagination-Button" onClick={(e) => previousPage()}>
            &#60;
          </button>
          <div className="AtualPage-div">{page}</div>
          <button className="Pagination-Button" onClick={(e) => nextPage()}>
            &#62;
          </button>
          <button className="Pagination-Button" onClick={(e) => lastPage()}>
            &#62;&#62;
          </button>
        </div>
      </div>
    </>
  )
}

export default RandomUsers
