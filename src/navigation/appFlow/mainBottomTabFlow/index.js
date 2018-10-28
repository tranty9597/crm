import { createBottomTabNavigator } from 'react-navigation'

import { mainBottomTabRoutes } from '../../routers'
import { Color } from '../../../values';

const MainBottomTabFlow = createBottomTabNavigator(mainBottomTabRoutes,
    {
        initialRouteName: 'RestaurantList',
        tabBarOptions:{
            inactiveTintColor: Color.redOrange,
            showLabel: false,
            style:{
                height: 40,
                elevation: 10
            }
        }
    }
)

export default MainBottomTabFlow