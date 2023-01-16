import './styles.css'

import { Component } from 'react'
import Logo from './../../images/Logo.png'
import { Authenticate } from '../../utils/Authenticate'

export class Login extends Component {
  state = {
    email: '',
    password: '',
    isChecked: false,
  }

  componentDidMount(): void {
    if (localStorage.checkbox && localStorage.email !== '') {
      this.setState({
        isChecked: true,
        email: localStorage.username,
        password: localStorage.password,
      })
    }
  }

  onChangeValue = (event: any) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onChangeCheckbox = (event: any) => {
    this.setState({
      isChecked: event.target.checked,
    })
  }

  loginSubmit = (event: any) => {
    const { email, password, isChecked } = this.state
    if (isChecked && email !== '') {
      localStorage.username = email
      localStorage.password = password
      localStorage.checkbox = isChecked
    }

    if (!Authenticate(email, password)) {
      event.preventDefault()
      const loginInvalid = document.querySelector('.Invalid-Login')
      loginInvalid?.removeAttribute('hidden')
    }
  }

  render() {
    const { email, password, isChecked } = this.state
    return (
      <div className="Container-Login">
        <form action="/Random-Users" className="Form-Login">
          <img src={Logo} alt="Logo" className="Logo-login" />

          <input
            type="text"
            name="email"
            className="Input-Login"
            id="Input-User"
            placeholder="Nome de usuário"
            defaultValue={email}
            onChange={this.onChangeValue}
          />

          <input
            type="password"
            name="password"
            className="Input-Login"
            id="Input-Password"
            placeholder="Senha"
            defaultValue={password}
            onChange={this.onChangeValue}
          />

          <p className="Invalid-Login" hidden>
            Usuário ou senha inválido!
          </p>

          <p className="Checkbox-Login">
            <input
              type="checkbox"
              id="checkbox"
              checked={isChecked}
              onChange={this.onChangeCheckbox}
            />
            <label>Lembrar de mim</label>
          </p>

          <input
            type="submit"
            className="Submit-Button-Login"
            value="Entrar"
            onClick={this.loginSubmit}
          />
        </form>
      </div>
    )
  }
}
export default Login
