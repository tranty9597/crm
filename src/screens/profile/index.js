import React from 'react'
import { View, Text } from 'react-native'

import { Header } from '../../common'

// import {  } from './components'
import { Container } from '../../layouts';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container>
                <Header/>
                <Text> Profile</Text>
            </Container>
        )
    }
}

export default Profile;