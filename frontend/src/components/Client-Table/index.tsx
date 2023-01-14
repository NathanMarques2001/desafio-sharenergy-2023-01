import './styles.css'

import GrayVisualize from '../../images/Gray-Visualize.png'

export const ClientsTable = ({ name, cpf, phone, adress, email }: any) => {
  return (
    <table className="CRUD-Table">
      <tr>
        <th>Nome</th>
        <th>CPF</th>
        <th>Telefone</th>
        <th>Endereço</th>
        <th>E-mail</th>
        <th>Visualizar</th>
      </tr>
      <tr>
        <td>{name}</td>
        <td>{cpf}</td>
        <td>{phone}</td>
        <td>{adress}</td>
        <td>{email}</td>
        <td>
          <button className='Open-button-CRUD'>Abrir</button>
        </td>
      </tr>
    </table>
  )
}

export default ClientsTable
