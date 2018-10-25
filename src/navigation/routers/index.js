import { LoginAndRegister, Profile, Notification } from '../../screens'

const authRoutes = {
    LoginAndRegister
}

const mainBottomTabRoutes ={
    Profile: {
        screen: Profile
    },
    Profile1: {
        screen: Profile
    },
    Profile2: {
        screen: Profile
    },
    Profile3: {
        screen: Profile
    },
    Notification: {
        screen: Notification
    }
}


export { authRoutes, mainBottomTabRoutes }