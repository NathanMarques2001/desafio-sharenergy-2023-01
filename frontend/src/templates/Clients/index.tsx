import './styles.css'

import Navbar from '../../components/Navbar'
import ClientsTable from '../../components/Client-Table'
import { useState } from 'react'
import RegisterClient from '../../components/Modal-Clients/Register-Client'

export let controll = true

export const Clients = () => {
  const [on, setOn] = useState<boolean>(false)
  return (
    <>
      <Navbar />
      {on ? <RegisterClient /> : <></>}
      <div>
        <main className="CRUD-Main-Content">
          <p className="CRUD-Text">
            Lista dos clientes cadastros na plataforma da Sharenergy!
          </p>

          <ClientsTable />

          <button className="CRUD-Button" onClick={(e) => setOn(true)}>
            Adicionar cliente
          </button>
        </main>
      </div>
    </>
  )
}

export default Clients
