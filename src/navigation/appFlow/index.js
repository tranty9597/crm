import { createDrawerNavigator } from 'react-navigation'

import MainBottomTabFlow from './mainBottomTabFlow'

import SideBar from './sideBar'

const AppFlow = createDrawerNavigator(
    {
        MainBottomTabFlow
    },
    {
        contentComponent: SideBar
    }
)

export default AppFlow