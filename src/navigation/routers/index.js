import {
    LoginAndRegister,
    Profile,
    Notification,
    Dashboard,
    Message,
    RestaurantList,
    PasswordSetting
} from '../../screens'

const authRoutes = {
    // Landing,
    LoginAndRegister,
    PasswordSetting
}

const mainBottomTabRoutes = {
    Dashboard,
    Profile,
    Message,
    Notification,
    RestaurantList
}


export { authRoutes, mainBottomTabRoutes }