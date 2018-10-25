import React from 'react'
import { View, Text } from 'react-native'

import { TabView, SceneMap } from 'react-native-tab-view';

import { } from '../../../../common'

import Login from '../Login'
import Register from '../Register'

import { Device, Color } from '../../../../values'


class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            routes: [
                { key: 'Login', title: 'Login' },
                { key: 'Register', title: 'Register' },
            ],
        };
    }

    render() {
        return (
            <TabView
                
                onIndexChange={index => this.setState({ index })}
                navigationState={this.state}
                renderScene={SceneMap({
                    Login: Login,
                    Register: Register
                })}
                initialLayout={{ width: Device.screenWidth, height: 200 }}
            />
        )
    }
}

export default Tab