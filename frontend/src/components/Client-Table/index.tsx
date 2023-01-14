import './styles.css'

export const ClientsTable = ({ name, cpf, phone, adress, email }: any) => {
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

      <tbody>
        <tr>
          <td>{name}</td>
          <td>{cpf}</td>
          <td>{phone}</td>
          <td>{adress}</td>
          <td>{email}</td>
          <td>
            <button className="Open-button-CRUD">Abrir</button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default ClientsTable
