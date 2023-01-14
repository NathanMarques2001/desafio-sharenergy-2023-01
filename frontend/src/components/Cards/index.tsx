import './styles.css'

import { useState, useEffect } from 'react'
import { RandomUser } from '../../utils/Interfaces'
import { maxUsersPerPage } from '../../utils/Set-Page'
import UserCard from '../User-Card'

export const Cards = ({ lowerValue, page }: any) => {
  const [user, setUser] = useState<RandomUser[]>([])

  const filterUser = user.filter(
    (FillUser) =>
      FillUser.name.first
        .toLowerCase()
        .concat(' ', FillUser.name.last.toLowerCase())
        .includes(lowerValue) ||
      FillUser.login.username.toLowerCase().includes(lowerValue) ||
      FillUser.email.toLowerCase().includes(lowerValue),
  )

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

  return (
    <>
      <div className="Container-Cards">
        {filterUser.map((users) => (
          <UserCard
            key={users.login.uuid}
            photo={users.picture.large}
            username={users.login.username}
            name={`${users.name.first} ${users.name.last}`}
            age={users.dob.age}
            email={users.email}
          />
        ))}
      </div>
    </>
  )
}

export default Cards
