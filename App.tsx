import { NavigationContainer } from '@react-navigation/native'

import { TabRoutes } from './src/routes'

import { SearchProvider } from './src/contexts/SearchContext'

const App: React.FC = () => (

  <NavigationContainer>
    <SearchProvider>
      <TabRoutes />
    </SearchProvider>
  </NavigationContainer>

)

export default App