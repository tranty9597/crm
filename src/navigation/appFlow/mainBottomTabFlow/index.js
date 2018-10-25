import { createTabNavigator } from 'react-navigation'

import { mainBottomTabRoutes } from '../../routers'

const MainBottomTabFlow = createTabNavigator(mainBottomTabRoutes,{
    navigationOptions:{
        header: null
    }
})

export default MainBottomTabFlow