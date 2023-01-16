import api from '../../../services/api'
import { useState } from 'react'
import { ClientModal } from '..'

export const EditClient = ({
  name,
  cpf,
  phone,
  address,
  city,
  email,
  id,
}: any) => {
  const [nameEdit, setNameEdit] = useState<string>(name)
  const [phoneEdit, setPhoneEdit] = useState<number>(phone)
  const [emailEdit, setEmailEdit] = useState<string>(email)
  const [cpfEdit, setCpfEdit] = useState<string>(cpf)
  const [addressEdit, setAddressEdit] = useState<string>(address)
  const [cityEdit, setCityEdit] = useState<string>(city)

  async function handleSave() {
    await api.post(`/clientsdata/${id}`, {
      name: nameEdit,
      cpf: cpfEdit,
      phone: phoneEdit,
      address: addressEdit,
      city: cityEdit,
      email: emailEdit,
    })
  }

  return (
    <>
      <ClientModal
      setPhoneValue={setPhoneEdit}
        nameValue={nameEdit}
        onChangeName={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNameEdit(e.target.value)
        }
        phoneValue={phoneEdit}
        onChangePhone={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPhoneEdit(parseInt(e.target.value))
        }
        emailValue={emailEdit}
        onChangeEmail={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmailEdit(e.target.value)
        }
        cpfValue={cpfEdit}
        onChangeCpf={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCpfEdit(e.target.value)
        }
        addressValue={addressEdit}
        onChangeAddress={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAddressEdit(e.target.value)
        }
        cityValue={cityEdit}
        onChangeCity={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCityEdit(e.target.value)
        }
        onclick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
          handleSave()
        }
        required={true}
      />
    </>
  )
}

export default EditClient
