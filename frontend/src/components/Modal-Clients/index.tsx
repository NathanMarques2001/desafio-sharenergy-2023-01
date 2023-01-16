import './styles.css'

import MaskedInput from 'react-text-mask'

export const ClientModal = ({
  nameValue,
  onChangeName,
  phoneValue,
  onChangePhone,
  emailValue,
  onChangeEmail,
  cpfValue,
  onChangeCpf,
  addressValue,
  onChangeAddress,
  cityValue,
  onChangeCity,
  onclick,
  required,
}: any) => {
  return (
    <div className="Modal">
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
              value={nameValue}
              onChange={onChangeName}
              required={required}
            />
          </div>

          <div className="Input-block">
            <label htmlFor="" className="Input-modal-text">
              Telefone
            </label>
            <input
              type="number"
              className="Input-modal"
              placeholder="Insira somente números"
              value={phoneValue}
              onChange={onChangePhone}
              required={required}
            />
          </div>
        </div>

        <div className="Modal-group-block">
          <div className="Input-block">
            <label htmlFor="" className="Input-modal-text">
              E-mail
            </label>
            <input
              type="email"
              className="Input-modal"
              placeholder="Exemplo@email.com"
              value={emailValue}
              onChange={onChangeEmail}
              required={required}
            />
          </div>

          <div className="Input-block">
            <label htmlFor="" className="Input-modal-text">
              CPF
            </label>
            <MaskedInput
              type="text"
              className="Input-modal"
              mask={[
                /\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/
              ]}
              placeholder="Insira somente números"
              value={cpfValue}
              onChange={onChangeCpf}
              required={required}
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
              value={addressValue}
              onChange={onChangeAddress}
              required={required}
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
              value={cityValue}
              onChange={onChangeCity}
              required={required}
            />
          </div>
        </div>
        <div className="Modal-buttons-div">
          <button
            type="submit"
            className="Modal-button"
            id="Edit-button"
            onClick={onclick}
          >
            Salvar
          </button>
          <a href="/Clients">
            <button className="Modal-button" id="Close-button">
              Sair
            </button>
          </a>
        </div>
      </form>
    </div>
  )
}
