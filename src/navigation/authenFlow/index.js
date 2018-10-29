import { createStackNavigator } from 'react-navigation'

import { authRoutes } from "../routers"

const AuthenFlow = createStackNavigator(
    authRoutes,
    {
        initialRouteKey: 'LoginAndRegister',
        navigationOptions: {
            header: null,

        }
    }
)

export default AuthenFlow