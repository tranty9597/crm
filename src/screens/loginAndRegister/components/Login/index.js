import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { NavigationAction } from 'react-navigation'

import { connect } from 'react-redux'

import { } from '../../../../common'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log("3", this.props)
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity title='buton' onPress={() => this.props.navigation.navigate('Dashboard')}>
                    <Text >Login</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

export default Login;