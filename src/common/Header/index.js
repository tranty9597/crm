/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the Header class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, Image, Keyboard, Text, TouchableOpacity } from 'react-native'

import AppLinearGradient from '../AppLinearGradient'

import { AppStyle, Color, Sizes, Device } from '../../values'


type HeaderProps = {
    rightIcon: any,
    rightIconOnPress: func,
    leftIconOnPress: func,
    leftIcon: any,
    title: string,
    rightText: string,
    leftText: string,
    colors: Array
}

function RenderBtn({ icon, onPress, isLeft, text }) {
    return (
        <React.Fragment>
            {(icon || text) && <TouchableOpacity
                style={[styles.iconContainer, isLeft ? { left: Sizes.MD_GAP } : { right: Sizes.MD_GAP, alignItems: 'flex-end' }]}
                onPress={onPress}
            >
                {icon && <Image source={icon} />}
                {text && <Text style={[AppStyle.mdText, AppStyle.lightWeight, { color: Color.white }]}>{text}</Text>}
            </TouchableOpacity>}
        </React.Fragment>
    )
}

class Header extends React.PureComponent<HeaderProps> {

    render() {
        let { rightText, leftText, title, leftIcon, rightIcon, colors, leftIconOnPress, rightIconOnPress } = this.props;
        return (

            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <AppLinearGradient colors={colors} style={[styles.container]}>
                    <RenderBtn text={leftText} isLeft icon={leftIcon} onPress={leftIconOnPress} />
                    <Text style={[styles.titleContainer]}>
                        {title}
                    </Text>
                    <RenderBtn text={rightText} icon={rightIcon} onPress={rightIconOnPress} />
                </AppLinearGradient>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...AppStyle.flexCenter,
        position: 'relative',
        height: Sizes.HEADER_HEIGHT,
        paddingTop: Device.statusBarHeight,
    },
    iconContainer: {
        ...AppStyle.justifyContentCenter,
        position: 'absolute',
        width: '15%',
        bottom: 0,
        height: '100%'
    },
    titleContainer: {
        ...AppStyle.title,
        color: Color.white
    }
})

export default Header