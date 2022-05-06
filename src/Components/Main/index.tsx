import { SearchOutlined } from '@ant-design/icons'
import { useState } from 'react'
import Api from '../../Services/Api'
import { InputDiv, StyledButton, StyledInput, StyledMain } from './styles'

const Main = () => {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState<any>({})

  async function handleSearch () {
    if (input === '') {
      alert('Por favor digite o cep')
      return
    }

    try {
      const response = await Api.get(`${input}/json`)
      verification(response.data)
      setCep(response.data)
      setInput('')
    } catch (error) {
      alert(`Não foi possível encontrar o cep: ${input}`)
      setInput('')
    }
  }

  function verification (response: Object) {
    if (Object.keys(response).length === 1) {
      alert(`O cep: ${input} é inválido ou não existe.`)
    }
  }

  function handlePressEnter (e: React.KeyboardEvent): any {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <>
      <InputDiv>
        <StyledInput type="text" 
          placeholder="00000-000" 
          value={input} 
          onChange={ (event) => setInput(event.target.value) }
          onKeyDown={handlePressEnter}
        />
        <StyledButton onClick={handleSearch}> <SearchOutlined /> </StyledButton>
      </InputDiv>

      {
        Object.keys(cep).length > 1 && (
          <StyledMain>
            <h2>CEP: {cep.cep}</h2>
            <span>{cep.logradouro}</span>

            {cep.complemento != "" && ( 
              <span>Complemento: {cep.complemento}</span> 
            )}

            <span>{cep.bairro}</span>
            <span>{cep.localidade} - {cep.uf}</span>
          </StyledMain>
        )
      }
    </>
  )
}

export default Main