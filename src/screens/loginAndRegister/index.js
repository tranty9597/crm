import React from 'react'

import { Header } from '../../common'

import { Tab } from './components'
import { Container } from '../../layouts';

import { strings } from '../../i18n'

class LoginAndRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Header rightText='Huy' title={strings('loginAndRegiter_title')} />
                <Tab navigation={this.props.navigation} />
            </Container>
        )
    }
}

export default LoginAndRegister;