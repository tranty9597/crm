import { createSwitchNavigator } from 'react-navigation'

import AuthenFlow from './authenFlow'

import AppFlow from './appFlow'

const AppNavigation = createSwitchNavigator({
    AuthenFlow,
    AppFlow
},{
    initialRouteName: 'AppFlow'
})

export default AppNavigation