import React from 'react'
import { View, Text } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

import { Header } from '../../common'


import { Container } from '../../layouts';
import { Color } from '../../values';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container style={{backgroundColor: Color.whiteGray}}>
                <Header />
                <Text> Notification</Text>
                <Icon.Button name="facebook" backgroundColor="#3b5998">
                    <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>Login with Facebook</Text>
                </Icon.Button>
            </Container>
        )
    }
}

export default Notification;