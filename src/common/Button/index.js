/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the Button class.
 * @author ADAMO
 * @since  10/15/2018
 */
import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from "react-native";
import LinearGradient from 'react-native-linear-gradient'

import PropTypes from 'prop-types'

import { AppStyle, Color, Sizes } from "../../values";

const BUTTON_TYPE = [
    { bg: [Color.redOrange, Color.scarlet], color: Color.white },
    { bg: [Color.white, Color.white], color: Color.scarlet },
    { bg: [Color.greyish, Color.greyish], color: Color.white }
]

type ButtonProps = {
    type: 0 | 1,
    style: StyleSheet,
    disabled: boolean,
    bgColor: any,
    leftIcon: any,
    rightIcon: any,
    onPress: Function,
}

class Button extends React.PureComponent<ButtonProps> {
    constructor(props) {
        super(props);
    }

    render() {
        let { bgColor, disabled, style, title, rightIcon, leftIcon, type = 0, children } = this.props;
        if (disabled) {
            bgColor = null;
            type = 2
        }
        return (
            <TouchableOpacity
                disabled={disabled}
                onPress={this.props.onPress}
                style={[styles.container, style]}
            >
                {children || (
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 0 }}
                        colors={bgColor || BUTTON_TYPE[type].bg}
                        style={[AppStyle.matchParent, AppStyle.flexCenter, { borderRadius: Sizes.BORDER_RADIUS, }]}
                    >
                        {leftIcon && (
                            <Image style={[styles.leftIcon]} source={leftIcon} />
                        )}

                        <Text style={[styles.title, { color: BUTTON_TYPE[type].color }]}>{title}</Text>

                        {rightIcon && (
                            <Image style={[styles.rightIcon]} source={rightIcon} />
                        )}
                    </LinearGradient>
                )}
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',

        width: '100%',
        height: Sizes.BUTTON_HEIGHT
    },
    title: {
        ...AppStyle.mdText
    },
    leftIcon: {
        position: 'absolute',
        left: 15
    },
    rightIcon: {
        position: 'absolute',
        right: 15
    }
})


export default Button;
