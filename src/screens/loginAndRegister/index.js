import React from 'react'
import { View, Text } from 'react-native'

import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Header } from '../../common'

import { Tab } from './components'
import { Container } from '../../layouts';

class LoginAndRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Tab />
            </React.Fragment>
        )
    }
}

export default LoginAndRegister;