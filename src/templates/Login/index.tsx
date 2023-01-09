import './styles.css';

import { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className="Container-Login">
        <form action="../Random-Users" className="Form-Login">
          <img src="" alt="Logo" />
          <input type="text" className="Input-Username" minLength={6} placeholder="Nome de usuário" required />
          <input type="password" className="Input-Password" minLength={6} placeholder="Senha" required />
          <p>
            <img src="" alt="Checkbox" />
            Lembrar de mim
          </p>
          <input type="submit" value="Entrar" />
        </form>
      </div>
    );
  }
}

export default Login