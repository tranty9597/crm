import React from 'react'
import { Image, Text } from 'react-native'

import { Header } from '../../common'

import { Container } from '../../layouts';
import { Color } from '../../values';


class Message extends React.Component {
    static navigationOptions = {
        tabBarIcon: (focused) => {
            return <Image source={focused.focused ? require('../../assets/image/message/active.png') : require('../../assets/image/message/inactive.png')} />
        }
    }
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container header={<Header />} style={{ backgroundColor: Color.whiteGray }}>

                <Text> Message</Text>
            </Container>
        )
    }
}

export default Message;