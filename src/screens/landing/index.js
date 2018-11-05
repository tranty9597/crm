/**
 * 
 */
import React from 'react'
import { Text } from 'react-native'

import { Header } from '../../common'

// import {  } from './components'
import { Container } from '../../layouts';
import { Color } from '../../values';
import Icon from 'react-native-vector-icons/FontAwesome';

class Landing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Container header={<Header />}  style={{ backgroundColor: Color.whiteGray }}>
                <Text> Landing</Text>
            </Container>
        )
    }
}

export default Landing;