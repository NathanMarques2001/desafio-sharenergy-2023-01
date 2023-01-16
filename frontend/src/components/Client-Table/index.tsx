import './styles.css'

import { ClientsData } from '../Clients-Data'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import { Client } from '../../utils/Interfaces'

export const ClientsTable = () => {
  const [allClients, setAllClients] = useState<Client[]>([])

  useEffect(() => {
    async function getAllClients() {
      const response = await api.get('/clients')
      setAllClients(response.data)
    }
    getAllClients()
  }, [allClients])

  return (
    <table className="CRUD-Table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>CPF</th>
          <th>Telefone</th>
          <th>Endereço</th>
          <th>E-mail</th>
          <th>Visualizar</th>
        </tr>
      </thead>

      <tbody className="CRUD-Table-Body">
        {allClients.map((client) => (
          <ClientsData
            key={client._id}
            name={client.name}
            cpf={client.cpf}
            phone={client.phone}
            address={client.address}
            city={client.city}
            email={client.email}
            id={client._id}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ClientsTable
