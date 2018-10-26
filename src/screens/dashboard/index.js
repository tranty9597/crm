import React from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../common'

// import {  } from './components'
import { Container } from '../../layouts';
import { Color } from '../../values';
import Icon from 'react-native-vector-icons/FontAwesome';

class DashBoard extends React.Component {
    static navigationOptions = {
        tabBarIcon: (focused) => <Icon name='rocket' size={24} color={focused ? Color.redOrange : Color.black} />
    }
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container header={<Header />} style={{ backgroundColor: Color.whiteGray }}>

                <Text> DashBoard</Text>
            </Container>
        )
    }
}

export default DashBoard;