import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Api from '../../services/Api'
import { InputDiv, StyledButton, StyledInput, StyledMain } from './styles'

const Main = () => {
  interface ICep {
    cep: String,
    logradouro: String,
    complemento: String,
    bairro: String,
    localidade: String,
    uf: String,
  }

  const [input, setInput] = useState('')
  const [cep, setCep] = useState<ICep>({
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  })

  async function handleSearch () {
    if (input === '') {
      alert('Por favor digite o cep')
      return
    }

    try {
      const response = await Api.get(`${input}/json`)
      setCep(response.data)
      setInput('')
    } catch (error) {
     alert(`Não foi possível encontra o cep: ${input}`)
     setInput('')
    }
  }

  return (
    <>
      <InputDiv>
      <StyledInput type="text" 
        placeholder="00000-000" 
        value={input} 
        onChange={ (event) => setInput(event.target.value) }
      />
      <StyledButton onClick={handleSearch}> <SearchOutlined /> </StyledButton>
    </InputDiv>

    <StyledMain>
      <h2>CEP: {cep.cep}</h2>
    
      <span>{cep.logradouro}</span>
      <span>Complemento: {cep.complemento}</span>
      <span>{cep.bairro}</span>
      <span>{cep.localidade} - {cep.uf}</span>
    </StyledMain>
    </>
  )
}

export default Main