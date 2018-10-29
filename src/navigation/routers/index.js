import { LoginAndRegister, Profile, Notification, Dashboard, Message, RestaurantList, PasswordSetting } from '../../screens'

const authRoutes = {
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