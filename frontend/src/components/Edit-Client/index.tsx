import './styles.css'

import api from '../../services/api'
import {useState} from 'react'

export const EditClient = ({ name, cpf, phone, address, city, email, id }: any) => {
  const[nameEdit, setNameEdit] = useState<string>(name)
  const [phoneEdit, setPhoneEdit] = useState<number>(phone)
  const [emailEdit, setEmailEdit] = useState<string>(email)
  const [cpfEdit, setCpfEdit] = useState<string>(cpf)
  const [addressEdit, setAddressEdit] = useState<string>(address)
  const [cityEdit, setCityEdit] = useState<string>(city)

  async function handleSave(){
    await api.post(`/clientsdata/${id}`, {
      name: nameEdit,
      cpf: cpfEdit,
      phone: phoneEdit,
      address: addressEdit,
      city: cityEdit,
      email: emailEdit
    })
      
  }


  return (
    <>
      <div className="Modal-edit">
        <form action="/Clients" className="Modal-body">
          <div className="Modal-group-block">
            <div className="Input-block">
              <label htmlFor="" className="Input-modal-text">
                Nome
              </label>
              <input
                type="text"
                className="Input-modal"
                placeholder="Insira o nome aqui..."
                value={nameEdit}
                onChange={e => setNameEdit(e.target.value)}
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
                value={phoneEdit}
                onChange={e => setPhoneEdit(parseInt(e.target.value))}
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
                value={emailEdit}
                onChange={e => setEmailEdit(e.target.value)}
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
                value={cpfEdit}
                onChange={e => setCpfEdit(e.target.value)}
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
                value={addressEdit}
                onChange={e => setAddressEdit(e.target.value)}
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
                value={cityEdit}
                onChange={e => setCityEdit(e.target.value)}
              />
            </div>
          </div>
          <div className="Modal-buttons-div">
            <button type="submit" className="Modal-button" id="Edit-button"
            onClick={e => handleSave()}>
              Salvar
            </button>           
              <button className="Modal-button" id="Close-button">
                Sair
              </button>  
          </div>
        </form>
      </div>
    </>
  )
}

export default EditClient
