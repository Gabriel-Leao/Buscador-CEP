import { useContext } from 'react'
import { StyledMain } from './styles'
import { CepContext } from '../../Contexts/CepContext'

const Main = () => {
  const { cep }:any = useContext(CepContext)

  return (
    <>
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