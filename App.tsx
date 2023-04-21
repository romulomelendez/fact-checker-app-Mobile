import { NavigationContainer } from '@react-navigation/native'

import { TabRoutes } from './src/routes'

const App: React.FC = () => (

  <NavigationContainer>
    <TabRoutes />
  </NavigationContainer>

)

export default App