import './styles.css'

import Navbar from '../../layout/Navbar'

import { Component } from 'react'
import UserCard from '../../components/User-Card'

export class RandomUsers extends Component {
  state = {
    name: '',
    username: '',
    age: 0,
    email: '',
    photo: '',
  }

  componentDidMount(): void {
    this.getUsers()
  }

  getUsers = async () => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          name: `${data.results[0]['name']['first']} ${data.results[0]['name']['last']}`,
          username: data.results[0]['login']['username'],
          age: data.results[0]['dob']['age'],
          email: data.results[0]['email'],
          photo: data.results[0]['picture']['large'],
        }),
      )
  }

  render() {
    const { name, username, age, email, photo } = this.state
    return (
      <>
        <Navbar />
        <input type="text" placeholder="Insira o nome ou usuário" />
        <UserCard
          photo={photo}
          username={username}
          name={name}
          age={age}
          email={email}
        />
      </>
    )
  }
}

export default RandomUsers
