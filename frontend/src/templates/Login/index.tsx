import './styles.css'

import { Component } from 'react'
import Logo from './../../images/Logo.png'
import CheckboxNoCheck from './../../images/No-Check-Box.png'
import CheckboxCheck from './../../images/Check-box.png'
import { Authenticate } from '../../utils/Authenticate'

export class Login extends Component {
  render() {
    let user: string
    let password: string

    function check(): void {
      const check = document.querySelector('.Check')
      check?.toggleAttribute('hidden')
    }

    return (
      <div className="Container-Login">
        <form action="./../Random-Users" className="Form-Login">
          <img src={Logo} alt="Logo" className="Logo-login" />

          <input
            type="text"
            className="Input-Login"
            id="Input-User"
            placeholder="Nome de usuário"
            autoComplete="nickname"
            onChange={(e) => (user = e.target.value)}
          />

          <input
            type="password"
            className="Input-Login"
            id="Input-Password"
            placeholder="Senha"
            autoComplete="off"
            onChange={(e) => (password = e.target.value)}
          />

          <p className="Invalid-Login" hidden>
            Usuário ou senha inválido!
          </p>

          <p className="Checkbox-Login">
            <img
              src={CheckboxNoCheck}
              alt="Checkbox"
              className="Checkbox"
              onClick={check}
            />
            <img
              src={CheckboxCheck}
              alt="Checkbox"
              className="Check"
              onClick={check}
              hidden
            />
            Lembrar de mim
          </p>
          
          <input
            type="submit"
            className="Submit-Button-Login"
            value="Entrar"
            onClick={(e) => {
              if (!Authenticate(user, password)) {
                e.preventDefault()
                const loginInvalid = document.querySelector('.Invalid-Login')
                loginInvalid?.removeAttribute('hidden')
              }
            }}
          />
        </form>
      </div>
    )
  }
}

export default Login
