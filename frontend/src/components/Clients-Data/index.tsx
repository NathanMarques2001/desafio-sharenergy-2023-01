import './styles.css'

import EditClient from '../Modal-Clients/Edit-Client'
import { useState } from 'react'
import { ConfirmModal } from '../Modal-Confirmation'

export const ClientsData = ({
  name,
  cpf,
  phone,
  address,
  city,
  email,
  id,
}: any) => {
  const [on, setOn] = useState<boolean>(false)
  const [showConfirm, setShowConfirm] = useState<boolean>(false)

  return (
    <>
      {showConfirm ? <ConfirmModal id={id} /> : <></>}
      {on ? (
        <EditClient
          name={name}
          phone={phone}
          email={email}
          cpf={cpf}
          address={address}
          city={city}
          id={id}
        />
      ) : (
        <></>
      )}

      <tr>
        <td>{name}</td>
        <td>{cpf}</td>
        <td>{phone}</td>
        <td>
          {address}, {city}
        </td>
        <td>{email}</td>
        <td>
          <button
            className="button-CRUD"
            id="Edit-button-CRUD"
            onClick={(e) => setOn(true)}
          >
            Editar
          </button>
          <button
            type="submit"
            className="button-CRUD"
            id="Delete-button-CRUD"
            onClick={(e) => setShowConfirm(true)}
          >
            Excluir
          </button>
        </td>
      </tr>
    </>
  )
}
