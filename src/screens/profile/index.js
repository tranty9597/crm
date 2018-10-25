import React from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../common'

// import {  } from './components'
import { Container } from '../../layouts';
import { Color } from '../../values';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends React.Component {
    static navigationOptions = {
        tabBarIcon: (focused) => <Icon name='home' size={24} color={focused ? Color.redOrange : null}/>
    }
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container style={{ backgroundColor: Color.whiteGray }}>
                <Header />
                <Text> Profile</Text>
            </Container>
        )
    }
}

export default Profile;