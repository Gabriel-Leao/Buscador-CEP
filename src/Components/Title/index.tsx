import { StyledTitle } from './style'

interface ITitle {
  children: String
}

const Title = ({ children }:ITitle) => {
  return (
    <StyledTitle> { children } </StyledTitle>
  )
}

export default Title