import { createContext, useState } from 'react'
import Api from '../Services/Api'

export const CepContext = createContext({})

const CepProvider = ({ children }: any) => {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState<any>({})

  async function handleSearch ({ input }:any) {
    if (input === '') {
      alert('Por favor digite o cep')
      return
    }

    try {
      const response = await Api.get(`${input}/json`)
      verification(response.data, input)
      setCep(response.data)
      setInput('')
    } catch (error) {
      alert(`Não foi possível encontrar o cep: ${input}`)
      setInput('')
    } 
  }

  function verification ( response: Object, input: String) {
    if (Object.keys(response).length === 1) {
      alert(`O cep: ${input} é inválido ou não existe.`)
    }
  }

  interface IPressEnter {
    e: React.KeyboardEvent,
    input: String
  }

  function handlePressEnter ( { e, input }: IPressEnter ) {
    if (e.key === 'Enter') {
      handleSearch({ input })
    }
  }

  return (
    <CepContext.Provider value={{cep, input, setInput, handleSearch, handlePressEnter}}>
      { children }
    </CepContext.Provider>
  )
}

export default CepProvider