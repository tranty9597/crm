import React from 'react'
import {} from 'react-navigation'

import { View, StyleSheet, StatusBar } from 'react-native'

import { Color, Device } from '../../values'

type ContainerProps = {
    transclude: Boolean
}

const TRANCLUDE_PADDING_TOP = 0

class Container extends React.PureComponent<ContainerProps> {

    render() {
        let { children, transclude } = this.props
        return (
            <View style={[styles.container, {paddingTop: transclude ? TRANCLUDE_PADDING_TOP : Device.statusBarHeight}]}>
                {children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    }
})

export default Container