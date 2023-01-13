import './styles.css'

import Navbar from '../../layout/Navbar'

import { Component } from 'react'
import ClientsTable from '../../components/Client-Table'

export class Clients extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <main className="CRUD-Main-Content">
            <p className='CRUD-Text'>
              Para editar ou excluir dados de um cliente basta clicar na lupa de
              visualizar.
            </p>
            <ClientsTable
              name={`Nathan Marques`}
              cpf={`123.456.789-65`}
              phone={`(31) 99432-8933`}
              adress={`Rua alguma coisa, 3182`}
              email={`Nathanmarques423@gmail.com`}
            />
            <button>Adicionar cliente</button>
          </main>
        </div>
      </>
    )
  }
}

export default Clients
