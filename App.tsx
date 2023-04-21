import { StatusBar } from 'expo-status-bar'

import { Container, Texto } from './styles'

const App: React.FC = () => {
  return (
    <Container>
      <Texto>Hello, world!</Texto>
      <StatusBar style="auto" />
    </Container>
  )
}

export default App