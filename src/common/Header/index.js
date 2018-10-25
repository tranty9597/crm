import React from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Image, Keyboard, Text } from 'react-native'

import AppLinearGradient from '../AppLinearGradient'

import { Color, Device, AppStyle } from '../../values'


type HeaderProps = {
    rightIcon: any,
    leftIcon: any,
    title: string
}

function RenderBtn({ icon, onPress }) {
    return (
        <React.Fragment>
            {icon && <TouchableOpacity
                style={[AppStyle.flexCenter, styles.iconContainer]}
                onPress={onPress}
            >
                <Image source={lefIcon} />
            </TouchableOpacity>}
        </React.Fragment>
    )
}

class Header extends React.PureComponent<HeaderProps> {

    render() {
        let { title, lefIcon, rightIcon } = this.props;
        return (

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <AppLinearGradient style={[styles.container]}>
                    <RenderBtn icon={lefIcon} onPress={() => { }} />
                    <Text style={[styles.titleContainer]}>
                        {title}
                    </Text>
                    <RenderBtn icon={rightIcon} onPress={() => { }} />
                </AppLinearGradient>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 40 + Device.statusBarHeight,
        padding: Device.statusBarHeight,
    },
    iconContainer: {
        flex: 2,
        height: '100%'
    },
    titleContainer: {
        flex: 6,
        height: '100%'
    }
})

export default Header