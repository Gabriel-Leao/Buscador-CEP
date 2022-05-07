import Container from '../../Components/Container/styles'
import Input from '../../Components/Input'
import Main from '../../Components/Main'
import Title from '../../Components/Title'
import CepProvider from '../../Contexts/CepContext'

function Home() {
  return (
    <Container>
      <CepProvider>
        <Title>Buscador CEP</Title>
        <Input />
        <Main />
      </CepProvider>
    </Container>
  )
}

export default Home