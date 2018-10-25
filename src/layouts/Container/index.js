import React from 'react'
import {} from 'react-navigation'

import { View, StyleSheet, StatusBar } from 'react-native'

import { Color, Device } from '../../values'

type ContainerProps = {
    transclude: Boolean,
    style: StyleSheet
}

const TRANCLUDE_PADDING_TOP = 0

class Container extends React.PureComponent<ContainerProps> {

    render() {
        let { children, transclude, style } = this.props
        return (
            <View style={[styles.container, style]}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Container