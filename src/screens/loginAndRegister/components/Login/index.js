import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { NavigationAction } from 'react-navigation'

import { connect } from 'react-redux'

import { Button } from '../../../../common'

import { AppStyle, Color } from '../../../../values'
import { strings } from '../../../../i18n'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={[AppStyle.container]}>
                <Button
                    bgColor={[]}
                    disabled
                    title={strings('loginAndRegiter_login_login')}
                    onPress={() => this.props.navigation.navigate('Dashboard')}
                />
            </View>

        )
    }
}

export default Login;