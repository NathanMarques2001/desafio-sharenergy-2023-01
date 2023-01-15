import './styles.css'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import api from '../../services/api'

export const RegisterClient = () => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<number>()
  const [email, setEmail] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [city, setCity] = useState<string>('')

  async function handleSubmit(e: any) {
    e.preventDefault()

    const response = await api.post('/clients', {
      name,
      phone,
      email,
      cpf,
      address,
      city,
    })

  }

  return (
    <>
      <div className="Modal">
        <form onSubmit={handleSubmit} action="/Clients" className="Modal-body">
          <div className="Modal-group-block">
            <div className="Input-block">
              <label htmlFor="" className="Input-modal-text">
                Nome
              </label>
              <input
                type="text"
                className="Input-modal"
                placeholder="Insira o nome aqui..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="Input-block">
              <label htmlFor="" className="Input-modal-text">
                Telefone
              </label>
              <input
                type="text"
                className="Input-modal"
                placeholder="Ex: (31) 91234-5678"
                value={phone}
                onChange={(e) => setPhone(parseInt(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="Modal-group-block">
            <div className="Input-block">
              <label htmlFor="" className="Input-modal-text">
                E-mail
              </label>
              <input
                type="text"
                className="Input-modal"
                placeholder="Exemplo@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="Input-block">
              <label htmlFor="" className="Input-modal-text">
                CPF
              </label>
              <input
                type="text"
                className="Input-modal"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="Modal-group-block">
            <div className="Input-block">
              <label htmlFor="" className="Input-modal-text">
                Endereço
              </label>
              <input
                type="text"
                className="Input-modal"
                placeholder="Rua Exemplo, 123"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="Input-block">
              <label htmlFor="" className="Input-modal-text">
                Cidade
              </label>
              <input
                type="text"
                className="Input-modal"
                placeholder="Ex: Belo Horizonte"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="Modal-buttons-div">
            <button type="submit" className="Modal-button" id="Edit-button">
              Salvar
            </button>
            <Link to="/Clients">
              <button className="Modal-button" id="Close-button">
                Sair
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterClient
