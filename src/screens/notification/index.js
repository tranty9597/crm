import React from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../common'

// import { Tab } from './components'
import { Container } from '../../layouts';

class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Header />
                <Text> Notification</Text>
            </Container>
        )
    }
}

export default Notification;