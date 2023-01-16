import { useState } from 'react'
import api from '../../../services/api'
import { ClientModal } from '..'

export const RegisterClient = () => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<number>(0)
  const [email, setEmail] = useState<string>('')
  const [cpf, setCpf] = useState<string>('')
  const [address, setAddress] = useState<string>('')
  const [city, setCity] = useState<string>('')

  async function handleSubmit(e: any) {
    if (
      name !== '' ||
      phone === 0 ||
      email === '' ||
      cpf === '' ||
      address === '' ||
      city === ''
    ) {
      e.preventDefault()
    }
    const response = await api.post('/clients', {
      name,
      phone,
      email,
      cpf,
      address,
      city,
    })
    setName('')
    setPhone(0)
    setEmail('')
    setCpf('')
    setAddress('')
    setCity('')

    if (response.status === 400) {
      console.error('error', 400)
    }
  }

  return (
    <>
      <ClientModal
        nameValue={name}
        onChangeName={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
        phoneValue={phone}
        onChangePhone={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPhone(parseInt(e.target.value))
        }
        emailValue={email}
        onChangeEmail={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        cpfValue={cpf}
        onChangeCpf={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCpf(e.target.value)
        }
        addressValue={address}
        onChangeAddress={(e: React.ChangeEvent<HTMLInputElement>) =>
          setAddress(e.target.value)
        }
        cityValue={city}
        onChangeCity={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCity(e.target.value)
        }
        onclick={(e: any) => handleSubmit(e)}
        required={false}
      />
    </>
  )
}

export default RegisterClient
