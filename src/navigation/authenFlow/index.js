import { createStackNavigator } from 'react-navigation'

import { LoginAndRegister } from '../../screens'

const AuthenFlow = createStackNavigator(
    {
        LoginAndRegister
    },
    {
        navigationOptions: {
            header: null,
            
        }
    }
)

export default AuthenFlow