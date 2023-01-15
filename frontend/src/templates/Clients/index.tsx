import './styles.css'

import Navbar from '../../components/Navbar'
import ClientsTable from '../../components/Client-Table'
import { Link } from 'react-router-dom'

export const Clients = () => {

  return (
    <>
      <Navbar />
      <div>
        <main className="CRUD-Main-Content">
          <p className="CRUD-Text">
            Para editar ou excluir dados de um cliente basta clicar no botão de
            abrir.
          </p>

          <ClientsTable />

          <Link to="/Register-Client">
            <button className="CRUD-Button">Adicionar cliente</button>
          </Link>
        </main>
      </div>
    </>
  )
}

export default Clients
