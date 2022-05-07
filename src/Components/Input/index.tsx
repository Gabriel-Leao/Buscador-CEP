import { useContext } from 'react'
import { CepContext } from '../../Contexts/CepContext'
import { SearchOutlined } from '@ant-design/icons'
import { InputDiv, StyledButton, StyledInput } from './styles'

const Input = () => {
  const {handlePressEnter, handleSearch, input, setInput}:any = useContext(CepContext)

  return (
    <InputDiv>
      <StyledInput type="text" 
        placeholder="00000-000" 
        value={input} 
        onChange={ (event) => setInput(event.target.value) }
        onKeyDown={(e) => handlePressEnter({ e, input })}
      />
      <StyledButton onClick={() => handleSearch({ input })}> <SearchOutlined /> </StyledButton>
    </InputDiv>
  )
}

export default Input