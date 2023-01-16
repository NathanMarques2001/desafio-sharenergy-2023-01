import './styles.css'

import api from '../../services/api'

export const ConfirmModal = ({ id }: any) => {
  async function handleDelete() {
    const deleteClient = await api.delete(`/clients/${id}`)

    if (deleteClient.status === 401) {
      console.error('error', 401)
    }
  }
  
  return (
    <div className="Confirm-Modal-container">
      <form action="/Clients" className="Form-Confirm-Modal">
        <label htmlFor="" className="Label-Confirm-Modal">
          Tem certeza que deseja excluir este cliente?
        </label>
        <div className="Div-Modal-Confirm">
          <button className="Button-Confirm-Modal" onClick={handleDelete}>
            Sim
          </button>
          <button className="Button-Confirm-Modal">Não</button>
        </div>
      </form>
    </div>
  )
}
