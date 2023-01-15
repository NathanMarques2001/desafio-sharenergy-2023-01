import './styles.css'

import EditClient from '../Edit-Client'
import { useState } from 'react'
import api from '../../services/api'

export const ClientsData = ({ name, cpf, phone, address, city, email, id }: any) => {
    const[on, setOn] = useState<boolean>(false)

    async function handleDelete(){
      const deleteClient = await api.delete(`/clients/${id}`)
    }
    return (
        <>
        {on ? (<EditClient 
        name={name}
        phone={phone}
        email={email}
        cpf={cpf}
        address={address}
        city={city}
        id={id}
        />) : (<></>)}
        
        <tr>
          <td>{name}</td>
          <td>{cpf}</td>
          <td>{phone}</td>
          <td>{address}, {city}</td>
          <td>{email}</td>
          <td>
            <button className="button-CRUD" id='Edit-button-CRUD' onClick={e => setOn(true)}>Editar</button>
            <button type='submit' className="button-CRUD" id='Delete-button-CRUD' onClick={e => handleDelete()}>Excluir</button>
          </td>
        </tr>
        </>
    )
}