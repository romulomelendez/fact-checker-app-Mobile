import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

import { SearchTab } from '../screens/SearchTab'
import { HotNewsTab } from '../screens/HotNewsTab'

const { Screen, Navigator } = createBottomTabNavigator()

export const TabRoutes = () => (

    <Navigator>
        <Screen
            name="Search"
            component={ SearchTab }
            options={{
                tabBarLabel: 'HOME',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons
                      name="home"
                      color={color}
                      size={size}
                    />
                )
            }}
        />
        <Screen
            name="HotNews"
            component={ HotNewsTab }
            options={{
                tabBarLabel: 'HOT NEWS',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons
                      name="article"
                      color={color}
                      size={size}
                    />
                )
            }}
        />
    </Navigator>

)

// export default TabRoutes