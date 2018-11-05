import React from 'react'

import { Header, Tab } from '../../common'

import { Login, Register } from './components'
import { Container } from '../../layouts';

import { strings } from '../../i18n'

function LoginRoute(navigation) {
    return () => <Login navigation={navigation} />
}

function RegisterRoute(navigation) {
    return () => <Register navigation={navigation} />
}

const ROUTES = [
    { key: 'Login', title: strings('login') },
    { key: 'Register', title: strings('register') },
]

class LoginAndRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }

    render() {
        let {  } = this.state
        return (
            <Container>
                <Header rightText='Huy' title={strings('loginAndRegiter_title')} />
                <Tab
                    routes={ROUTES}
                    router={{
                        Login: LoginRoute(this.props.navigation),
                        Register: RegisterRoute(this.props.navigation)
                    }}
                />
            </Container>
        )
    }
}

export default LoginAndRegister;