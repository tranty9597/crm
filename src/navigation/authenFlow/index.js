import { createStackNavigator } from 'react-navigation'

import { authRoutes } from "../routers"

const AuthenFlow = createStackNavigator(
    authRoutes,
    {
        navigationOptions: {
            header: null,

        }
    }
)

export default AuthenFlow