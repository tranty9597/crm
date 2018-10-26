import { LoginAndRegister, Profile, Notification, Dashboard } from '../../screens'

const authRoutes = {
    LoginAndRegister
}

const mainBottomTabRoutes ={
    Profile: {
        screen: Profile
    },
    Dashboard: {
        screen: Dashboard
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