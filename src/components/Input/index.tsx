import { SearchOutlined } from '@ant-design/icons'
import { InputDiv, StyledButton, StyledInput } from './styles'

const Input = () => {
  return (
    <InputDiv>
      <StyledInput type="text" placeholder="00000-000" />
      <StyledButton> <SearchOutlined /> </StyledButton>
    </InputDiv>
  )
}

export default Input